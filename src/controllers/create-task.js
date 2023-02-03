export function execute(req, res, database) {
  const { title, description } = req.body

  if (!title) {
    return res.writeHead(400).end(
      JSON.stringify({ message: 'title is required' })
    )
  }

  if (!description) {
    return res.writeHead(400).end(
      JSON.stringify({ message: 'description is required' })
    )
  }

  const task = {
    id: randomUUID(),
    title,
    description,
    completed_at: null,
    created_at: new Date(),
    updated_at: new Date(),
  }

  database.insert('tasks', task)

  return res.writeHead(201).end()
}