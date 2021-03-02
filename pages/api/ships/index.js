import DB from '../../../database/db'


const allShips= async (request, Response) => {
  const db = new DB()
  const allEntries = await db.getAll()
  const length = allEntries.length

  Response.statusCode= 200 // ok
  Response.setHeader('Content-type', 'application/json')
  Response.end(JSON.stringify({ data : allEntries, length}))
}

export default allShips