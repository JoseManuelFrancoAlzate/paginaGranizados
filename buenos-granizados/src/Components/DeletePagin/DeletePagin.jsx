import { getActionSlushys } from "../../Redux/actions"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import CardsDelete from "../CardsDelete/CardsDelete"
import Header from '../Header/Header'
import styled from './DeletePagin.module.css'
const Home = () =>{
    const stateSlushys = useSelector((state)=> state.slushys)
    const dispatch = useDispatch();

useEffect(()=>{
    dispatch(getActionSlushys())
},[dispatch])

console.log(stateSlushys)
return(
   <div>
          <Header/>
    <center>
      <Link to="/settings">
      <button className={styled.previousPage}>Volver a la pagina anterior</button>
      </Link>
    <div className={styled.container}>
  {
    stateSlushys && 
stateSlushys.map(slushys=>{
return(
  <CardsDelete
  id={slushys._id}
  name={slushys.name}
  image={slushys.image}
  price={slushys.price}
  />
)
})
  }
  </div>
  </center>
  </div>
)
}


export default Home 