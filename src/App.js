// my code sucks i know it and im sorry
import phone from './images/petrchatbotscrshts/firstWelcome.png';
import download from './images/app-store-badge.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import features from "./text.json";
import $ from 'jquery';
import 'bootstrap';
import Card from "./Card.js";
import React, { useRef, useEffect } from "react";
import Rellax from "rellax";
import Navbar from 'react-bootstrap/Navbar';

let jaromirSoukup;

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {features: features};
  }
  componentDidMount() {
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
    document.addEventListener(
      "scroll", 
      function scroll(){
        this.setState({
          isOneVisible: isInViewport(document.querySelector(".animat:nth-child(1) .wrapTagline")) ? "visible" : "",
          isTwoVisible: isInViewport(document.querySelector(".animat:nth-child(4) .wrapTagline")) ? "visible" : "",
          isThreeVisible: isInViewport(document.querySelector(".animat:nth-child(7) .wrapTagline")) ? "visible" : ""
        })
      }.bind(this));
    isInViewport(document.querySelector(".imgWrapper img"));
    function pleaseWork() {
      const rellaxRef = useRef();
    useEffect(() => {
      new Rellax(".animate", { // <---- Via class name
        speed: 8,
        center: true,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false
      });
  
      new Rellax(".animat", {
        speed: 15,
        center: false,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false
      });
  
      new Rellax(rellaxRef.current, { // <---- Via useRef element
        speed: 8,
        center: false,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false
      });
    }, []);
    }
    console.log(isInViewport(document.querySelector(".imgWrapper img")))
  }

  render () {
  return (
    <div className="App">
      <Navbar bg="light" sticky="top">
        <Navbar.Brand href="#home" id="brand">monumen</Navbar.Brand>
      </Navbar>
      <div className="scrollContainer">
      <div className="imgWrapper">
          <img src={phone} alt="" />
        </div>
      <div className="mainParallax">
      {/*
      RIP a minute of silence for this sh!t 
      {
      this.state.features.features.map((item,i)=>{
        if(i%2){
          return [
            <div className="animat"></div>,
            <Card 
         text1={this.state.features.features[i].text1} 
         text2={this.state.features.features[i].text2}
         orange={this.state.features.features[i].orange}
         />
            ]
        } else {
         return [<Card 
         visibility={this.state.isOneVisible}
         text1={this.state.features.features[i].text1} 
         text2={this.state.features.features[i].text2}
         orange={this.state.features.features[i].orange}
         />,
         <div className="animat"></div>
         ]
        }
     })} */}
     <Card 
         visibility={this.state.isOneVisible}
         text1={this.state.features.features[0].text1} 
         text2={this.state.features.features[0].text2}
         orange={this.state.features.features[0].orange}
         />
         <div className="animat"></div>
         <div className="animat"></div>
      <Card 
         visibility={this.state.isOneVisible}
         text1={this.state.features.features[1].text1} 
         text2={this.state.features.features[1].text2}
         orange={this.state.features.features[1].orange}
         />
         <div className="animat"></div>
         <div className="animat"></div>
         <Card 
         visibility={this.state.isOneVisible}
         text1={this.state.features.features[2].text1} 
         text2={this.state.features.features[2].text2}
         orange={this.state.features.features[2].orange}
         />
      </div>
      </div>
      <div id="download">
        <h1>So what are you waiting for? Go explore!</h1>
        <form action="https://images.cdn.circlesix.co/image/1/700/0/uploads/posts/2018/09/63125b0ed58a7f29b69b20bb066fd184.jpg">
          <input id="downloadButton" type="image" src={download} alt=""/>
        </form>
      </div>
      <Navbar bg="light">
        <Navbar.Brand href="#home">monumen ©{new Date().getFullYear()}</Navbar.Brand>
      </Navbar>
    </div>
  );
  }
}

export default App;