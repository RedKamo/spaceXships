import Link from "next/link";
/* 

const space = 'https://api.spacexdata.com/v4/ships'

const ShipItem = ()=>{
  return(
    <h1>Ship Item page</h1>
  )
} */

export async function getServerSideProps({ query }) {
  const { id } = query;
  const res = await fetch(`${"https://api.spacexdata.com/v4/ships"}/${id}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

const ShipItem = ({ data }) => {
  //console.log("data", data);
  const { legacy_id, image, name, type } = data;
  return (
    <div className="ship">
      <h1 className="ship__title">{name}</h1>
      <div className="ship__container">
        {data.image ? <img src={image} alt="" /> : "img isnt available"}
        <div className="ship__container__details">
          <h3>{legacy_id}</h3>
          <h4>{type}</h4>
        </div>
      </div>
    </div>
  );
};

export default ShipItem;
