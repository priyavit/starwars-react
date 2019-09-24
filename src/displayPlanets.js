import React,{Component} from 'react';
import { Link} from 'react-router-dom';

class DisplayPlanets extends Component{
    
    render(){
        const planets = this.props.planet.map((planet) =>
        <Link to={{
          pathname: "/planet/"+planet.name,
            state: { selectedPlanet: planet }
          }}><ul className='planet-list'>{planet.name}</ul></Link>
        );
        return(
            <ul>{planets}</ul>
            
        );
    }
}

export default DisplayPlanets;