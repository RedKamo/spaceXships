import Link from 'next/link'
/* 

const space = 'https://api.spacexdata.com/v4/ships'

const ShipItem = ()=>{
  return(
    <h1>Ship Item page</h1>
  )
} */


export async function getServerSideProps({query}){
  const { id } = query
  const res = await fetch(`${'https://api.spacexdata.com/v4/ships'}/${id}`);
  const data = await res.json();

  return{
    props: {
      data
    } 
  }
}

const ShipItem = ({ data })=>{
  console.log('data', data)
  return(
   <h1> {data.legacy_id} </h1>
  )
 
}

export default ShipItem