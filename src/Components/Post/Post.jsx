import React, {Component}from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: '',
            img: '',
            content: '',
            author: '',
            authorPicture:''
         }
    }
    componentDidMount(){
        this.getPost();
    }
    getPost=()=>{
        console.log(this.props.match.params.postid)
        axios.get(`/api/post/${this.props.match.params.postid}`)
        .then(res=>this.setState({
            title: res.data.title,
            img: res.data.img,
            content: res.data.content,
            author: res.data.username,
            authorPicture:res.data.profile_pic
        }))
    }

    deletePost=(id)=>{
        axios.delete(`/api/post/${id}`)
    }

    render() { 
        console.log(this.state)
        return ( 
            <div>
                <button onClick={this.deletePost}>Delete Post</button>
            </div>
         );
    }
}
 

const mapStateToProps = reduxState =>reduxState;

export default connect(mapStateToProps)(Post);