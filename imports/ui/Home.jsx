
import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { MoodCollection } from '/imports/api/mood';
import { NavLink } from 'react-router-dom'

const Home = () => {
  const handleInput = (e) => {
    e.preventDefault();
   const text = e.currentTarget.innerText;
   MoodCollection.insert({ text, createdAt: new Date() });
 
};
  return (

    <div className="container" >
      <div className="top-nav">
        <NavLink className="nav" to="/history">History</NavLink>
        <h2 className="text">How do you feel today?</h2>
      </div>
      <div className="emojy">
        <div className="happy" onClick={handleInput}>
          <div>
            <div className="eye">
            </div>
            <div className="eye-right">
            </div>
            <div className="mouth-happy">
            </div>
          </div>
          <p>Happy</p>
        </div>

        {/* second */}

        <div className="neutral" onClick={handleInput}>
          <div>
            <div className="eye">
            </div>
            <div className="eye-right">
            </div>
            <div className="mouth-neutral">
            </div>
          </div>
          <p>Neutral</p>
        </div>

        {/* third */}
        <div className="sad" onClick={handleInput}>
          <div>
            <div className="eye">
            </div>
            <div className="eye-right">
            </div>
            <div className="mouth-sad">
            </div>
          </div>
          <p>Sad</p>

        </div>
      </div>
    </div>
  );
};

export default Home;