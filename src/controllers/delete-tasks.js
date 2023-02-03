export function execute(req, res, database){
  const { id } = req.params
  const [task] = database.select('tasks', { id })

  if (!task) {
    return res.writeHead(404).end()
  }

  database.delete('tasks', id)

  return res.writeHead(204).end()
}
