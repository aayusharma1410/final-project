import React from 'react';
import AssignmentCard from '../components/AssignmentCard';
import AssignmentGraph from '../components/AssignmentGraph';
import './AssignmentsPage.css';

const AssignmentsPage = () => {
  const dailyAssignments = [
    { id: 1, title: 'Code Challenge', description: 'Solve the daily coding problem.' },
    { id: 2, title: 'Read Documentation', description: 'Read the documentation for React Hooks.' },
  ];

  const weeklyAssignments = [
    { id: 3, title: 'Build a To-Do App', description: 'Create a React to-do application.' },
  ];

  const monthlyAssignments = [
    { id: 4, title: 'Project Presentation', description: 'Prepare and present your project.' },
  ];

  const assignmentData = [
    { week: 'Week 1', completed: 7 },
    { week: 'Week 2', completed: 5 },
    { week: 'Week 3', completed: 8 },
    { week: 'Week 4', completed: 6 },
  ];

  return (
    <div className="assignments-page">
      <h1>Assignments</h1>
      <AssignmentGraph data={assignmentData} />

      <h2>Daily Assignments</h2>
      <div className="assignments-grid">
        {dailyAssignments.map(assignment => (
          <AssignmentCard key={assignment.id} assignment={assignment} />
        ))}
      </div>

      <h2>Weekly Assignments</h2>
      <div className="assignments-grid">
        {weeklyAssignments.map(assignment => (
          <AssignmentCard key={assignment.id} assignment={assignment} />
        ))}
      </div>

      <h2>Monthly Assignments</h2>
      <div className="assignments-grid">
        {monthlyAssignments.map(assignment => (
          <AssignmentCard key={assignment.id} assignment={assignment} />
        ))}
      </div>
    </div>
  );
};

export default AssignmentsPage;
