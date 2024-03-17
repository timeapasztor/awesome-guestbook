import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import { Container, Grid } from "@mui/material";
import Table from "./components/Table";
import { Visitors } from "./types/visitor";
import type {} from "@mui/x-data-grid/themeAugmentation";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [localStorageVisitors, setLocalStorageVisitors] = useLocalStorage(
    "visitors",
    []
  );
  const [visitors, setVisitors] = useState<Visitors>(localStorageVisitors);

  useEffect(() => {
    setLocalStorageVisitors(visitors);
  }, [visitors]);

  return (
    <>
      <Header />
      <Grid container component="main">
        <Grid xs={12} sm={12} md={5} lg={4} item={true}>
          <Container>
            <Form visitors={visitors} setVisitors={setVisitors} />
          </Container>
        </Grid>
        <Grid xs={12} sm={false} md={7} lg={8} item={true}>
          <Container maxWidth={false}>
            <Table visitors={visitors} setVisitors={setVisitors} />
          </Container>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
