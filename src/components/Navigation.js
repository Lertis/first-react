import React from "react";
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Navigation = () => {
    return (
        <div className="nav-btns">
            <Button variant="contained" color="primary" component={Link} to="/">Home</Button>
            <Button variant="contained" color="primary" component={Link} to="/about">About</Button>
            <Button variant="contained" color="primary" component={Link} to="/contact">Contact</Button>
        </div>
    );
};

export default Navigation;