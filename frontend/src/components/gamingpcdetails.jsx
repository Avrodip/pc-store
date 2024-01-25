import React from 'react';
import { useParams } from 'react-router-dom';

const GamingPCDetails = () => {
  // Use useParams to get the label parameter from the URL
  const { label } = useParams();
console.log("gaming pc details called")
  return (
    <div>
      <h2>Gaming PC Details</h2>
      <p>Label: {label}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default GamingPCDetails;
