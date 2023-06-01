import React from 'react';
import './ChartBar.css';

const ChartBar = (props) => {
    let barFillHeight = '0%';

    if (props.maxValue > 0) {
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + `%`;
    }
    return (
        <React.Fragment>
            <div className='chartbar'>
                <div className='chartbar__inner'>
                    <div
                        className='chartbar__fill'
                        style={{height: barFillHeight}}
                    ></div>
                </div>
                <div className='chartbar__label'>{props.label}</div>
            </div>
        </React.Fragment>
    );
};

export default ChartBar;
