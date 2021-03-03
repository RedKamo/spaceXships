//import { NextApiRequest, NextApiResponse } from 'next'
import DB from '../../../database/db'
//import shipItem from '../../product/[id]'


 const shipDetail= async ( request, response) => {
  const db = new DB()

  const id = request.query.id.toString()
  const ship = await db.getById(id)

  // way 1 
 /*  Response.statusCode= 200 // ok
  Response.setHeader('Content-type', 'application/json')
  Response.end(JSON.stringify({ data : entry })) */
  //
  //TODO: there is an easy way to do the same of the 3 lines above in 1 line:  
 
  //way 2 
  response.status(200).json(ship)
} 


export default shipDetail