export function execute(req, res, database) {
  const { search } = req.query

  const tasks = database.select('tasks', {
    title: search,
    description: search
  })

  return res.end(JSON.stringify(tasks))
}