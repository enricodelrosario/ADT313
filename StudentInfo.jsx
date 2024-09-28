import React from 'react';

const StudentInfo = ({ EnricoDelRosario, BSIT3C }) => {
  return (
    <div style={{ backgroundColor: '#f8f8f8', padding: '15px', textAlign: 'center' }}>
      <h2>{EnricoDelRosario}</h2>
      <h4>Section: {BSIT3C}</h4>
    </div>
  );
};
export default StudentInfo;