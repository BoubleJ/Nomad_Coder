import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Navigation from "./component/Navigation";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigation />}></Route>
        <Route path="/home" exact={true} element={<Home />}></Route>
        <Route path="/about" exact={true} element={<About />}></Route>
        <Route path="/movie_detail" exact={true} element={<Detail />}></Route>
      </Routes>
    </HashRouter>
  );
}
export default App;
