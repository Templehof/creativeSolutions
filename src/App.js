import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import WorkingArea from "./components/WorkingArea";
import LearningArea from "./components/LearningArea";
import Main from "./components/ui-elements/mainpage/Main";
import SideMenu from "./components/ui-elements/Side-Menu";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <SideMenu />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/working/" element={<WorkingArea />} />
          <Route path="/learning/" element={<LearningArea />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};
export default App;
