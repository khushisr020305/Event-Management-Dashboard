// server.js
import express from 'express';
import cors from 'cors';
import attendeeRoutes from './routes/attendeeRoutes.js'; // Import attendee routes
import eventRoutes from './routes/eventRoutes.js'; // Import event routes

const app = express();

// Middleware
app.use(cors({ origin: '*' }));
app.use(express.json());

// Use attendee and event routes with /api prefix
app.use('/api/attendees', attendeeRoutes); // Attendee routes
app.use('/api/events', eventRoutes); // Event routes

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong', error: err.message });
});

// Start the server on port 3002
const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
