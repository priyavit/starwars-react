import React,{Component} from 'react';
import './starwar.scss';

class PlanetDetails extends Component{
    render(){
        return(
            <>
            <div className='planet-name'>
                {this.props.history.location.state.selectedPlanet.name} Information
            </div>
            <div>
            <marquee direction='right' className='planet-details'>
                <span>climate :</span>
              {this.props.history.location.state.selectedPlanet.climate}
              </marquee>
            </div>
            <div>
            <marquee direction='right' className='planet-details'>
                <span>created :</span>
              {this.props.history.location.state.selectedPlanet.created}
              </marquee>
            </div>
            <div>
            <marquee direction='right' className='planet-details'>
                <span>diameter :</span>
              {this.props.history.location.state.selectedPlanet.diameter}
              </marquee>
            </div>
            <div>
            <marquee direction='right' className='planet-details'>
                <span>edited :</span>
              {this.props.history.location.state.selectedPlanet.edited}
              </marquee>
            </div>
            <div>
            <marquee direction='right' className='planet-details'>
                <span>gravity :</span>
              {this.props.history.location.state.selectedPlanet.gravity}
              </marquee>
            </div>
            <div>
            <marquee direction='right' className='planet-details'>
                <span>population :</span>
              {this.props.history.location.state.selectedPlanet.population}
              </marquee>
            </div>
            <div>
            <marquee direction='right' className='planet-details'>
                <span>rotation_period :</span>
              {this.props.history.location.state.selectedPlanet.rotation_period}
              </marquee>
            </div>
            <div>
            <marquee direction='right' className='planet-details'>
                <span>terrain :</span>
              {this.props.history.location.state.selectedPlanet.terrain}
              </marquee>
            </div>
            <div>
            <marquee direction='right' className='planet-details'>
                <span>url :</span>
              {this.props.history.location.state.selectedPlanet.url}
              </marquee>
            </div>
            <div>
            <marquee direction='right' className='planet-details'>
                <span>name :</span>
              {this.props.history.location.state.selectedPlanet.name}
              </marquee>
            </div>
            </>
        );
    }

}

export default PlanetDetails;