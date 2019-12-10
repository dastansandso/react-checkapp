import React from 'react';
import { render } from 'react-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from "highcharts/highcharts.js";
import highchartsMore from "highcharts/highcharts-more.js";
import solidGauge from "highcharts/modules/solid-gauge.js";
import HighchartsReact from "highcharts-react-official";

highchartsMore(Highcharts);
solidGauge(Highcharts);

const options = {
  chart: {
    type: "solidgauge"
  },  
  pane: {
        center: ['50%', '50%'],
        size: '100%',
        startAngle: 0,
        endAngle: 720,
    },
    
     yAxis: {
        min: 0,
        max: 200,
        title: {
            text: 'Completed',
            y: 70,
        }
    },

  series: [
    { name:'Completed',
      data: [20],
       dataLabels: {
            format:'{y:.1f} %'
        },
        tooltip: {
            valueSuffix: '% Compliance'
        }
    }
  ]
};
 

const Progresscard =(props)=>{
  // console.log(props.info[0])
  return(
    <div className="container mt-3">
       <HighchartsReact highcharts={Highcharts} options={options} />   
      
    </div>
  );
}

export default Progresscard;