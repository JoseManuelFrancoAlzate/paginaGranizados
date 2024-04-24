import { getActionSlushys } from "../../Redux/actions"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import CardsSlushys from "../CardsSlushys/CardsSlushys"
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
    <center>
    <div className={styled.container}>
  {
    stateSlushys && 
stateSlushys.map(slushys=>{
return(
  <CardsSlushys
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