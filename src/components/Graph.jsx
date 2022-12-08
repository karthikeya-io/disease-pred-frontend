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
            <h2>11 point interpolated precision</h2>

            <div >
                <div style={{margin: "5px 580px 0 580px"}}>
                <div style={{float: 'left'}}>
                <h3>Precision</h3>
                {
                    props.data.precision.map((p) => {
                        return (
                            <span><h5>{p} </h5> </span>
                        )
                    })
                }
                </div>
                <div style={{float: 'right'}}>
                <h3>Recall</h3>
                {
                    props.data.recall.map((r) => {
                        return (
                            <span><h5>{r}</h5>  </span>
                        )
                    })
                }
                </div>
                </div>
            </div>

        </div>
    )
}
