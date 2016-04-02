import React from 'react';
import { Link } from 'react-router';

// Stateless Component
export default function(props) {
  return (
    <div className="app">
      <nav>
        <ul>
          <li><Link to="/" activeClassName="is-active">Home</Link></li>
          <li><Link to="/rooms" activeClassName="is-active">Rooms</Link></li>
        </ul>
      </nav>
      <main>
        {props.children}
      </main>
    </div>
    );
}
