import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(
        (datapoint) => datapoint.value,
    );
    // console.log(dataPointValues);
    const totalMaximum = Math.max(...dataPointValues);
    // console.log(totalMaximum);
    return (
        <React.Fragment>
            <div className='chart'>
                {props.dataPoints.map((dataPoint) => (
                    <ChartBar
                        key={dataPoint.label}
                        value={dataPoint.value}
                        maxValue={totalMaximum}
                        label={dataPoint.label}
                    />
                ))}
            </div>
        </React.Fragment>
    );
};

export default Chart;
