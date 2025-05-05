# Task Manager App

A simple **Task Manager** built with **Express.js** that allows users to add, view, edit, and delete tasks.  
Each task contains a **topic** and a **description**.  
All tasks are stored **locally** on the server (in-memory or optionally using a JSON file).

---

## Features

- ➕ Add a new task (topic + description)
- 👀 View all tasks
- 📝 Edit an existing task
- 🗑️ Delete a task
- 🗃️ Local storage of tasks (no external database)

---

## Tech Stack

- **Backend**: Express.js (Node.js)
- **Data Storage**: Local storage (using an array or a JSON file)

---

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/task-manager-express.git
cd task-manager-express
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the server

```bash
npm start
```

The server will start on:

```
http://localhost:3000/
```

You can change the port number inside the project if needed.

---

## API Endpoints

| Method | Endpoint        | Description                |
|:------:|:----------------|:----------------------------|
| GET    | `/tasks`         | Get all tasks               |
| POST   | `/tasks`         | Create a new task           |
| PUT    | `/tasks/:id`     | Update an existing task     |
| DELETE | `/tasks/:id`     | Delete a task               |

---

## Example Request and Response

### Add a New Task

- **POST** `/tasks`
- **Request Body:**

```json
{
  "topic": "Complete Project",
  "description": "Finish the task manager app by tonight."
}
```

- **Response:**

```json
{
  "message": "Task added successfully",
  "task": {
    "id": 1,
    "topic": "Complete Project",
    "description": "Finish the task manager app by tonight."
  }
}
```

---

## Notes

- This project uses **local storage**, so tasks will reset when the server restarts unless you implement file-based storage.
- Great for practicing CRUD operations with **Express.js**.
- Feel free to extend this project by adding features like file storage, authentication, or a front-end.

---

## Author

Made with ❤️ by Shivam Singh Mer

---

## License

This project is licensed under the MIT License.
