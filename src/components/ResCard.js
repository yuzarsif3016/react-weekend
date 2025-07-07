import { LOGO_URL } from "../utils/constants";

const ResCard = (props) => {
  
  const { name, cuisines, avgRating, sla, costForTwo } = props.resData.info;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={LOGO_URL}
      />

      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h5>{avgRating} stars</h5>
      <h5>{sla.deliveryTime} mins</h5>
      <h5>{costForTwo}</h5>
    </div>
  );
};

export default ResCard;