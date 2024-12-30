import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';  // Import useParams to get eventId

const TaskTracker = () => {
  const { eventId } = useParams();  // Get eventId from the URL
  const [tasks, setTasks] = useState([]);
  
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(`http://localhost:3002/api/tasks/${eventId}`);
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    fetchTasks();
  }, [eventId]);  // Fetch tasks whenever eventId changes

  const updateTaskStatus = async (taskId, status) => {
    try {
      await axios.put(`http://localhost:3002/api/tasks/${taskId}`, { status });
      setTasks(tasks.map(task => 
        task.id === taskId ? { ...task, status } : task
      ));
    } catch (error) {
      console.error("Error updating task status:", error);
    }
  };

  return (
    <div>
      <h1>Task Tracker for Event {eventId}</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <p>{task.name}</p>
            <p>{new Date(task.deadline).toLocaleString()}</p>
            <button onClick={() => updateTaskStatus(task.id, 'Completed')}>Mark as Completed</button>
            <p>Status: {task.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskTracker;
