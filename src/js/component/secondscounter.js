import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "/workspace/counter-with-react-vfinal/src/styles/index.scss";

export function Secondscounter(props) {
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col bigcounter">
					<p className="far fa-clock"></p>

					<div className="sixdig">{props.digSix % 10}</div>
					<div className="fivedig">{props.digFive % 10}</div>

					<div className="fourdig">{props.digFour % 10}</div>
					<div className="threedig">{props.digThree % 10}</div>
					<div className="twodig">{props.digTwo % 10}</div>
					<div className="onedig">{props.digOne % 10}</div>
				</div>
			</div>
		</div>
	);
}

Secondscounter.propTypes = {
	digOne: PropTypes.number,
	digTwo: PropTypes.number,
	digThree: PropTypes.number,
	digFour: PropTypes.number,
	digFive: PropTypes.number,
	digSix: PropTypes.number
};
