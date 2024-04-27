import { GET_ADMIN, GET_SLUSHYS,GET_ID_SLUSHYS,POST_SLUSHYS, POST_ADMIN, DELETE_ADMIN_ID} from "./actions"

const initialState={
  admin: [],
  slushys: [],
  adminId:"",
  slushyId: []
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
  case GET_ID_SLUSHYS:
    return{
      ...state,
      slushyId: action.payload
    }
    case DELETE_ADMIN_ID:
      return{
        ...state,
      adminId: action.payload
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