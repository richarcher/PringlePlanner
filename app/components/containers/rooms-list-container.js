import React from 'react';
import _ from 'lodash';
import RoomList from '../views/room-list';
import * as roomApi from '../../api/room-api';

const RoomsListContainer = React.createClass({

  getInitialState: function() {
    return {
      rooms: []
    }
  },

  componentDidMount: function() {
    roomApi.getRooms().then(rooms => {
      this.setState({rooms: rooms})
    });
  },

  render: function() {
    return (
      <div className="rooms-page">
        <h1>Rooms</h1>
        <RoomList rooms={this.state.rooms} />
      </div>
    );
  }

});

export default RoomsListContainer;
