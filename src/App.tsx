import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { RecoilRoot } from "recoil";
import { withAuthenticator } from "@aws-amplify/ui-react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./constants/theme";
import NavbarGroup from "./components/Groups/NavbarGroup";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesPage from "./Pages/RoutesPage";
function App() {
  // const [families, setFamilies] = React.useState<Family[]>();

  // React.useEffect(() => {
  //   async function getData() {
  //     try {
  //       const familyData = await callGraphQL<ListFamilysQuery>(listFamilys);
  //       const familys = mapListFamilys(familyData);
  //       setFamilies(familys);
  //     } catch (error) {
  //       console.error("Error fetching familys", error);
  //     }
  //   }
  //   getData();
  // }, []);
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <Router>
            <NavbarGroup />
            <RoutesPage />
          </Router>
        </RecoilRoot>
        {/* <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            {families?.map((family) => {
              return (
                <div key={family.id}>
                  <h2>{family.familyName}</h2>
                </div>
              );
            })}
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div> */}
      </ThemeProvider>
    </>
  );
}

export default withAuthenticator(App);
