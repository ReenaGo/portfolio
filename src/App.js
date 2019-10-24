// import React, { Component } from 'react';
// import { BrowserRouter, Route, Link } from 'react-router-dom';
// import './Css/SideNav.css';
// import './Css/App.css';
// import Skills from './Components/Skills';
// import Home from './Components/Home'
// import MyWork from './Components/MyWork'
// import Contact from './Components/Contact'



// export default class App extends Component {
//   render() {
//     return (


//       // <BrowserRouter>
//       //   <div className ="container">
//       //     <div className = "sideNav">
//       //             <img src="" alt=""/>
//       //             <h2 className="sideNavName">Reena Gouldbourne</h2>
//       //             <div className="sideNavList">
//       //                 <button><Link to="/">Home</Link></button>
//       //                 <button><Link to="/mywork">My Work</Link></button>
//       //                 <button><Link to="/contact">Contact</Link></button>
//       //             </div>
//       //     </div>
//       //    <Route path="/" exact component={Home} ></Route>
//       //    <Route path="/mywork" exact component={MyWork} ></Route>
//       //    <Route path="/contact" exact component={Contact} ></Route>

//       //     <Skills/>
//       //   </div>
//       // </BrowserRouter>
//     )
//   }
// }

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { createMuiTheme } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Home from './Components/Home';
import ControlledExpansionPanels from './Components/More'
import PaperSheet from './Components/Contact';
import Projectcards from './Components/Projectcards'
import Skills from './Components/Skills';
import './Css/App.css';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#005b64',
    },
    secondary: {
      main: '#c6ff00',
    },
  },
});

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root} style={{ height: "100vh", width: "100vw", backgroundColor: "transparent" }}>
      <MuiThemeProvider theme={theme} style={{ height: "80%" }}>
        <AppBar position="sticky" style={{ backgroundColor: "#45454d" }}>
          <Tabs
            variant="fullWidth"
            value={value}
            onChange={handleChange}
            aria-label="nav tabs example"
          >
            <LinkTab label="Home" href="/home" {...a11yProps(0)} />
            <LinkTab label="My Work" href="/mywork" {...a11yProps(1)} />
            <LinkTab label="More" href="/more" {...a11yProps(2)} />
            <LinkTab label="Contact" href="/contact" {...a11yProps(3)} />
          </Tabs>
        </AppBar>
      </MuiThemeProvider>
      <TabPanel value={value} index={0}>
        <Home />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Projectcards />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ControlledExpansionPanels />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <PaperSheet />
      </TabPanel>
      <Skills />


    </div>
  );
}