import React from 'react';
import { Link } from 'react-router-dom';
import "./topDrawer.css";

const TopDrawer = (props) => {
    let drawerClasses = 'top-drawer';

    if (props.show) {
        drawerClasses = 'top-drawer open';
    }

    return (
    <nav className={drawerClasses}>
            <div className="liList">
                <li><Link to="/">Main</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="#">Resume</Link></li>
                <li><Link to="/about">About Me</Link></li>
            </div>
    </nav>
    );
};

export default TopDrawer;