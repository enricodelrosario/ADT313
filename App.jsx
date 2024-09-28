import React from 'react';
import StudentInfo from '../StudentInfo';
import LoginForm from '../LoginForm';
import Profile from '../Profile';
import Math from '../MathOperations';

const App = () => {
  return (
    <div>
      {/* Student Information */}
      <StudentInfo name="Del Rosario, Enrico" section="BSIT-3C" />

      {/* Login Form */}
      <LoginForm />

      {/* Profile */}
      <Profile name="Del Rosario, Enrico" email="Enricodelrosario360@Gmail.com" />

      {/* Math Operation */}
      <Math />
    </div>
  );
};

export default App;