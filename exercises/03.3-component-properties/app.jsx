import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";

const BootstrapCard = (props) => {
  // 1) replace the hard-coded image, description, link, etc. With their property variable.
  return (
    <div className="card m-5">
      <img
        alt="Card image cap"
        className="card-img-top"
        src={props.imageURL}
      />
      <div className="card-body">
        <h5 className="card-title">{props.title} </h5>
        <p className="card-text">
          {props.description}
        </p>
        <a
          className="btn btn-primary"
          href={props.buttonUrl}
        >
          {props.buttonLabel}
        </a>
      </div>
    </div>
  );
};
BootstrapCard.propTypes = {
	title: PropType.string,
	imageUrl: PropType.string,
	description: PropType.string,
	buttonUrl: PropType.string,
	buttonLabel: PropType.string,

	// 2) add here the new properties into the proptypes object
};

ReactDOM.render(
  <BootstrapCard
    imageURL={
		"../../.learn/assets/Dylan.png?raw=true"
    }
    title={"Bob Dylan"}
    description={
      "Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter."
    }
    buttonUrl={"https://en.wikipedia.org/wiki/Bob_Dylan"}
    buttonLabel={"Go to wikipedia"}
  />,
  document.querySelector("#myDiv")
);
