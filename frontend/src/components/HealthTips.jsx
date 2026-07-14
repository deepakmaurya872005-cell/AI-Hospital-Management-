import { useEffect,useState } from "react";

const tips=[

"💧 Drink 3L Water Daily",

"🥗 Eat Healthy Food",

"😴 Sleep 8 Hours",

"🚶 Walk 30 Minutes",

"🏃 Exercise Everyday",

"🍎 Eat Fruits Daily",

"🩺 Regular Health Checkup"

];

function HealthTips(){

const [tip,setTip]=useState("");

useEffect(()=>{

setTip(
tips[Math.floor(Math.random()*tips.length)]
);

},[]);

return(

<div
style={{

marginTop:30,

padding:20,

background:"#312e81",

borderRadius:15,

textAlign:"center",

color:"white"

}}
>

<h2>AI Health Tip</h2>

<h3>{tip}</h3>

</div>

);

}

export default HealthTips;