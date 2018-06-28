import React from 'react';

class StorePicker extends React.Component {
	render() {
		return (
			<form className="store-selector">
				<input type="text" required placeholder="Enter Store Name"/>
				<button type="submit">Visit Store</button>
			</form>
		)
	}
}

export default StorePicker;