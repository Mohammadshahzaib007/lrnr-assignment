import React from "react";

import { Outlet } from "react-router-dom";
import { Grid, Box } from "@mui/material";

import CustomTabs from "../../components/CustomTabs/CustomTabs";
import TextEditor from "../../components/TextEditor/TextEditor";
import AllTab from "./AllTab";

const Test2 = () => <p>Board</p>;
const Test3 = () => <p>Graph</p>;
const Test4 = () => <p>Recent</p>;

function HomePage() {
  return (
    <section>
      <Grid container sx={{ width: "100%", height: "100vh" }}>
        <Grid item xs={4}>
          <CustomTabs
            tabNames={["All", "Board", "Graph", "Recent"]}
            tabContent={[
              <AllTab key={0} />,
              <Test2 key={1} />,
              <Test3 key={2} />,
              <Test4 key={3} />,
            ]}
          />
        </Grid>
        <Grid item xs={8}>
          <Box p={10} height="100%">
            <Outlet />
          </Box>
        </Grid>
      </Grid>
    </section>
  );
}

export default HomePage;
