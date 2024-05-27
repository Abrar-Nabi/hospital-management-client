import React from 'react';
import '../styles/statsSection.css'; // Your custom styles for the StatsCard component

const StatsCard = ({ title, value,icon}) => {
    return (

            <div className="stats-card">
                   <span className="stats-icon">{icon} </span>
                <div className="stats-content">
                    <h3 className="stats-title">{title}</h3>
                    <p className="stats-value">{value}</p>
                </div>
            </div>
      
    );
};

export default StatsCard;
