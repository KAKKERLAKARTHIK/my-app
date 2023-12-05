 
import './App.css';
import ButtonCreation from './button1/button-in-function/button_comp';
import Button_component from './button1/button-in-class/Button_compo_inclass';
import OrderdList from './list_crreation/list_creation_function/Ordered_list';
import Unorderd_list from './list_crreation/list_creation_class/Unorderd_list';
import Image_getting from './Image/image_creation';
import ProfileDisplay from './user_Data/UserData';
import RegistrationForm from './RegistrationForm/Form';
import List from './user_Data/UserData';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import BasicExample from './header/heder';
import CardCreation from './Card_creation/cardBootstrap';
import Footer from './footer/footer';
import CardCreation1 from './Card_creation/CardCreation';
import Greeting from './Greeting/Greeting';
import Subscribe from './YoutubButton/Youtub';
import Map from './map/map';
import Profile from './ProfileApi/ProfileApi';
import Table from './table/Table';
 

function App() {
  function GetGreetings(time){
    let greeting=""
    if(time>=0&&time<12){
     greeting= "goodmorning"
    }else if(time>=12&&time<16){
     greeting= "goodafternoon"
    }else if(time>=16&&time<20){
     greeting= "good evining"
    }else{
     greeting= "good night"
    }
    return greeting
    }
    
     function GetDay(day){
      
      switch (day) {
        case 0:
        return  day = "Sunday";
          
        case 1:
          return   day = "Monday";
          
        case 2:
          return    day = "Tuesday";
          
        case 3:
          return   day = "Wednesday";
          
        case 4:
          return   day = "Thursday";
          
        case 5:
          return   day = "Friday";
          
        case 6:
          return   day = "Saturday";
          
          default:
            return   day="none"
      }
       
     }
   
    const RandomColor=() =>{
      let c= Math.floor(Math.random()*16777215).toString(16)
      return `#${c}`
     }
     function GetSeason( season){
      let seasons=""
      if(season>=2&&season<=5){
        seasons= "summer season"
      }else if(season>5&&season<=10){
        seasons= "rainyseason"
      }else {
        seasons= " winterseason"
      } 
      return seasons
      }
return (
  <div >
    <Table/>
  {/* <Subscribe/>
  <Map/> */}
  {/* <BasicExample/> */}
  {/* <Profile/> */}
  {/* < Greeting greet={GetGreetings(new Date().getHours())}  day={GetDay(new Date().getDay())}   seasons={GetSeason(new Date().getMonth())}/> */}
  {/* <BasicExample/>  */}
  {/* <ButtonCreation   ButtonProperties={{width:100,Bgcolor:RandomColor(),text:"100px"
}}/>
 <ButtonCreation   ButtonProperties={{width:200,Bgcolor:RandomColor(),text:"200px"
}}/>
 <ButtonCreation   ButtonProperties={{width:300,Bgcolor:RandomColor(),text:"300px"
}}/>
 <ButtonCreation   ButtonProperties={{width:400,Bgcolor:RandomColor(),text:"400px"
}}/>
 <ButtonCreation   ButtonProperties={{width:500,Bgcolor:RandomColor(),text:"500px"
}}/>
 <ButtonCreation   ButtonProperties={{width:600,Bgcolor:RandomColor(),text:"600px"
}}/>
 <ButtonCreation   ButtonProperties={{width:700,Bgcolor:RandomColor(),text:"700px"
}}/>
 <ButtonCreation   ButtonProperties={{width:800,Bgcolor:RandomColor(),text:"800px"
}}/> */}
<div className="grid"> 
 {/* <ButtonCreation   text="sign up"  color="red"/> */}
  {/* <OrderdList/> */}
{/* <ol> */}
{/*<OrderdList/>
</ol>
<ul>
<Unorderd_list/>
</ul>
<Image_getting/>
<RegistrationForm/>
<List/> */}
{/* <Header/>  */}
 {/* <CardCreation1/>
<CardCreation1/>
<CardCreation1/> */}






















































































































































































































































































</div>
{/* <Image_getting/> */}
<div className='grid'>
{/* <CardCreation1/>
<CardCreation1/>
<CardCreation1/> */}
</div>
 {/* <Footer/>    */}
{/* <CardCreation/>  */}
</div>
  )
 
}

export default App
