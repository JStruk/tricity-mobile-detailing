import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Modal from "react-modal";
import "react-image-gallery/styles/css/image-gallery.css";
import { config } from 'dotenv';
config();

Modal.setAppElement("#root");

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
