import { Button, Typography } from '@material-ui/core';
import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import Todo from '../../assets/svg/undraw_To_do_list_re_9nt7.svg';
import capture from '../../assets/img/Capture.PNG';
import Logo from '../../components/logo';
import Footer from './Footer';

function Home(props) {
  return (
    <div className="main">
      <div className="nav">
        <Logo />
        <Button variant="contained" color="primary" component={Link} to="/login">se connecter</Button>
      </div>
      <div className="head-container">
        <div className="home-container">
          <Typography variant="h4" align="center">
            Organiser vous taches quotidienes avec sodo
          </Typography>
          <Typography variant="h6" align="center">
            Tout en conservant
            des statiques sur ce que vous faites
          </Typography>
          <Button className="btn" variant="contained" color="primary" component={Link} to="/login">Esseyer</Button>
        </div>

        <img src={Todo} alt="no tasks" width="400" />
      </div>
      <div>
        <img src={capture} alt="capture" className="capture" />
      </div>

      <Footer />
    </div>
  );
}

export default Home;
