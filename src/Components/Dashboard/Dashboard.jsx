import React, {Component}from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


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
        console.log(this.props)
        console.log(this.state.posts)
        axios.get(`/api/posts/${this.props.id}
        ?search=${this.state.search}&userposts=${this.state.userposts}`)
        .then(res=>this.setState({posts:res.data}))
    }

    handleSearchReset=()=>{
        axios.get(`/api/posts/${this.props.id}?userposts=${this.state.userposts}`)
        .then(res=>this.setState({posts:res.data, search:''}))
    }

    handleReset=()=>{
        this.setState({
            search:'',
            userposts:true,
            posts:[]
        })
    }

    handleCheckbox=()=>{
        this.setState({
            userposts:!this.state.userposts
        })
    }

    render() { 
        const posts=this.state.posts.map((post,i)=>(
            <div className='post' key={i}>
                {/* <Link to={`/post/${post.id}`}> */}
                <h2 className='post-title'>{post.title}</h2>
                <h4 className='post-author'>{post.username}</h4>
                <img src={post.profile_pic} alt=""/>
                {/* </Link> */}
            </div>
        ))
        return ( 
            <div>
                <input onChange={(e)=>this.handleInput(e)} value={this.state.search}/>
                <button onClick={this.handleSearch}>Search</button>
                <button onClick={this.handleReset}>Reset</button>
                <input onClick={this.handleCheckbox} type="checkbox" defaultChecked/>
                {posts}
                {console.log(posts)}
            </div>
         );
    }
}
 
const mapStateToProps=reduxState=>reduxState;

export default connect(mapStateToProps)(Dashboard);