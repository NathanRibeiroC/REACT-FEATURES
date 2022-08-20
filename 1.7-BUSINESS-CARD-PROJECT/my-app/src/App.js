import React from "react";
// Stylesheet
import "./style.css";
// Components
import ProfilePicture from "./components/ProfilePicture";
import Main from "./components/Main"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="container">
        <ProfilePicture/>
        <Main/>
        <Footer/>
    </div>
  );
}