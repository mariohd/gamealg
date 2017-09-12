import React, { Component } from 'react';
import Box from './box';
import { chunkify } from '../../utils/utils';

class BalancePlate extends Component {
	mountBoxes() {
		let lanes = chunkify(this.props.values, Math.ceil(this.props.values.length/2));
		return lanes.map(lane => lane.map((box, index) => <Box value={box} key={index} />));
	}

	render() {
		let divLanes = this.mountBoxes().reverse().map((l, key) => <div key={key}>{ l }</div>);
		return (
			<div className={`${"balance-plate"} ${this.props.placement}`} >
				{ divLanes }
			</div>
		);
	}
}

export default BalancePlate