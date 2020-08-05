import React from "react";
import { Switch, Route } from "react-router-dom";
import { Container, Box } from "@material-ui/core";
import HomePage from "../HomePage";

interface Props {
  sample?: string;
}

const RoutesPage = (props: Props) => {
  return (
    <Container>
      <Box my={2}>
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Box>
    </Container>
  );
};

export default RoutesPage;
