import React from 'react';
import { Link } from 'react-router';

// Stateless Functional Components
export default function(props) {
  return (
    <div className="data-list">

      {props.rooms.map(room => {

        return (
          <div key={room.id} className="data-list-item">
            <div className="details">
              {room.name}
            </div>
          </div>
        );

      })}

    </div>
  );
}
