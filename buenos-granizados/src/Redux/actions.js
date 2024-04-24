import axios from 'axios' //Para manejar las apis

export const GET_ADMIN = "GET_ADMIN"
export const GET_SLUSHYS = "GET_SLUSHYS"
export const POST_SLUSHYS ="POST_SLUSHYS"
export const POST_ADMIN = "POST_ADMIN"
const URL_ADMIN = "/admin"
const URL_SLUSHYS="/slushys"



//GETS
export const getActionAdmin = ()=>{
return async function (dispatch){
    try {
        const adminData = await axios.get(URL_ADMIN)
        const admin= adminData.data
        dispatch({type: GET_ADMIN, payload: admin})
    } catch (error) {
        alert('Error al obtener admin')
        console.error('A ocurrido un error al obtener admin', error)
    }
}
}

export const getActionSlushys = ()=>{
    return async function (dispatch){
        try {
            const slushysData = await axios.get(URL_SLUSHYS)
            const slushys = slushysData.data
            dispatch({type: GET_SLUSHYS, payload: slushys})
        } catch (error) {
            alert('Error al obtener los granizados')
            console.error('A ocurrido un error al obtener los granizados')
        }
    }
}

//POSTS
export const postActionSlushys =  (payload)=>{
    return async function (){
try {
    const response = await axios.post(URL_SLUSHYS, payload)
    if(response.data.message === "Ya existe este granizado"){
        alert(response.data.message)
    }else{
    alert('Granizado creado')
    }
    return response
} catch (error) {
    alert('Error al crear granizado')
    console.error('A ocurrido un error al crear el granizado')
}
    }
}

export const postActionAdmin = (payload)=>{
return async function(){
    try {
        const response = await axios.post(URL_ADMIN, payload)
        alert(response.data)
        console.log(response.data)
        return response
    } catch (error) {
        alert('Error al crear admin')
        console.error('A ocurrido un error al crear el administrador')
    }
}
}

export default getActionAdmin