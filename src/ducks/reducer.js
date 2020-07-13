const initialState = {
    username: '',
    profilePicture:''
}

const GET_USER = 'GET_USER';
const CLEAR_USER = 'CLEAR_USER';

export function getUser(username,profilePicture){
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
    switch(type){
        case GET_USER:
            return {...state, username:payload.username, profilePicture:payload.profilePicture}
        case CLEAR_USER:
            return {...state, username:payload.username, profilePicture:payload.profilePicture}
        default:
            return state;
    }
}