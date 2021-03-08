import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "/workspace/react-hello/src/styles/index.scss";

export function Secondscounter(props) {
	return (
		<div className="container-fluid">
			<div className="row justified-content">
				<div className="col bigcounter">
					<div className="clockfi">
						<i className="far fa-clock"></i>
					</div>
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

Secondscounter.proptypes = {
	digOne: PropTypes.number,
	digTwo: PropTypes.number,
	digThree: PropTypes.number,
	digFour: PropTypes.number,
	digFive: PropTypes.number,
	digSix: PropTypes.number
};
<Secondscounter
	digOne={0}
	digTwo={0}
	digThree={0}
	digFour={0}
	digFive={0}
	digSix={0}
/>;
