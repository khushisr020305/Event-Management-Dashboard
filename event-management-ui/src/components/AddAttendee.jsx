import { useState } from 'react';
import axios from 'axios';

const AddAttendee = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(''); // New state for feedback messages
  const [isError, setIsError] = useState(false); // Track if there is an error
  const [isLoading, setIsLoading] = useState(false); // Loading state for form submission

  // Email validation function
  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate email format
    if (!isValidEmail(email)) {
      setMessage('Please enter a valid email address.');
      setIsError(true);
      return;
    }
    
    setIsLoading(true); // Show loading state while submitting

    try {
      // Send POST request to backend API
      await axios.post('http://localhost:3002/api/attendees', { name, email });
      setName('');
      setEmail('');
      setMessage('Attendee added successfully!');
      setIsError(false);
    } catch (error) {
      setMessage('Error adding attendee. Please try again.');
      setIsError(true);
      console.error("Error adding attendee:", error);
    } finally {
      setIsLoading(false); // Hide loading state after submission
    }
  };

  return (
    <div>
      <h1>Add Attendee</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Adding...' : 'Add Attendee'}
        </button>
      </form>

      {isLoading && <div>Loading...</div>} {/* Display loading state */}

      {message && (
        <div style={{ color: isError ? 'red' : 'green', marginTop: '10px' }}>
          {message}
        </div>
      )}
    </div>
  );
};

export default AddAttendee;
