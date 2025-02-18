import React from 'react';
import './AssignmentCard.css';

const AssignmentCard = ({ assignment }) => {
  return (
    <div className="assignment-card">
      <h3>{assignment.title}</h3>
      <p>{assignment.description}</p>
      <button>View Assignment</button>
    </div>
  );
};

export default AssignmentCard;
