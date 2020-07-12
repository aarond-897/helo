import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {getUser} from '../../ducks/reducer'

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
            //do something with response later once reducer and action is setup and imported
            this.props.getUser(res.data.id, res.data.username, res.data.profile_pic)
            this.props.history.push('/dashboard');
        })
    }

    handleLogin=()=>{
        const {username, password}=this.state;
        axios.post('/auth/login',{username, password})
        .then(res=>{
            console.log(res)
            console.log(res.data)
            //do something with response later once reducer and action is setup and imported
            this.props.getUser(res.data.id, res.data.username, res.data.profile_pic)
            this.props.history.push('/dashboard');
        })
    }


    render() { 
        return ( 
            <div>
                <input name='username' placeholder='username' value={this.state.username} onChange={(e)=>this.handleInput(e)}/>
                <input name='password' placeholder='password' value={this.state.password} onChange={(e)=>this.handleInput(e)}/>
                <button onClick={this.handleLogin}>Login</button>
                <button onClick={this.handleRegister}>Register</button>
            </div>
         );
    }
}
 
export default connect(null,{getUser})(Auth);