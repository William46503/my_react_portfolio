import React, { forwardRef } from "react";
import ReactTypingEffect from 'react-typing-effect';


function ReactTyping(){
  let textContent = ["こんにちは、初めまして！", 
  "Hei! Hyggelig å møte deg!", 
  "你好，很高兴遇到你！", 
  "Hi there! Hows going?", 
  "哈囉, 食咗飯未呀？"];

    return (
        <ReactTypingEffect
          text={textContent}
          eraseDelay = {2000}
          speed = {150}
          typingDelay = {300}
        />
      );
 
}

export default ReactTyping;