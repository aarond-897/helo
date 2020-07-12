import React, {Component}from 'react';
import axios from 'axios';


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
    
    getPost=()=>{
        axios.get(`/api/posts:${this.props.match}`)
    }

    render() { 
        console.log(this.props)
        return ( 
            <div>
                Post
            </div>
         );
    }
}
 
export default Post;