import React from 'react'
// import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

export default function Graph(props) {
   

    // const data = {
    //     labels: props.data.recall,
    //     datasets:[
    //         {
    //             label :"presicion",
    //             backgroundColor: "rgb(255, 99, 132)",
    //             borderColor: "rgb(255, 99, 132)",
    //             data : props.data.precision,
    //         },
    //     ],
    // };
    const p = props.data.precision.length;
    const r = props.data.recall.length;

    
    return (
        <div>
            {/* <h1>{props.values[0]}</h1> */}
            <h2>Precision : {props.data.precision[p-1]}</h2>
            <h2>Recall : {props.data.recall[r-1]}</h2>
            <h2>f1 score : {props.data.f1}</h2>
            {/* <Line data = {data}/> */}


        </div>
    )
}
