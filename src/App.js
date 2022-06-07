import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import WorkingArea from "./components/workingArea/WorkingArea";
import LearningArea from "./components/learningArea/LearningArea";
import Main from "./components/mainpage/Main";
import SideMenu from "./components/ui-elements/Side-Menu";
import PdfCanvas from "./components/workingArea/pdfGenerator/pdfCanvas";

const App = () => {
  return (
      <BrowserRouter>
        <SideMenu />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="working" element={<WorkingArea />} />
          <Route path="learning" element={<LearningArea />} />
          <Route path="print" element={<PdfCanvas />} />
        </Routes>
      </BrowserRouter>
  );
};
export default App;
