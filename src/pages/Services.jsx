
import { useState } from "react";

function Services() {
const [attendance, setAttendance] = useState(0);
const [tasks, setTasks] = useState([
{ name: "Complete programming assignment", done: false },
{ name: "Review lecture notes", done: false },
{ name: "Prepare for next class", done: false }
]);

function toggleTask(index) {
setTasks(tasks.map((task, i) =>
i === index ? { ...task, done: !task.done } : task
));
}

return (
<div className="page-content">
<h1>Student Dashboard</h1>
<p className="page-intro">
Manage your academic activities and keep your semester organized.
</p>

<div className="dashboard-grid">
<div className="dashboard-card">
<span>📅</span>
<h3>Attendance Tracker</h3>
<h2>{attendance} classes attended</h2>
<button onClick={() => setAttendance(attendance + 1)}>
+ Record Attendance
</button>
</div>

<div className="dashboard-card">
<span>📝</span>
<h3>Assignment Progress</h3>
<h2>{tasks.filter(task => task.done).length}/{tasks.length} completed</h2>
<p>Keep working towards your academic goals.</p>
</div>
</div>

<section className="task-section">
<h2>My Assignments</h2>
{tasks.map((task, index) => (
<label className="task-item" key={index}>
<input
type="checkbox"
checked={task.done}
onChange={() => toggleTask(index)}
/>
<span className={task.done ? "completed" : ""}>
{task.name}
</span>
</label>
))}
</section>

<section className="task-section">
<h2>Weekly Timetable</h2>
<div className="table-wrap">
<table>
<thead>
<tr>
<th>Day</th>
<th>Course</th>
<th>Time</th>
</tr>
</thead>
<tbody>
<tr><td>Monday</td><td>Programming</td><td>9:00 AM</td></tr>
<tr><td>Tuesday</td><td>Mathematics</td><td>11:00 AM</td></tr>
<tr><td>Wednesday</td><td>Computer Studies</td><td>10:00 AM</td></tr>
<tr><td>Thursday</td><td>Data Structures</td><td>12:00 PM</td></tr>
<tr><td>Friday</td><td>Project Work</td><td>9:00 AM</td></tr>
</tbody>
</table>
</div>
</section>
</div>
);
}

export default Services;