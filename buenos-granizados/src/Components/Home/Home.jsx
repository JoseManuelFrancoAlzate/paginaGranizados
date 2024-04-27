import { getActionSlushys } from "../../Redux/actions"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import CardsSlushys from "../CardsSlushys/CardsSlushys"
import Header from '../Header/Header'
import styled from './Home.module.css'
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
    <div className={styled.container}>
  {
    stateSlushys && 
stateSlushys.map(slushys=>{
return(
  <CardsSlushys
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