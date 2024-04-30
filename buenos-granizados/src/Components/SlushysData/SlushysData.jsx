import { getActionIdSlushys } from "../../Redux/actions"
import {useEffect} from  'react'
import {useSelector, useDispatch} from 'react-redux'
import {useParams} from "react-router-dom"
import { Link } from "react-router-dom"
import styled from './SlushysData.module.css'

const SlushysData = ()=>{
    const stateIdSlushy = useSelector((state)=> state.slushyId)
    const dispatch = useDispatch()
    const params = useParams()
    console.log(stateIdSlushy)
    useEffect(()=>{
        dispatch(getActionIdSlushys(params.id))
    },[dispatch,params.id])
    return( 
        <div className={styled.card}>
        <div className={styled.leftContent}>
            <img className={styled.img} alt={stateIdSlushy.name} src={stateIdSlushy.image}/>
            <h2 className={styled.letraColorPrice}>{`$${stateIdSlushy.price}`}</h2>
        </div>
        <div className={styled.rightContent}>
        <Link to="/">
      <button className={styled.buttonI}>Inicio</button>
      </Link>
            <h1 className={styled.letraColorName}>{stateIdSlushy.name}</h1>
            <h2 className={styled.letraColorDescription}>{stateIdSlushy.description}</h2>
        </div>
    </div>
    )
}


export default SlushysData 