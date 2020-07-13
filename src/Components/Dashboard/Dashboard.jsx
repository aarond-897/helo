import React, {Component}from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './dashboard.css';


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            search:'',
            userposts: true,
            posts:[]
         }
    }

    componentDidMount(){
        this.handleSearch();
    }

    handleInput=(e)=>{
        this.setState({
            search:e.target.value
        })
    }

    handleSearch=()=>{
        // console.log(this.props)
        // console.log(this.state.posts)
        axios.get(`/api/posts/?search=${this.state.search}&userposts=${this.state.userposts}`)
        .then(res=>this.setState({posts:res.data}))
    }

    handleSearchReset=()=>{
        axios.get(`/api/posts/?userposts=${this.state.userposts}`)
        .then(res=>this.setState({posts:res.data, search:''}))
    }


    handleCheckbox=()=>{
        this.setState({
            userposts:!this.state.userposts
        })
    }

    deletePost=(id)=>{
        axios.delete(`/api/post/${id}`)
        .then(res=>this.setState({
            posts:res.data
        }), this.props.history.push('/dashboard'))
    }

    render() { 
        // console.log(this.state.posts)
        const posts=this.state.posts.map((post,i)=>(
            <div className='post' key={i} deletePostFn={this.deletePost}>
                <Link to={{pathname:`/post/${post.id}`, aboutProps:{deletePostFn:this.deletePost}}}>
                <h2 className='post-title'>{post.title}</h2>
                <h4 className='post-author'>{post.username}</h4>
                <img src={post.profile_pic} alt=""/>
                </Link>
            </div>
        ))
        return ( 
            <div className='dashboard'>
                <div className='search-bar'>
                <input className='search' placeholder='search by title' onChange={(e)=>this.handleInput(e)} value={this.state.search}/>
                <button onClick={this.handleSearch}>Search</button>
                <button onClick={this.handleSearchReset}>Reset</button>
                My Posts
                <input onClick={this.handleCheckbox} type="checkbox" defaultChecked/>
                </div>
                <div className="posts">
                {posts}
                {/* {console.log(posts)} */}
                </div>
            </div>
         );
    }
}
 
// const mapStateToProps=reduxState=>reduxState;

export default Dashboard;