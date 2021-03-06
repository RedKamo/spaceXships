//import Link from "next/link";

//import "../../styles/Shipitem.module.scss";
/* 

const space = 'https://api.spacexdata.com/v4/ships'

const ShipItem = ()=>{
  return(
    <h1>Ship Item page</h1>
  )
} */

const Ship = ({ data }) => {
  //console.log("data", data);
  const {
    name,
    image,
    legacy_id,
    type,
    mass_kg,
    roles,
    home_port,
    year_built,
    link,
    active,
  } = data;

  const more = link;
  return (
    <div className="ship">
      <h1 className="ship__title">{name}</h1>
      <div className="ship__container">
        {data.image ? (
          <img src={image} alt="" />
        ) : (
          <h3 className="ship__container__no">No available image</h3>
        )}
        <div className="ship__details">
          <div className="ship__details__row">
            <h3>Legacy name:</h3>
            <p> {legacy_id} </p>
          </div>
          <div className="ship__details__row">
            <h3>Type:</h3>
            <p> {type} </p>
          </div>
          <div className="ship__details__row">
            <h3>Weight(Kg):</h3>
            <p> {mass_kg} </p>
          </div>
          <div className="ship__details__row">
            <h3>Roles:</h3>
            <p> {roles[0]} </p>
          </div>
          <div className="ship__details__row">
            <h3>Home port:</h3>
            <p> {home_port} </p>
          </div>
          <div className="ship__details__row">
            <h3>Year built:</h3>
            <p> {year_built} </p>
          </div>
          <div className="ship__details__row">
            <h3>Active:</h3>
            {active ? (
              <p className="ship__activate">YES</p>
            ) : (
              <p className="ship__noactive">NO</p>
            )}
          </div>
          <div className="ship__details__row">
            <h3>Link:</h3>
            <a href={link} target="_blank">
              More information about it{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

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

export default Ship;
