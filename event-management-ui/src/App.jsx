import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EventList from './components/EventList';
import CreateEvent from './components/CreateEvent';
import TaskTracker from './components/TaskTracker'; // Import TaskTracker component
import AddAttendee from './components/AddAttendee';
import AttendeeList from './components/AttendeeList'; // Import AttendeeList component

const App = () => {
  return (
    <Router>
      <div>
        <h1>Event Management Dashboard</h1>
        <nav>
          <ul>
            <li>
              <a href="/">Event List</a>
            </li>
            <li>
              <a href="/add-attendee">Add Attendee</a>
            </li>
            <li>
              <a href="/attendee-list">Attendee List</a>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<EventList />} /> {/* Event List Page */}
          <Route path="/create-event" element={<CreateEvent />} /> {/* Create Event Page */}
          <Route path="/tasks/:eventId" element={<TaskTracker />} /> {/* Task Tracking Page */}
          <Route path="/add-attendee" element={<AddAttendee />} /> {/* Add Attendee Page */}
          <Route path="/attendee-list" element={<AttendeeList />} /> {/* Attendee List Page */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
