import { Link } from "react-router-dom";

export default function Van(props) {
  let imgurl = props.imageUrl;
  
  let bgcolor =
    props.type == "rugged"
      ? "#0f5e5b"
      : props.type == "simple"
      ? "#e27553"
      : "#17151b";

  return (
    <div className="van col-md-5 col-lg-4 pb-5">
      <Link to={props.id} state={{search:props.search}}> {/* passing link state*/}
        <div className="van-card ms-auto me-auto">
          <div className="img-container">
            <img src={imgurl} />
          </div>
          <div className="van-card--details d-flex justify-content-between align-items-start">
            <div className="name">{props.name}</div>
            <div className="price">
              <div> ${props.price}</div>
              <span className="dayword">/day</span>
            </div>
          </div>
          <div className="type" style={{ backgroundColor: bgcolor }}>
            {props.type[0].toUpperCase() + props.type.slice(1)}
          </div>
        </div>
      </Link>
    </div>
  );
}
