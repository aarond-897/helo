const initialState = {
    username: '',
    profilePicture:''
}

const GET_USER = 'GET_USER';
const CLEAR_USER = 'CLEAR_USER';

export function getUser(username,profilePicture){
    console.log('get user working on reducer')
    console.log(username,profilePicture)
    return{
        type:GET_USER,
        payload: {username,profilePicture}
    }
}

export function clearUser(){
    return{
        type:CLEAR_USER,
        payload: {username:'',profilePicture:''}
    }
}


export default function reducer(state=initialState, action){
    const {type,payload}=action;
    console.log(payload)
    switch(type){
        case GET_USER:
            return {...state, username:payload.username, profilePicture:payload.profilePicture}
        case CLEAR_USER:
            return {...state, username:payload.username, profilePicture:payload.profilePicture}
        default:
            return state;
    }
}