import { Paper } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../components/logo';
import facebook from '../../assets/svg/facebook.svg';
import twitter from '../../assets/svg/twitter.svg';
import Linkedin from '../../assets/svg/linkedin.svg';

function Footer(props) {
  return (
    <Paper className="footer" color="primary">
      <div>
        <Logo />
        <div>
          <a aria-label="Facebook" href="https://facebook.com/" title=" Facebook">
            <img className="white-filter" src={facebook} alt="facebook" width="32" color="white" />
          </a>
          <a aria-label="Twitter" href="https://twitter.com/mhn_naim" title=" Twitter">
            <img className="white-filter" src={twitter} alt="twitter" width="32" />
          </a>
          <a aria-label="Linkedin" href="https://Linkedin.com/in/naim-mehenaoui" title=" Linkedin">
            <img className="white-filter" src={Linkedin} alt="twitter" width="32" />
          </a>

        </div>
      </div>
      <div>
        <h3>
          made with
          <span className="haert" style={{ color: 'red' }}> ♥ </span>
          by m-naim
        </h3>
      </div>
      <div className="links">
        <Link to="/apropos">à propos</Link>
        <Link to="/apropos">mentions légales</Link>
      </div>
    </Paper>
  );
}

export default Footer;
