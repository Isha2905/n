import { Container, Avatar, Box, Button, Typography } from "@mui/material"
import HowToRegIcon from '@mui/icons-material/HowToReg';
import TextFields from "../components/TextFields";
import CheckboxFields from "../components/CheckboxFields";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { accountRegEx } from "../utils";
import { BputtonGroup } from "react-bootstrap";
import ButtonGroup from 'react-bootstrap/ButtonGroup';

// create schema validation
const schema = yup.object({
fromaccount: yup.string().required('Account Number is required').matches(accountRegEx, 'Account Number should be of 14 digits'),
  toaccount: yup.string().required('Valid Account Number is required').matches(accountRegEx, 'Account Number should be of 14 digits'),
  
  amount: yup.string().required('Amount is required').matches(accountRegEx, 'Account Number should consist of digits'),
  toaccount: yup.string().required('Valid Account Number is required').matches(accountRegEx, 'Account Number should be of 14 digits'),
  maturityinstructions: yup.string().required('Maturity Instructions is required').matches(accountRegEx, 'Account Number should consist of digits'),
  remark: yup.string().required('Remark is required').matches(accountRegEx, 'Account Number should consist of digits')
 
});

const ImpsPayment = () => {
  const { handleSubmit, reset, formState: { errors }, control } = useForm({
    defaultValues: {
      toaccount: '',
      toaccount: '',
      amount: '',
      transactiondate: '',
      maturityinstructions:'',
      remark:''
    },
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  }

  return (
    <Container maxWidth="xs">
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        mt: '4rem',
        alignItems: 'center'
      }}>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <HowToRegIcon />
        </Avatar>
        <Typography component='h1'>Initiate IMPS Payment</Typography>

        {/* Form */}
        <Box noValidate component='form' onSubmit={handleSubmit(onSubmit)} sx={{width: '100%', mt: '2rem' }}>
        <TextFields errors={errors} control={control} name='fromaccount' label='From Number' />
          <TextFields errors={errors} control={control} name='toaccount' label='To Account' />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >Add new Account</Button>
          <TextFields errors={errors} control={control} name='amount' label='Amount' />
          <TextFields errors={errors} control={control} name='transactiondate' label='Transaction Date' />
          <TextFields errors={errors} control={control} name='maturityinstructions' label='Maturity Instructions' />
          <TextFields errors={errors} control={control} name='remark' label='Remark' />
          <CheckboxFields errors={errors} control={control} name='privacy' />
         <ButtonGroup>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >Save</Button>
          <Button
           type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >Reset</Button>
           <Button
           type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >Save as Template</Button>
           <Button
           type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >Continue</Button>

          </ButtonGroup>
        </Box>
      </Box>
    </Container>
  )
}

export default ImpsPayment;