import axios from 'axios' //Para manejar las apis

export const GET_ADMIN = "GET_ADMIN"
export const GET_SLUSHYS = "GET_SLUSHYS"
export const GET_ID_SLUSHYS = "GET_ID_SLUSHYS"
export const POST_SLUSHYS ="POST_SLUSHYS"
export const POST_ADMIN = "POST_ADMIN"
export const RESTART_PAGE = "RESTART_PAGE"
export const DELETE_IMGS = "DELETE_IMGS"
export const DELETE_ADMIN_ID = "DELETE_ID_ADMIN"

const URL_ADMIN = "/admin"
const URL_SLUSHYS="/slushys"
const URL_RESTART = "/admin/page/restart"
const URL_DELETE_IMGS_FOLDER = "slushys/delete/imgs"
const  URL_ASSET_TRUE= "admin/asset/true"
const  URL_ASSET_FALSE= "admin/asset/false"

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
            console.error('A ocurrido un error al obtener los granizados', error)
        }
    }
}

export const getActionIdSlushys = (id)=>{
    return async function(dispatch){
        try {
            const slushysData = await axios.get(`${URL_SLUSHYS}/${id}`)
            const slushyId = slushysData.data
           dispatch({type: GET_ID_SLUSHYS, payload: slushyId })
        } catch (error) {
            console.error('Granizado no encontrado', error)
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

//DELETE 

export const deleteActionAdmin = (id)=>{
    return async function(dispatch){
        try {
            const deleteAdmin = await axios.delete(`${URL_ADMIN}/${id}`)
            const adminId = deleteAdmin.data 
dispatch({type: DELETE_ADMIN_ID, payload: adminId})
        } catch (error) {
            alert('Error al eliminar el administrador')
            console.error('A ocurrido al eliminar el administrador', error)
        }
    }
}
export const deleteImgsFolder = ()=>{
    return async function(){
        try {
            const deleteImgs = await axios.delete(URL_DELETE_IMGS_FOLDER)
            alert('Carpeta de imagenes limpiada correctamente')
            return deleteImgs
        } catch (error) {
            alert('Error al eliminar las imagenes')
            console.error('A ocurrido un error al eliminar las imagenes', error)
        }
    }
}
export const restartActionPage = ()=>{
    return async function(){
        try {
            const restartPage = await axios.delete(URL_RESTART)
            return restartPage
        } catch (error) {
            alert('Error al reiniciar pagina')
            console.error('A ocurrido un error al reiniciar la pagina', error)
        }
    }
}

//PUT
export const putActionAdminAssetTrue = ()=>{
    return async function(){
        try {
            const assetTrue = await axios.put(URL_ASSET_TRUE)
            console.log(assetTrue)
            return assetTrue
        } catch (error) {
            alert('Error al eliminar las imagenes')
            console.error('A ocurrido un error al eliminar las imagenes', error)
        }
    }
}

export const putActionAdminAssetFalse = ()=>{
    return async function(){
        try {
            const assetFalse = await axios.put(URL_ASSET_FALSE)
            console.log(assetFalse)
            return assetFalse
        } catch (error) {
            alert('Error al eliminar las imagenes')
            console.error('A ocurrido un error al eliminar las imagenes', error)
        }
    }
}
export default getActionAdmin