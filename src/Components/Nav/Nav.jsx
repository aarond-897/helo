import React, {Component}from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Dashboard from '../Dashboard/Dashboard';


class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        console.log(this.props)
        console.log(this.props.username)
        return ( 
            <div>
                <img src={this.props.profilePicture} alt={`robot ${this.props.username}`}/>
                <h2>{this.props.username}</h2>
                <Link to='/dashboard'>Home</Link>
                <Link to='/new'>New Post</Link>
                <Link to='/'>Logout</Link>
            </div>
         );
    }
}

const mapStateToProps = reduxState =>reduxState;
    // return{
    //     username:reduxState.username,
    //     profilePicture: reduxState.profilePicture
    // }
///i might be able to leave as reduxState. will check in a sec!!!!
// }
 
export default connect(mapStateToProps)(Nav);