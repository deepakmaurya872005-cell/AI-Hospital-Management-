import {
Chart as ChartJS,
CategoryScale,
LinearScale,
PointElement,
LineElement,
Tooltip,
Legend
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
CategoryScale,
LinearScale,
PointElement,
LineElement,
Tooltip,
Legend
);

function LineChart({patients}){

const data={

labels:patients.map((p)=>p.name),

datasets:[

{

label:"Age",

data:patients.map((p)=>p.age),

borderColor:"#22c55e",

backgroundColor:"#22c55e"

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

<h2>Patient Age Graph</h2>

<Line data={data}/>

</div>

);

}

export default LineChart;