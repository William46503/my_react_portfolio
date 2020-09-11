import React from "react";
import ReactTyping from "./ReactTypingEffect";
import "antd/dist/antd.css";
import { Button } from 'antd';

function Welcome(props) {

  return (
    <div className="welcome-mainContainer">
      {/* <img src="" alt="Picture of William" /> */}
      <span className="placeholder"></span>
      <div className="titleText-Container">
        <h1 className="titleName">William L.W. Lu</h1>
        <div className="titleSubContent">
          <ReactTyping />
        </div>
      </div>
      <div className="buttonContainer">
      <Button type="primary" size="large" className='urlButton'>Linkedin</Button>
      <Button type="primary" size="large" className='urlButton'>Github</Button>
    
      </div>
     </div>
  );
}

export default Welcome;
