import React from "react";
import ReactDOM from "react-dom";
import './index.css';


let curDate=new Date( 2023,5,5,13);
curDate=curDate.getHours();
let greeting='';
 const cssStyle={
 color: 'green'
 };



if(curDate>=1 && curDate<12){
  greeting='Good Morning';
  cssStyle.color='green';
} else if(curDate>=12 && curDate<19){
  greeting='Good Afternoon';
  cssStyle.color='Orange';
}
else{
  greeting='Good Night';
  cssStyle.color='Black';

}
ReactDOM.render(
  <>
  <div>
  <h1>Hello Sir, <span style={cssStyle}>{greeting}</span></h1>
  </div>
  </>,
  document.getElementById('root')
);