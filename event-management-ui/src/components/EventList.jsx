import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation
import axios from 'axios';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:3002/api/events');
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();
  }, []);

  const formatDate = (date) => {
    const eventDate = new Date(date);
    return eventDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }) + ' ' + eventDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div>
      <h2>Event List</h2>
      <Link to="/create-event">
        <button>Create New Event</button>
      </Link>
      <ul>
        {events.length > 0 ? (
          events.map((event) => (
            <li key={event.id}>
              <h3>{event.name}</h3>
              <p>{event.description}</p>
              <p>{event.location}</p>
              <p>{formatDate(event.date)}</p>
            </li>
          ))
        ) : (
          <p>No events available</p>
        )}
      </ul>
    </div>
  );
};

export default EventList;
