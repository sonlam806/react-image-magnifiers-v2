import React from "react";
import { createRoot } from 'react-dom/client';

import GlassExample from "./GlassExample";
import MagnifierExample from "./MagnifierExample";
import PictureExample from "./PictureExample";
import SideExample from "./SideExample";
import Header from "./Header";

import "./style.css";

const image = require("./sample-image.jpg");

const DemoApp = () => {
  return (
    <React.Fragment>
      <Header />
      <div style={{ paddingBottom: "100px" }} className="app">
        <MagnifierExample image={image} />
        <GlassExample image={image} />
        <PictureExample image={image} />
        <SideExample image={image} />
      </div>
    </React.Fragment>
  );
};

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<DemoApp />);
