import Web from "./Components/Web";
import NavBar from "./Components/NavBar";
import { useState } from "react";
import "./App.css";

function App() {
  const [ShowSideBar, SetShowSideBar] = useState(false);

  const ShowSideBarHandler = () => {
    SetShowSideBar(!ShowSideBar);
  };
  return (
    <div className="App">
      <NavBar
        ShowSideBarStateNav={ShowSideBar}
        ShowSideBarClick={ShowSideBarHandler}
      />

      <Web
        ShowSideBarClickButton={ShowSideBarHandler}
        ShowSideBarState={ShowSideBar}
      />
    </div>
  );
}

export default App;
