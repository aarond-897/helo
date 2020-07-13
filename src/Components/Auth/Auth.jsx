import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {getUser} from '../../ducks/reducer';
import './auth.css';

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username:'',
            password:''
         }
         this.handleInput=this.handleInput.bind(this);
    }


    handleInput(e){
        this.setState({[e.target.name]:e.target.value})
    }

    handleRegister=()=>{
        const {username, password}=this.state;
        axios.post('/auth/register', {username, password})
        .then(res=>{
            console.log(res)
            this.props.getUser(res.data.username, res.data.profile_pic)
            this.props.history.push('/dashboard');
        })
    }

    handleLogin=()=>{
        const {username, password}=this.state;
        axios.post('/auth/login',{username, password})
        .then(res=>{
            console.log(res.data)
            this.props.getUser(res.data.username, res.data.profile_pic)
            this.props.history.push('/dashboard');
        })
    }


    render() { 
        return ( 
            <div className='page'>
                <div className='input'>
                    <img src="https://raw.githubusercontent.com/DevMountain/simulation-3/master/assets/helo_logo.png" alt=""/>
                    <h1>Helo</h1>
                    <div className="inputs">
                    <input name='username'  placeHolder='username' value={this.state.username} onChange={(e)=>this.handleInput(e)}/>
                    <input name='password' placeHolder='password' value={this.state.password} onChange={(e)=>this.handleInput(e)}/>
                    </div>
                    <div className="buttons">
                    <button onClick={this.handleLogin}>Login</button>
                    <button onClick={this.handleRegister}>Register</button>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default connect(null,{getUser})(Auth);