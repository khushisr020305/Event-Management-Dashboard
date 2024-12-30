// src/components/AttendeeList.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';

const AttendeeList = () => {
  const [attendees, setAttendees] = useState([]);
  const [error, setError] = useState('');
  const [message, setMessage] = useState(''); // For displaying success messages

  useEffect(() => {
    const fetchAttendees = async () => {
      try {
        const response = await axios.get('http://localhost:3002/api/attendees');
        setAttendees(response.data);
      } catch (error) {
        setError('Failed to fetch attendees.');
        console.error('Error fetching attendees:', error);
      }
    };
    fetchAttendees();
  }, []);

  const handleRemove = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3002/api/attendees/${id}`);
      console.log('Attendee deleted:', response.data); // Log the response for debugging
      setAttendees(attendees.filter((attendee) => attendee.id !== id)); // Update the list after deletion
      setMessage('Attendee deleted successfully'); // Display success message
    } catch (error) {
      setError('Failed to remove attendee.');
      console.error('Error removing attendee:', error);
    }
  };

  return (
    <div>
      <h1>Attendee Management</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {message && <p style={{ color: 'green' }}>{message}</p>} {/* Display success message */}
      {attendees.length > 0 ? (
        <ul>
          {attendees.map((attendee) => (
            <li key={attendee.id}>
              <p>{attendee.name} ({attendee.email})</p>
              <button onClick={() => handleRemove(attendee.id)}>Remove</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No attendees found.</p>
      )}
    </div>
  );
};

export default AttendeeList;
