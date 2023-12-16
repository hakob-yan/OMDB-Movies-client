// App.js (updated)
import React, { ReactElement } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./pages/Movies";
import Error from "./pages/Error";
import * as paths from "./constants/routerPaths"
import NavBar from "./layouts/NavBar";

function App(): ReactElement {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path={paths.HOME} element={<Movies />} />
          <Route path={paths.ALL} element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
