import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import WorkingArea from "./components/workingArea/WorkingArea";
import LearningArea from "./components/learningArea/LearningArea";
import Main from "./components/mainpage/Main";
import SideMenu from "./components/ui-elements/Side-Menu";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <SideMenu />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/working" element={<WorkingArea />} />
          <Route path="/learning" element={<LearningArea />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};
export default App;
