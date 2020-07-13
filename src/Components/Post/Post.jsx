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
        // console.log(this.props.match.params.postid)
        axios.get(`/api/post/${this.props.match.params.postid}`)
        .then(res=>this.setState({
            title: res.data.title,
            img: res.data.img,
            content: res.data.content,
            author: res.data.username,
            authorPicture:res.data.profile_pic
        }))
    }

    handleDeletePost=(id)=>{
       this.props.location.aboutProps.deletePostFn(id)
    }

    render() { 
        console.log(this.state)
        console.log(this)
        return ( 
            <div>
                <h2>{this.state.title}</h2>
                <img src={this.state.img} alt=""/>
                <h3>{this.state.author}</h3>
                <img src={this.state.authorPicture} alt=""/>
                <p>{this.state.content}</p>
                <button onClick={()=>this.handleDeletePost(this.props.match.params.postid)}>Delete Post</button>
            </div>
         );
    }
}
 

const mapStateToProps = reduxState =>reduxState;

export default connect(mapStateToProps)(Post);