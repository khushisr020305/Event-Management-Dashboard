 Organizations often struggle to organize and manage events efficiently. i have developed a web-based Event Management Dashboard to streamline the process of creating events, assigning tasks, and tracking progress.
 The application should allow users to:
 1. Manage events (CRUD operations).(completed)
 2. Manage attendees and assign them tasks.(attendee part completed)
 3. Track tasks related to events with progress visualization.(yet to be implemented)
Frontend Development
 ● Event Management Page:(completed)
 ○ Display a list of all events with options to add, edit, and delete events.
 ○ Eachevent should display details like name, description, location, and
 date.
 ● Attendee Management Page:(completed till add and remove)
 ○ Viewthe list of attendees.
 ○ Addorremove attendees.
 ○ Assign attendees to specific events or tasks.
 ● TaskTracker Page:(ongoing)
 ○ Display tasks associated with each event.
 ○ Allow users to update task status (Pending/Completed).
Backend Development
 Develop RESTful APIs to support the frontend functionality. The APIs must include:
 1. Event Management API:(completed)
 ○ Create an Event
 ○ Getall Events
 ○ Update an Event
 ○ Delete an Event
 2. Attendee Management API:(completed)
 ○ AddanAttendee
 ○ Getall Attendees
 ○ Delete an Attendee
 3. Task Management API:(ongoing)
 ○ Create a Task
 ○ GetTasks for an Event
 ○ Update Task Status
 Integration(ongoing)
 1. Integrate the frontend with the backend APIs to fetch and display real-time
 data.(ongoing)
 2. Ensure smooth user interactions, such as:
 ○ Displaying success/error messages for API calls.
 ○ Loading indicators while waiting for API responses.
