const API_KEY = "2cf26a0cbe13cbe0caeb15ff772be510";
let btnO = document.querySelector(".btnO");
let input = document.querySelector(".input");
let city;
let image=document.querySelector('img');
let para = document.querySelectorAll(`p`);
let span = document.querySelectorAll(`span`);

function cli () {
    city = input.value;
    let API_URL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +  
    "&appid=2cf26a0cbe13cbe0caeb15ff772be510&units=metric";
    console.log(API_URL);
  let xhr = new XMLHttpRequest();
  xhr.open("GET", API_URL);
  xhr.onload = function (){
    let date=new Date();
    let parsedData =JSON.parse(xhr.responseText);
    console.log(parsedData);
    para[0].innerText = parsedData.name;
    para[0].innerHTML=date
    let iu=para[0].innerText ;
    para[1].innerText = parsedData.main.temp;
   span[0].innerHTML= parsedData.weather[0].description;
    let icon=parsedData.weather[0].icon;
    document.body.style.backgroundImage="url('https://source.unsplash.com/1600x900/?"+iu+"')";
    
    console.log(icon);
    image.src='http://openweathermap.org/img/wn/'+icon +'@2x.png';
  };
  xhr.send();
};
btnO.addEventListener("click",cli); 