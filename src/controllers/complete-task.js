export function execute(req, res, database) {
  const { id } = req.params

  const [task] = database.select('tasks', { id })

  if (!task) {
    return res.writeHead(404).end()
  }

  const isTaskCompleted = !!task.completed_at
  const completed_at = isTaskCompleted ? null : new Date()

  database.update('tasks', id, { completed_at })

  return res.writeHead(204).end()
}
