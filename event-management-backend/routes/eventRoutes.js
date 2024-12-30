// eventRoutes.js
import express from 'express';
import {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent,
} from '../controllers/eventController.js';

const router = express.Router();

// Event Routes
router.post('/events', createEvent); // Route to create a new event
router.get('/events', getAllEvents); // Route to get all events
router.get('/events/:id', getEventById); // Route to get a specific event by ID
router.put('/events/:id', updateEvent); // Route to update an event by ID
router.delete('/events/:id', deleteEvent); // Route to delete an event by ID

export default router;
