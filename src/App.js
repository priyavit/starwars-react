import React,{Component} from 'react';
import './starwar.scss';
import history from './history';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      username : '',
      password : ''
    };

    this.saveUsername = this.saveUsername.bind(this);
    this.savePassword = this.savePassword.bind(this);
    this.validateUserLogin = this.validateUserLogin.bind(this);
  }

  saveUsername(event){
    this.setState({username:event.target.value})
  }

  savePassword(event){
    this.setState({password:event.target.value})
  }

  validateUserLogin(){
    fetch("https://swapi.co/api/people")
      .then(res => res.json())
      .then(
        (result) => {
          localStorage.setItem('planetDetails' , JSON.stringify(result));
          const userNames = result.results;
          for(var i=0;i<userNames.length;i++){
            if(userNames[i].name === this.state.username && userNames[i].birth_year === this.state.password){
                localStorage.setItem('user' , this.state.username);
                localStorage.setItem('password' , this.state.password);
                history.push('/details');
                break;
            }else if(userNames[i].name !== this.state.username){
                alert('Please enter valid Username');
                break;
            }else if(userNames[i].birth_year !== this.state.password){
              alert('Please enter correct Password');
              break;
            }
          }
        },
        (error) => {
        }
      )
  }

  render(){
    return(
      <>
      <div>
        <marquee>
          <header className='star-war-header'>
            Welcome to Star Wars !!!!
          </header>
        </marquee>
      </div>
      <div className='login-credentials'>
        <div>
          Login: <input type='text' placeholder='Enter your Username' onChange={this.saveUsername}></input>
        </div>
        <div>
          Password: <input type="password" name="password" onChange={this.savePassword}></input>
        </div>
      </div>
      <div className='login-button'>
        <button type='submit' onClick={this.validateUserLogin}>Login</button>
      </div>
    </>
    ); 
  }
}

export default App;
