import {
Chart as ChartJS,
CategoryScale,
LinearScale,
BarElement,
Tooltip,
Legend
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
CategoryScale,
LinearScale,
BarElement,
Tooltip,
Legend
);

function BarChart({patients}){

const diseaseCount={};

patients.forEach((p)=>{
diseaseCount[p.disease]=(diseaseCount[p.disease]||0)+1;
});

const data={

labels:Object.keys(diseaseCount),

datasets:[
{

label:"Patients",

data:Object.values(diseaseCount),

backgroundColor:"#7c3aed"

}

]

};

return(

<div
style={{
marginTop:40,
background:"#1e293b",
padding:20,
borderRadius:15
}}
>

<h2>Patients by Disease</h2>

<Bar data={data}/>

</div>

);

}

export default BarChart;