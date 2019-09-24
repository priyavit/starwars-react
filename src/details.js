import React,{Component} from 'react';
import './starwar.scss';
import DisplayPlanets from './displayPlanets';

class  Details extends Component{
    constructor(props){
        super(props);
        this.state = {
        planetDetails : '',
        filteredArray : []
    };
        this.planetList = this.planetList.bind(this);
    }

    componentDidMount(){
        fetch("https://swapi.co/api/planets")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({planetDetails:result});
            localStorage.setItem('planetDetails' , JSON.stringify(result));
          },
          (error) => {
          }
        )
    }

    planetList(event){
        const planets = this.state.planetDetails.results;
        const {value} = event.target;
        let tempArr = [];
        planets.forEach((planet) => {
            if(value !== ''){
                if(planet.name.includes(`${value}`)){
                    tempArr.push(planet)
                 }
            }else{
                tempArr = [];
            }
            return tempArr;
        });
        this.setState({filteredArray: tempArr});
    }

    render(){
        return(
            <>
            <form>
                <p className='search-header'>Enter the planet to be Searched</p>
                <input className='search-text' type='textbox' placeholder='Planet' onChange={this.planetList}></input>
                <DisplayPlanets planet={this.state.filteredArray}></DisplayPlanets>
            </form>
            
            </>
        );
    }
}

export default Details;