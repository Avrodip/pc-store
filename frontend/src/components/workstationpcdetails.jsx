import React from 'react';
import { useParams } from 'react-router-dom';

const WorkstationPCDetails = () => {
  const { label } = useParams();

  return (
    <div>
      <h2>Workstation PC Details</h2>
      <p>Label: {label}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default WorkstationPCDetails;
