import React, {Component}from 'react';
import axios from 'axios';
import {connect} from 'react-redux';



class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title:'',
            img:'',
            content:''
         }
    }

    handleInput = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSend=()=>{
        const {title,img,content} = this.state;
        axios.post(`/api/post/`,{title,img,content})
        .then(()=>{
            this.props.history.push('/dashboard')
        })
        .catch((err)=>console.log(err))
    }

    render() { 
        return ( 
            <div>
                <img src={this.state.img} alt={this.state.title}/>
                <input name='title' placeholder="title" type="text" value={this.state.title} onChange={(e)=>this.handleInput(e)}/>
                <input name='image URL' placeholder="image URL" type="text" value={this.state.img} onChange={(e)=>this.handleInput(e)}/>
                <input name='content' placeholder="content" type="text" value={this.state.content} onChange={(e)=>this.handleInput(e)}/>
                <button onClick={this.handleSend}>Post</button>
            </div>
         );
    }
}
 
const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(Form);