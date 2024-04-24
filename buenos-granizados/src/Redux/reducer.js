import { GET_ADMIN, GET_SLUSHYS,POST_SLUSHYS, POST_ADMIN} from "./actions"

const initialState={
  admin: [],
  slushys: []
}

const rootReducer=(state=initialState, action)=>{
    switch(action.type){
case GET_ADMIN: 
return{
  ...state,
  admin: action.payload
}
case GET_SLUSHYS:
  return {
    ...state,
    slushys: action.payload
  }
case POST_SLUSHYS:
  return{
    ...state
  }
  case POST_ADMIN:
    return{
      ...state
    }
default: 
    return{...state}
    }
}
 

export default rootReducer