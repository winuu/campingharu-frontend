import { ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { client } from "./apollo";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, colorTheme } from "./styles";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <ApolloProvider client={client}>
      <HelmetProvider>
        <ThemeProvider theme={colorTheme}>
          <GlobalStyles />
          <Router>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route>
                <NotFound />
              </Route>
            </Switch>
          </Router>
        </ThemeProvider>
      </HelmetProvider>
    </ApolloProvider>
  );
}

export default App;
