import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function ControlledExpansionPanels() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root} style={{ height: "70vh", margin: "auto" }}>
      <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading} style={{ color: 'black' }}>Education</Typography>
          <Typography className={classes.secondaryHeading}>Digital Crafts </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography style={{ color: 'black' }}>
            Full Stack Software Developement Certification '19
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading} style={{ color: 'black' }}>Education</Typography>
          <Typography className={classes.secondaryHeading}>
            Bentley University
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography style={{ color: 'black' }}>
            Bachelors of Science, Economics and Finance
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading} style={{ color: 'black' }}>Experience</Typography>
          <Typography className={classes.secondaryHeading}>
            State Street Corporation
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography style={{ color: 'black' }}>
            Lead team to manage the collateral calculation and collections from brokers participating in ETF subscriptions and Redemptions from order inception until settlement.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading} style={{ color: 'black' }}>Experieince</Typography>
          <Typography className={classes.secondaryHeading}>
            Rockefeller Financial
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography style={{ color: 'black' }}>
            Lead a team to process all activities related to client portfolios with a net Asset value of at least 1Million USD
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

    </div>
  );
}