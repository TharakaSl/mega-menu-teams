import React from 'react';
import ReactDOM from 'react-dom';
import RightPane from './RightPane';

export const Dashboard: React.FC = () => {
    return (
        <div className="navbar">
            <a href="#home">Home</a>
            <a href="#news">News</a>
            <div className="dropdown">
                <button className="dropbtn">Dropdown
                    <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                    <div className="row">
                        <div className="column left" style={{ backgroundColor: '#aaa' }}>
                            <ul className="left-list">
                                <li><a href="#home">Home</a></li>
                                <li><a href="#news">News</a></li>
                                <li><a href="#contact">Contact</a></li>
                                <li><a href="#about">About</a></li>
                            </ul>
                        </div>
                        <div className="column right" >
                            <div className="row">
                                <RightPane/>
                                <RightPane/>
                                <RightPane/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;