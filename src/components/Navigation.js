import React from "react";
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Navigation = () => {
	return (
		<div className="nav-btns">
			<Button variant="contained" color="primary" component={Link} to="/">Todo</Button>
			<Button variant="contained" color="primary" component={Link} to="/counter">Counter</Button>
			<Button variant="contained" color="primary" component={Link} to="/comments">Comments</Button>
		</div>
	);
};

export default Navigation;