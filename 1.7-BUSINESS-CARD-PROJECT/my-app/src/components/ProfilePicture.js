import React from "react";
// Stylesheet
import "../style.css";
// Images
import ProfilePictureImage from "../images/profile_picture.jpg";

export default function ProfilePicture() {
  return (     
      <img src={ProfilePictureImage} className="profile--img"/>
  );
}