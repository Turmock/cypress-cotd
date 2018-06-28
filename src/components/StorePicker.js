import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {

	myInput = React.createRef();

	goToStore = event => {
		event.preventDefault();
		const storeName = this.myInput.value.value;
		this.props.history.push(`/store/${storeName}`);
	}

	render() {
		return (
			<form className="store-selector" onSubmit={this.goToStore}>
				<input
					type="text"
					ref={this.myInput}
					required
					placeholder="Enter Store Name"
					defaultValue={ getFunName() }
				/>
				<button type="submit">Visit Store</button>
			</form>
		)
	}
}

export default StorePicker;