import React from 'react';
import { Button,} from '@material-ui/core';
import { Link } from 'react-router-dom';

function AppNav(props) {
    return (
        <div className="nav">
            <Button variant="contained" color="primary" component={Link} to="/portfolios"  >Portfolios</Button>
            <Button variant="contained" color="primary" component={Link} to="/predictions"  >Predictions</Button>
            <Button variant="contained" color="primary" component={Link} to="/watchlists" >Watchlist</Button>
        </div>
    );
}

export default AppNav;