import React from 'react';
import {
  Box,
  Container,
  Grid,
  makeStyles,
  Button
} from '@material-ui/core';
import Page from 'src/components/Page';
import Budget from './Budget';
import LatestOrders from './LatestOrders';
import LatestProducts from './LatestProducts';
import Sales from './Sales';
import TasksProgress from './TasksProgress';
import TotalCustomers from './TotalCustomers';
import TotalProfit from './TotalProfit';
import TrafficByDevice from './TrafficByDevice';
import Line from './Line';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  importButton: {
    marginRight: theme.spacing(3),
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(2)
  },
  exportButton: {
    marginRight: theme.spacing(3),
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(2)
  }
}));

const Dashboard = () => {
  const classes = useStyles();
  
  

  return (
    <div>
    <Page  className={classes.root} title="Dashboard" >
       <Container maxWidth={false}>
  
        <Box
            display="flex"
            justifyContent="flex-end"
          >
            <h3 className={classes.importButton}>
                Your account balance:
              </h3>
              <h3 className={classes.exportButton}>
                {localStorage.getItem("Balance")}
              </h3> 
              <Button
                color="primary"
                variant="contained"
              >
                Export Report
              </Button>
        </Box>
        <Box mt={3}>
          <Grid container
            spacing={3}
          >
            <Grid
              item
              lg={3}
              sm={6}
              xl={3}
              xs={12}
             >
              <Budget />
            </Grid>
            <Grid
              item
              lg={3}
              sm={6}
              xl={3}
              xs={12}
            >
              <TotalCustomers />
            </Grid>
            <Grid
              item
              lg={3}
              sm={6}
              xl={3}
              xs={12}
            >
              <TasksProgress />
            </Grid>
            <Grid
              item
              lg={3}
              sm={6}
              xl={3}
              xs={12}
            >
              <TotalProfit />
            </Grid>
            <Grid
              item
              lg={8}
              md={12}
              xl={9}
              xs={12}
            >
              <Sales />
            </Grid>
            <Grid
              item
              lg={4}
              md={6}
              xl={3}
              xs={12}
            >
              <TrafficByDevice />
            </Grid>
          
          <Grid
          item
          lg={12}
          md={12}
          xl={9}
          xs={12}
          >
            <Line />
          </Grid>
            <Grid
              item
              lg={4}
              md={6}
              xl={3}
              xs={12}
            >
              <LatestProducts />
            </Grid>
            <Grid
              item
              lg={8}
              md={12}
              xl={9}
              xs={12}
            >
              <LatestOrders />
            </Grid>
          </Grid>
          </Box>
      </Container>
    </Page>
    </div>
  );
};

export default Dashboard;
