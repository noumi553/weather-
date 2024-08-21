const button=document.getElementById('btn');
const button2=document.getElementById('btn-two');

button2.addEventListener('click',e=>{
    display(e.target);
});
function display(e){
    const sec=document.getElementById('input-part');
    sec.style.display='block';
    const secoutput=document.getElementById('output-part');
    secoutput.style.display='none';
};

button.addEventListener('click',()=>{
       const sec=document.getElementById('input-part');
       sec.style.display='none';
       const secoutput=document.getElementById('output-part');
       secoutput.style.display='flex';
       myinput();
});

function myinput(){
       const inputField=document.getElementById('input-field');
       const city=inputField.value
       const infoTxt=document.querySelector('.info-txt');
       if(city!=""){
        let url=`https://api.weatherapi.com/v1/current.json?key=6d395f0a50ad434f905115045241708&q=${city}`;
        fetch(url).then(response=>response.json()).then(result=>{
            let loc=document.getElementById('location');
            let cty=document.getElementById('city');
            let Times=document.getElementById('time');
            let temprature_c=document.getElementById('temp_c');
            let temprature_f=document.getElementById('temp_f');
            let Location=result.location;
            loc.innerHTML=Location.country;
            cty.innerHTML=Location.name;
            Times.innerHTML=Location.localtime;
            let currnt=result.current;
            temprature_c.innerHTML=`${currnt.temp_c} C`;
            temprature_f.innerHTML=`${currnt.temp_f} F`;
            let newimg=document.querySelector('img')
            let image=currnt.condition
            console.log(image);
            if(image.code==1000){
              newimg.src="https://cdn.weatherapi.com/weather/64x64/day/113.png";
            }
            else if(image.code==1063){
              newimg.src='https://cdn.weatherapi.com/weather/64x64/day/176.png';
            }
            else if(image.code==1087){
              newimg.src=`https://cdn.weatherapi.com/weather/64x64/day/200.png`;
            }
            else if(image.code===1003){
                newimg.src='https://cdn.weatherapi.com/weather/64x64/day/116.png';
            }
            else if(image.code==1276){
                newimg.src=`https://cdn.weatherapi.com/weather/64x64/day/389.png`;
            }
            else if(image.code==1243){
                newimg.src=`https://cdn.weatherapi.com/weather/64x64/day/356.png`;
            }
            else if(image.code==1240){
                newimg.src=`https://cdn.weatherapi.com/weather/64x64/day/353.png`;
            }
            let infoTxt=document.querySelector('.info-txt');
            infoTxt.innerHTML=image.text;
        }).catch(err=>{console.log(err)});
        infoTxt.innerHTML='';
       }
       else{
        let url=`https://api.weatherapi.com/v1/current.json?key=6d395f0a50ad434f905115045241708&q=Pakistan`;
        fetch(url).then(response=>response.json()).then(result=>{
        let loc=document.getElementById('location');
        let cty=document.getElementById('city');
        let Times=document.getElementById('time');
        let temprature_c=document.getElementById('temp_c');
        let temprature_f=document.getElementById('temp_f');
        let Location=result.location;
        loc.innerHTML=Location.country;
        cty.innerHTML=Location.name;
        Times.innerHTML=Location.localtime;
        let currnt=result.current;
        temprature_c.innerHTML=`${currnt.temp_c} C`;
        temprature_f.innerHTML=`${currnt.temp_f} F`;
        let newimg=document.querySelector('img')
        let image=currnt.condition
        if(image.code==1000){
            newimg.src="https://cdn.weatherapi.com/weather/64x64/day/113.png";
        }
        else if(image.code==1063){
            newimg.src='https://cdn.weatherapi.com/weather/64x64/day/176.png';
        }
        else if(image.code===1003){
            newimg.src='https://cdn.weatherapi.com/weather/64x64/day/116.png';
        }
        else if(image.code==1087){
            newimg.src=`https://cdn.weatherapi.com/weather/64x64/day/200.png`;
          }
        else if(image.code==1276){
            newimg.src=`https://cdn.weatherapi.com/weather/64x64/day/389.png`;
        }
        else if(image.code==1243){
            newimg.src=`https://cdn.weatherapi.com/weather/64x64/day/356.png`;
        }
        else if(image.code==1240){
            newimg.src=`https://cdn.weatherapi.com/weather/64x64/day/353.png`;
        }
        let infoTxt=document.querySelector('.info-txt');
        infoTxt.innerHTML=image.text;
        console.log(image);
        }).catch(err=>{});
       };
};