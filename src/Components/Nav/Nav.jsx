import React, {Component}from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getUser,clearUser} from '../../ducks/reducer';
import axios from 'axios';
import './nav.css';


class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }


    componentDidMount(){
        this.getProfileInfo();
    }

    getProfileInfo=()=>{
        // axios.get('/auth/me')
        // .then(res=>getUser(res.data[0].username,res.data[0].profile_pic))
    }

    handleLogout=()=>{
        axios.post(`/auth/logout`)
        .then(()=>clearUser())
    }

    render() { 
        console.log(this.props)
        console.log(this.props.username)
        return ( 
            <div className='nav'>
                <img src={this.props.profilePicture} alt={`robot ${this.props.username}`}/>
                <h2>{this.props.username}</h2>
                    <Link to='/dashboard' >
                        <button className='home'></button>
                    </Link>
                    <Link to='/new'>
                    <button className='new-post'></button>
                    </Link>
                    <Link to='/'>
                        <button  className='logout' onClick={this.handleLogout}></button>
                    </Link>
            </div>
         );
    }
}

const mapStateToProps = reduxState =>reduxState;

 
export default connect(mapStateToProps,{getUser,clearUser})(Nav);