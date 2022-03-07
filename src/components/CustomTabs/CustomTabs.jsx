import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

/**
 * @props
 ** tabNames --- An Array of strings,
 ** tabContent --- it must be an array of react components with hardcoded key.
 *
 * @description the tab names array and components array order matters
 * The component on the 0 index in the components array is for the tab that is on the 0
 *  index in the tabNames array too.
 *
 * @example tabNames = ['first name', 'second name']
    componets = [<ThisCmpIsForFirstName key={0} />, <ThisCmpIsForSecondName key={1} />]
 */

export default function CustomTabs(props) {
  const [value, setValue] = React.useState(0);

  const { tabNames, tabContent } = props;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          indicatorColor="secondary"
          textColor="secondary"
        >
          {tabNames.map((item, i) => (
            <Tab
              key={i}
              label={item}
              {...a11yProps(i)}
              sx={{ fontSize: 12, textTransform: "capitalize" }}
            />
          ))}
        </Tabs>
      </Box>

      {tabContent.map((Cmp, i) => (
        <TabPanel value={value} index={i} key={i}>
          {Cmp}
        </TabPanel>
      ))}
    </Box>
  );
}

CustomTabs.propTypes = {
  tabNames: PropTypes.arrayOf(PropTypes.string),
  tabContent: PropTypes.arrayOf(PropTypes.node),
};
