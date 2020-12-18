import styled from 'styled-components';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';
import TextField from '@material-ui/core/TextField';

export const MyContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

export const MyWrapper = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-around;

  @media (max-width: 1400px) {
    width: 80%;
  }

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const MySelect = styled(Select)`
  min-width: 150px;
`;
export const MyLabel = styled(InputLabel)({});
export const MyFormHelperText = styled(FormHelperText)({});

export const MyMuiPicker = styled(MuiPickersUtilsProvider)({});
export const MyDatePicker = styled(KeyboardDatePicker)``;

export const MyFormControl = styled(FormControl)``;
export const MyTextField = styled(TextField)``;

export const MyButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  font-size: 2rem;
  color: #fff;
  border-radius: 50%;
  outline: 0;
  border: 0;
  cursor: ${props => (props.diabled ? 'none' : 'pointer')};
  transition: all 0.2s;
  margin-top: 15px;
  background: ${props =>
    props.disabled ? 'var(--color-text-complement)' : 'var(--color-primary)'};

  &:hover {
    background: ${props =>
      props.disabled
        ? 'var(--color-text-complement)'
        : 'var(--color-primary-dark)'};
  }
`;

export const MyCard = styled(Card)``;

export const MyCardContent = styled(CardContent)({});

export const Text = styled.p`
  color: var(--color-text-in-primary);
  font-size: 1.125rem;
  margin-top: 15px;
`;

export const Title = styled.h1`
  color: var(--color-text-in-primary);
  padding: 30px;
`;

export const Subtitle = styled.h3`
  color: var(--color-text-in-primary);
`;

export const MyCardContainer = styled.div`
  width: 49%;
  /* display: flex; */
  /* justify-content: space-between; */
  margin-top: 20px;
`;

export const MyListContainer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`;

export const MyListWrapper = styled.div`
  display: flex;
`;

export const MyValue = styled.span``;

export const MyDate = styled.span`
  margin: 0 20px 0 10px;
`;

export const MyContainerzao = styled.div`
  width: 70vw;
  display: flex;
  justify-content: space-between;
`;
