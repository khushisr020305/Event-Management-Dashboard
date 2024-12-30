// CreateEvent.jsx
import { useState } from 'react';
import axios from 'axios';
import { Box, TextField, Button, Typography, CircularProgress, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const CreateEvent = () => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!eventName || !eventDate || !eventLocation || !eventDescription) {
      setError('All fields are required');
      return;
    }

    setLoading(true);
    const newEvent = { name: eventName, date: eventDate, location: eventLocation, description: eventDescription };

    axios
      .post('/api/events', newEvent)
      .then((response) => {
        console.log('Event created:', response.data);
        setEventName('');
        setEventDate('');
        setEventLocation('');
        setEventDescription('');
        setLoading(false);
        setSuccess('Event created successfully!');
        setError('');
        setTimeout(() => {
          navigate('/'); // Navigate to the Event List page after success
        }, 2000);
      })
      .catch((error) => {
        console.error('Error creating event:', error);
        setError('Failed to create event');
        setLoading(false);
      });
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>Create Event</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Event Name"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Event Date"
          type="date"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Event Location"
          value={eventLocation}
          onChange={(e) => setEventLocation(e.target.value)}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Event Description"
          value={eventDescription}
          onChange={(e) => setEventDescription(e.target.value)}
          fullWidth
          sx={{ mb: 2 }}
        />
        {error && <Alert severity="error">{error}</Alert>}
        {success && <Alert severity="success">{success}</Alert>}
        <Button type="submit" variant="contained" color="primary" disabled={loading}>
          {loading ? <CircularProgress size={24} /> : 'Create Event'}
        </Button>
      </form>
    </Box>
  );
};


export default CreateEvent;
