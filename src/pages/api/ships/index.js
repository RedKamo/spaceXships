/* import DB from '../../../database/db'


 const allShips= async (req, res) => {
  const db = new DB()
  const allEntries = await db.getAll()
  const length = allEntries.length

  res.statusCode= 200 // ok
  res.setHeader('Content-type', 'application/json')
  res.end(JSON.stringify({ data : allEntries, length}))
} 


export default allShips */