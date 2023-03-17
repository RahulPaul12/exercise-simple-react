import React from 'react';
import profile from '../../images/index2.jpg'
import './Side.css'
const Side = (props) => {
    
    return (
        <div className='sidebar'>
            <div className="header">
                <img src={profile} alt="" srcset="" />
                <div className="header-text">
                    <h3>Rahul Paul</h3>
                    <small>Beginner </small>
                </div>
            </div>
            <div className="height-weight">
                <div>
                    <p>60</p>
                    <small>weight</small>
                </div>
                <div>
                    <p>6.5</p>
                    <small>Height</small>
                </div>
                <div>
                    <p>25</p>
                    <small>age</small>
                </div>
            </div>
            <div className="break-time">
                <h2>Add A Break</h2>
                <div className="time">
                    <button>10s</button>
                    <button>20s</button>
                    <button>30s</button>
                    <button>40s</button>
                    <button>50s</button>
                </div>
            </div>
            <div className="exercise-details">
                <h2>Exercise Details</h2>
                <div className="exercise-time">
                    <h3>Exercise time</h3>
                    <small>{props.time} seconds</small>
                </div>
                <div className="exercise-break-time">
                    <h3>Break time</h3>
                    <small>15 seconds</small>
                </div>
            </div>
            <div className="complete-btn">
                <button>Activity Completed</button>
            </div>
        </div>
    );
};

export default Side;