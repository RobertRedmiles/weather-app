import { Line } from 'react-chartjs-2';
import React from 'react';
import './Graph.css'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


// -=-=-=-=- CHART LEGEND -=-==-=-=-=-=-=-=-=-=-=-=-
export const options = {
    responsive: true,
    maintainAspectRation: false,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Weather App React Project',
        },
    }
};


// _+_+_+_+_+_+_+ CHART FUNCTION +_+_+_+_+_+_+_+_+_+_+_+
function Graph ({data}){

    const temperatures = data.list.map(x => x.main.temp);
    const labels = data.list.map((x, index) => {
        const hour = (index + 1) * 3;
        return 'hour ' + hour;
    });

    const humidity = data.list.map(x => x.main.humidity);


// -=-=-=-=- CHART DATA -=-=-=-=-=-=-=-=-=-=-=-=-=-=--=
    const chartData = { 

        labels, 
        
        datasets: [
            {
                label: 'Temp',
                data: temperatures,
                borderColor: 'rgb(0,255,255)',
                backgroundColor: 'rgb(0,200,255)'

            },
            {
                label: 'Humidity',
                data: humidity,
                borderColor: 'rgb(34,139,87)',
                backgroundColor: 'rgb(34,100,87)'
            }
            
        ]
    }


// -=-=- RETURN -=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

    return (
        <>
            <div>
                <Line options={options} data={chartData} />
            </div>
        </>
    )
}

export default Graph;


// Pull data from endpoints in API to build graph for two data sets 
// --- TEMP --- RH 
// Build function for graph

//install npm install react-js-2  √√

// options is not defined error in console,, find  √√

//console for data properties for const variables √√
//data is null err, comment out graph component for correct data ^^  √√


//create path for temp and humidity √√
// forecast/list(array use .map)/main/temp-humidity √√

//Convert kelvin to F for graph √√
//   .build an input field to load graph data and create an event for the K -> F conversion XX
//   .convert straight from the query to display F XX