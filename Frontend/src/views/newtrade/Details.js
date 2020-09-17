import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  makeStyles
} from '@material-ui/core';
import { Navigate } from 'react-router';




 const states = [
  {
    value: 'buy',
    label: 'Buy'
  },
  {
    value: 'sell',
    label: 'Sell'
  },
];




const useStyles = makeStyles(() => ({
  root: {}
}));

const Details = ({ className, ...rest }) => {
  const balance=0;
  const classes = useStyles();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    stockName: ' ',
    stockType: ' ',
    tradeId: ' ',
    tradeType: '',
    quantity: 0,
    tradeDate: '',
    totalPrice: 0.0,
    unitPrice: 0.0,
    state: 'Alabama',
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };


  const handleSubmit = (event) => {
    event.preventDefault();
   
    const token=localStorage.getItem('Auth');
    const t=token.replace(/['"]+/g, '')
    const Auth=`Bearer ${t}`;
    console.log(Auth)
    console.log(values.stockName)
    
    const data = {
      stockName: values.stockName,
      tradeType: values.tradeType,
      quantity:values.quantity,
      tradeDate:values.tradeDate,
      unitPrice:values.unitPrice,
      

    };
    
    
   
    axios.post('http://localhost:3000/transaction', data ,
    {
      headers:{
        'Authorization':Auth,
        'Accept':'application/json',
        'content-Type':'application/json'
      }
    })
      .then(res => {
        console.log(res);
       
        if(res.data.error!=="Please authenticate")
        {
          console.log(res.data.balance);
          localStorage.setItem("Balance",res.data.user.balance)
          navigate('/app/dashboard', { replace: true });
          
         

        }
        else
        {
          alert('You are not Allowed for Transaction ,Authentication needed')
        }
       
      });
  };

  return (
    <form
      autoComplete="off"
      noValidate
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Card>
        <CardHeader subheader="Please enter the new trade details" title="Trade Info"     />
       
        <Divider />
        <CardContent>
          <Grid  container  spacing={3}  >
          
            <Grid   item md={6}   xs={12} >
             
              <TextField
                fullWidth
                helperText="Please specify the Stock name"
                label="Stock Name"
                name="stockName"
                onChange={handleChange}
                required
                value={values.stockName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
           >
              <TextField
                fullWidth
                label="Stock Type"
                name="stockId"
                onChange={handleChange}
                required
                value={values.stockType}
                variant="outlined"
              />
            </Grid>
            <Grid   item md={6}   xs={12} >
              <TextField
                fullWidth
                label="Trade Type"
                name="tradeType"
                onChange={handleChange}
                required
              
                value={values.tradeType}
                variant="outlined"
              >
              </TextField>
            </Grid>
            <Grid   item md={6}   xs={12} >
              <TextField
                fullWidth
                label="Quantity"
                name="quantity"
                onChange={handleChange}
                required
                type="number"
                value={values.quantity}
                variant="outlined"
              />
            </Grid>
            <Grid   item md={6}   xs={12} >
                <TextField
                  fullWidth
                 // label="Trade Date"
                  name="tradeDate"
                  onChange={handleChange}
                  required
                  type="date"
                  value={values.tradeDate}
                  variant="outlined"
                />
              </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Unit Price"
                name="unitPrice"
                onChange={handleChange}
                required
                type="number"
                value={values.unitPrice}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          display="flex"
          justifyContent="flex-end"
          p={2}
        >
          <Button
            color="primary"
            variant="contained"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Box>
      </Card>
    </form>
  );
};

Details.propTypes = {
  className: PropTypes.string
};

export default Details;

