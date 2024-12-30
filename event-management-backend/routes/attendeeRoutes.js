import express from 'express';
import { createAttendee, getAllAttendees, deleteAttendee } from '../controllers/attendeeController.js';

const router = express.Router();

router.post('/attendees', (req, res, next) => {
    console.log('POST /attendees hit');
    next();
}, createAttendee);

router.get('/attendees', (req, res, next) => {
    console.log('GET /attendees hit');
    next();
}, getAllAttendees);

router.delete('/attendees/:id', (req, res, next) => {
    console.log(`DELETE /attendees/${req.params.id} hit`);
    next();
}, deleteAttendee);

export default router;
