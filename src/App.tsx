import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Family, { mapListFamilys } from "./models/family";
import callGraphQL from "./functions/graphql-wrapper";
import { ListFamilysQuery } from "./API";
import { listFamilys } from "./graphql/queries";
import { withAuthenticator } from "@aws-amplify/ui-react";

function App() {
  const [families, setFamilies] = React.useState<Family[]>();

  React.useEffect(() => {
    async function getData() {
      try {
        const familyData = await callGraphQL<ListFamilysQuery>(listFamilys);
        const familys = mapListFamilys(familyData);
        setFamilies(familys);
      } catch (error) {
        console.error("Error fetching familys", error);
      }
    }
    getData();
  }, []);
  return (
    <div className="App">
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
    </div>
  );
}

export default withAuthenticator(App);
