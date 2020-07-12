const initialState = {
    id:'',
    username: '',
    profilePicture:''
}

const GET_USER = 'GET_USER';
const CLEAR_USER = 'CLEAR_USER';

export function getUser(id,username,profilePicture){
    return{
        type:GET_USER,
        payload: {id,username,profilePicture}
    }
}


export default function reducer(state=initialState, action){
    const {type,payload}=action;
    switch(type){
        case GET_USER:
            return {...state, id:payload.id, username:payload.username, profilePicture:payload.profilePicture}
        default:
            return state;
    }
}