// App.js (updated)
import React, { ReactElement, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./pages/Movies";
import Error from "./pages/Error";
import * as paths from "./constants/routerPaths";
import NavBar from "./layouts/NavBar";
import Movie from "./pages/Movie";
import { useAppDispatch } from "./hooks/useAppDispatch";
import { getUsersList } from "./redux/features/users/usersSlice";

function App(): ReactElement {
  const dispatch = useAppDispatch();
  useEffect(() => {
    (async function () {
      dispatch(getUsersList());
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path={paths.HOME} element={<Movies />} />
          <Route path={paths.MOVIE_PARAMS} element={<Movie />} />
          <Route path={paths.ALL} element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
