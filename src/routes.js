import { randomUUID } from 'node:crypto'
import { Database } from './database.js'
import { buildRoutePath } from './utils/build-route-path.js'

const database = new Database()

import createTask from './controllers/create-task.js'
import listTasks from './controllers/list-tasks.js'
import updateTasks from './controllers/update-tasks.js'
import deleteTasks from './controllers/delete-tasks.js'
import completeTasks from './controllers/complete-tasks.js'

export const routes = [
  {
    method: 'POST',
    path: buildRoutePath('/tasks'),
    handler: (req, res) => createTask(req, res, database)
  },
  {
    method: 'GET',
    path: buildRoutePath('/tasks'),
    handler: (req, res) => listTasks(req, res, database)
  },
  {
    method: 'PUT',
    path: buildRoutePath('/tasks/:id'),
    handler: (req, res) => updateTasks(req, res, database)
  },
  {
    method: 'DELETE',
    path: buildRoutePath('/tasks/:id'),
    handler: (req, res) => deleteTasks(req, res, database)
  },
  {
    method: 'PATCH',
    path: buildRoutePath('/tasks/:id/complete'),
    handler: (req, res) => completeTasks(req, res, database)
  }
]