import axios from 'axios';

/**
 * Get rooms
 */
export function getRooms() {
  return axios.get('http://localhost:3001/rooms')
    .then(response => response.data);
}
