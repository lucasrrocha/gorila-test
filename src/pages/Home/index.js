import React, { useState, useEffect } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import InputAdornment from '@material-ui/core/InputAdornment';
import { MenuItem } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Arrow from '@material-ui/icons/ArrowForward';
import Delete from '@material-ui/icons/Delete';
import { Chart } from 'react-google-charts';

import firebase from 'firebase/app';
import 'firebase';

import * as S from './styles';

import PageHeader from '../../components/PageHeader';
import fire from '../../fire';

const Home = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [type, setType] = useState('');
  const [price, setPrice] = useState('');
  const [investments, setInvestments] = useState([]);
  const [open, setOpen] = useState(false);
  const [valid, setValid] = useState(true);
  const [options, setOptions] = useState({
    title: 'Resumo da Carteira',
    is3D: true,
    legend: {
      position: 'left',
      alignment: 'center'
    }
  });
  const [data, setData] = useState();

  useEffect(() => {
    fetchData();
    loadChart();
  }, []);

  useEffect(() => {
    loadChart();
  }, [investments]);

  useEffect(() => {
    if (type && price && selectedDate) {
      setValid(false);
    }
  }, [type, price, selectedDate]);

  const loadChart = async () => {
    const db = firebase.firestore();
    const fixa = await db
      .collection('investments')
      .where('type', '==', 'RENDA_FIXA')
      .get();

    const variavel = await db
      .collection('investments')
      .where('type', '==', 'RENDA_VARIAVEL')
      .get();

    setData([
      ['Tipo', '%'],
      ['Renda Fixa', fixa.docs.length],
      ['Renda Variavel', variavel.docs.length]
    ]);
  };

  const fetchData = async () => {
    const db = firebase.firestore();
    const data = await db
      .collection('investments')
      .orderBy('date', 'asc')
      .get();
    setInvestments(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const cleanInputs = () => {
    setType('');
    setPrice('');
    setSelectedDate(new Date());
    setValid(true);
  };

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const handleType = event => {
    setType(event.target.value);
  };

  const handlePrice = event => {
    setPrice(event.target.value);
  };

  const onDelete = id => {
    const db = firebase.firestore();
    db.collection('investments')
      .doc(id)
      .delete();
    fetchData();
  };

  const onCreate = async () => {
    const db = firebase.firestore();
    db.collection('investments').add({
      type: type,
      date: selectedDate,
      value: price
    });
    setOpen(true);
    cleanInputs();
    fetchData();
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const Alert = props => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  };

  const niceDate = date => {
    let timestamp = date;
    let newDate = new Date(timestamp * 1000);
    var day = newDate.getDate();
    var month = newDate.getMonth() + 1;
    var year = newDate.getFullYear();

    var formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
  };

  const handleCurrency = e => {
    let value = e;
    value = value.replace(/(\d)(\d{2})$/, '$1,$2');
    value = value.replace(/(?=(\d{3})+(\D))\B/g, '.');
    return value;
  };

  return (
    <S.MyContainer
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <PageHeader onClick={handleLogout} />
      <S.Title>Carteira de investimento</S.Title>
      <S.MyWrapper>
        <S.Text>Adicionar novo investimento:</S.Text>
        <S.MyFormControl variant="outlined">
          <S.MyLabel htmlFor="type">Tipo</S.MyLabel>
          <S.MySelect
            required
            value={type}
            label="Tipo"
            onChange={handleType}
            inputProps={{ name: 'type', id: 'type' }}
          >
            <MenuItem value="RENDA_FIXA">Renda Fixa</MenuItem>
            <MenuItem value="RENDA_VARIAVEL">Renda Variável</MenuItem>
          </S.MySelect>
          <S.MyFormHelperText>Renda fixa ou variável?</S.MyFormHelperText>
        </S.MyFormControl>
        <S.MyFormControl>
          <S.MyTextField
            id="price"
            label="Valor da compra"
            variant="outlined"
            helperText="Ex. 100000"
            value={price}
            onChange={handlePrice}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">R$</InputAdornment>
              )
            }}
            required
          />
        </S.MyFormControl>
        <S.MyFormControl>
          <S.MyMuiPicker utils={DateFnsUtils}>
            <S.MyDatePicker
              autoOk
              disableFuture
              variant="inline"
              inputVariant="outlined"
              format="dd/MM/yyyy"
              id="buy-date"
              label="Data da Compra"
              helperText="Ex. 16/12/2020"
              value={selectedDate}
              onChange={handleDateChange}
            />
          </S.MyMuiPicker>
        </S.MyFormControl>
        <S.MyButton onClick={onCreate} disabled={valid}>
          +
        </S.MyButton>
        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            Investimento Adicionado com sucesso!
          </Alert>
        </Snackbar>
      </S.MyWrapper>

      {investments && investments.length > 0 && (
        <S.MyContainerzao>
          <S.MyCardContainer>
            <S.MyCard>
              <S.MyCardContent>
                <S.Subtitle>Renda fixa:</S.Subtitle>
                {investments.map(doc => {
                  if (doc.type === 'RENDA_FIXA') {
                    return (
                      <S.MyListContainer key={doc.id}>
                        <S.MyListWrapper>
                          <Arrow />
                          <S.MyDate>{niceDate(doc.date.seconds)}</S.MyDate>
                          <S.MyValue>R$ {handleCurrency(doc.value)}</S.MyValue>
                        </S.MyListWrapper>
                        <Delete
                          onClick={() => onDelete(doc.id)}
                          style={{ cursor: 'pointer' }}
                        />
                      </S.MyListContainer>
                    );
                  }
                })}
              </S.MyCardContent>
            </S.MyCard>
          </S.MyCardContainer>
          <S.MyCardContainer>
            <S.MyCard>
              <S.MyCardContent>
                <S.Subtitle>Renda Variavel:</S.Subtitle>
                {investments.map(doc => {
                  if (doc.type === 'RENDA_VARIAVEL') {
                    return (
                      <S.MyListContainer key={doc.id}>
                        <S.MyListWrapper>
                          <Arrow />
                          <S.MyDate>{niceDate(doc.date.seconds)}</S.MyDate>
                          <S.MyValue>R$ {handleCurrency(doc.value)}</S.MyValue>
                        </S.MyListWrapper>
                        <Delete
                          onClick={() => onDelete(doc.id)}
                          style={{
                            cursor: 'pointer',
                            justifyContent: 'flex-end'
                          }}
                        />
                      </S.MyListContainer>
                    );
                  }
                })}
              </S.MyCardContent>
            </S.MyCard>
          </S.MyCardContainer>
        </S.MyContainerzao>
      )}
      <div style={{ marginTop: 30 }}>
        <Chart
          style={{ display: 'flex', alignItems: 'center' }}
          width={'1000px'}
          height={'300px'}
          loader={<div>Loading Chart</div>}
          chartType="PieChart"
          data={data}
          options={options}
        />
      </div>
    </S.MyContainer>
  );
};

export default Home;
