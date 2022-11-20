import RegisterForm from 'components/RegisterForm/RegisterForm';
import { useDispatch } from 'react-redux';
import { signup } from '../../redux/auth/authOperations';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
export const commonStyles = {
  boxShadow: 3,
  bgcolor: theme => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
  color: theme => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
  mx: 'auto',
  my: 5,
  p: 5,
  border: 1,
  maxWidth: '280px',
};
export default function RegisterPege() {
  const dispatch = useDispatch();

  const onRegister = data => {
    dispatch(signup(data));
  };

  return (
    <Container sx={{ mt: '1rem', maxWidth: '1000px' }}>
      <Box sx={{ ...commonStyles, borderRadius: '16px' }}>
        <RegisterForm onSubmit={onRegister} />
      </Box>
    </Container>
  );
}