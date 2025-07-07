import ResCard from "./ResCard";
import { useState } from "react";
import reslist from "../utils/data";
const Body = () => {

  const [ListOfRestuarants,setListOfRestuarants] = useState(reslist);


  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" 
        onClick={() => {
         const filteredListOfRestuarants = ListOfRestuarants.filter((res)=>res.info.avgRating > 4.5);
          setListOfRestuarants(filteredListOfRestuarants)         
        }}

        >
          top rated Resturant
        </button>
      </div>
      <div className="res-container">
        {/* Resturant Cards */}
        {ListOfRestuarants.map((res) => {
          return <ResCard key={res.info.id} resData={res} />;
        })}
      </div>
    </div>
  );
};
export default Body;
