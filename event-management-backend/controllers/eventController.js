// eventController.js

// Function to create a new event
export const createEvent = (req, res) => {
  const { name, description, location, date } = req.body;

  if (!name || !description || !location || !date) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Simulate database operation (replace with actual database logic)
  const newEvent = { id: Date.now(), name, description, location, date };

  // Respond with the newly created event
  res.status(201).json({
    message: 'Event created successfully',
    event: newEvent,
  });
};

// Function to get all events
export const getAllEvents = (req, res) => {
  try {
    // Simulating database fetch (replace with actual DB query)
    const events = [
      { id: 1, name: 'Event 1', description: 'Description 1', location: 'Location 1', date: '2024-12-27' },
      { id: 2, name: 'Event 2', description: 'Description 2', location: 'Location 2', date: '2024-12-28' },
    ];

    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching events', error: error.message });
  }
};

// Function to get a single event by ID
export const getEventById = (req, res) => {
  const { id } = req.params;

  // Simulating event fetch (replace with actual DB query)
  const event = { id, name: 'Event 1', description: 'Description 1', location: 'Location 1', date: '2024-12-27' };

  if (!event) {
    return res.status(404).json({ message: 'Event not found' });
  }

  res.status(200).json(event);
};

// Function to update an event
export const updateEvent = (req, res) => {
  const { id } = req.params;
  const { name, description, location, date } = req.body;

  if (!name || !description || !location || !date) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Simulate event update (replace with actual DB update)
  const updatedEvent = { id, name, description, location, date };

  res.status(200).json({
    message: 'Event updated successfully',
    event: updatedEvent,
  });
};

// Function to delete an event
export const deleteEvent = (req, res) => {
  const { id } = req.params;

  // Simulate event deletion (replace with actual DB delete)
  console.log(`Event with ID ${id} deleted`);

  res.status(200).json({ message: `Event with ID ${id} deleted successfully` });
};
