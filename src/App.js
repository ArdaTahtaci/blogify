import React from "react";
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AddPost from "./components/AddPost";
import IndividualPosts from "./components/IndividualPosts";
import { useSelector } from "react-redux";


function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<AddPost />} />
        <Route path="/posts/:id" element={<IndividualPosts />} />
      </Routes>
    </div>
  );
}

export default App;
