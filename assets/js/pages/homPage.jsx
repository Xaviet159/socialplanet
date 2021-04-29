import React from 'react';
import oilImg from '../../styles/img/oiel-home-page.svg'

const HomePage = (props) => {
    return ( 
    <div className="">
      <div>
        <h1 className="display-5">Be a source of change</h1>
        <p className="lead">with your new community.</p>
        <p className="lead">
        <a className="btn btn-warning btn-lg" href="#" role="button">Watch project</a>
        </p>
      </div>
      {/* <img src={oilImg} alt=""/> */}
    </div> 

  );
}
 
export default HomePage;