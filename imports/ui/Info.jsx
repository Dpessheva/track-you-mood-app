import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { MoodCollection } from '../api/mood';
import { NavLink } from 'react-router-dom';

const Info = () => {
  const mood = useTracker(() => {
    return MoodCollection.find({}).fetch();
  });


  return (
    <div className="info">
      <div className="top-nav">
        <NavLink className="nav" to="/">Home</NavLink>
        <h2>Your records</h2>
      </div>
      <div className="table">
        <table id="moods">
          <thead>
            <tr>
              <th>Date</th>
              <th>Mood</th>
            </tr>
          </thead>
          <tbody>
            {mood.map(m => <tr key={m._id}>
              <td>{m.createdAt.toDateString()}</td>
              <td>{m.text}</td>
            </tr>)}

          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Info;