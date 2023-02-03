export function execute(req, res, database) {
  const { id } = req.params
  const { title, description } = req.body

  if (!title || !description) {
    return res.writeHead(400).end(
      JSON.stringify({ message: 'title or description are required' })
    )
  }

  const [task] = database.select('tasks', { id })

  if (!task) {
    return res.writeHead(404).end()
  }

  database.update('tasks', id, {
    title,
    description,
    updated_at: new Date()
  })

  return res.writeHead(204).end()
}