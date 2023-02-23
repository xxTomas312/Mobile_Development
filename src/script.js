import Button from "./components/Button.js";
import RangeBar from "./components/RangeBar.js";
import ToggleButton from "./components/ToggleButton.js";
import Menu from "./components/Menu.js";
window.onload=() => {

  const previousButton = new Button("#previous-button");
  previousButton.onClick = (value) => {
    console.log('previous button', value)
  }

  const button = new ToggleButton("#action-button");
  button.onClick = (value) => {
    console.log('toggle button', value);
    button.toggle(1);
  }

  const slideBar = new RangeBar("#volume");
  slideBar.onClick = (value) => {
    console.log("slideBar button", value)
    slideBar.toggle();
  } 

  const menu = new Menu("#Menu");
  menu.onClick = (value) => {
    console.log("menu button", value)
    menu.toggle();
  } 

  const volumeBar = new RangeBar("#volume");
  volumeBar.onClick = (value) => {
    console.log("volumeBar button", value)
    volumeBar.toggle();
  } 

  const infoButton = new ToggleButton("#info-button");
  infoButton.onClick = (value) => {
    console.log("info button", value)
    infoButton.toggle();
  }

//   infoButton.toggle(0);
//   menuButton.toggle(0);
//   button.toggle(0);
 };