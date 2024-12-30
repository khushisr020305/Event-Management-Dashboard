// attendeeController.js

// Function to create an attendee
export const createAttendee = (req, res) => {
    const { name, email } = req.body;
  
    if (!name || !email) {
      return res.status(400).json({ message: 'Name and email are required' });
    }
  
    console.log('Attendee data received:', req.body);
  
    res.status(201).json({
      message: 'Attendee added successfully',
      attendee: { name, email },
    });
  };
  
  // Function to fetch all attendees
  export const getAllAttendees = (req, res) => {
    try {
      const attendees = [
        { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
      ];
  
      res.status(200).json(attendees);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching attendees', error: error.message });
    }
  };
  
  // Function to delete an attendee
  export const deleteAttendee = (req, res) => {
    const { id } = req.params;
  
    if (!id) {
      return res.status(400).json({ message: 'Attendee ID is required' });
    }
  
    try {
      console.log(`Attendee with ID ${id} deleted`);
  
      res.status(200).json({ message: `Attendee with ID ${id} deleted successfully` });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting attendee', error: error.message });
    }
  };
  