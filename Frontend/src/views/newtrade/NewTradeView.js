import React, { usestate } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import {
  Collapse,
  Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,
  Form, FormGroup, Label, Input, Button,
} from 'reactstrap';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Grid,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Typography,
  AppBar,
  Tabs,
  Tab,
  Paper,
  makeStyles
} from '@material-ui/core';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import Page from 'src/components/Page';
import Details from './Details';
import Details2 from './Details2';

const useStyles = makeStyles((theme) => ({
  root: {
   // backgroundColor: theme.palette.background.default,
    backgroundColor: '#424242',
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

/* const RegisterView = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Page
      className={classes.root}
      title="Register"
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={12}
            md={10}
            xs={16}
          >
            <Details />
          </Grid>
        </Grid>
      </Container>

    </Page>
  );
};*/
const RegisterView = () => {
  const [value, setValue] = React.useState(2);
 

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Page
      title="Input Trade"
    >
      <TabContext value={value}>
        <AppBar position="static">
          <TabList onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Equity" value="1" />
            <Tab label="Bonds" value="2" />
          </TabList>
        </AppBar>
      <TabPanel value="1">
        <Container maxWidth="lg">
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              lg={12}
              md={10}
              xs={16}
            >
              <Details />
            </Grid>
          </Grid>
        </Container>
      </TabPanel>
      <TabPanel value="2">
        <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={12}
            md={10}
            xs={16}
          >
            <Details2 />
          </Grid>
        </Grid>
        </Container>
      </TabPanel>
      </TabContext>
    </Page>
  );
}
export default RegisterView;
