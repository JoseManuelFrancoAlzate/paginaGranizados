import styled from './CardsSlushys.module.css'
import { getActionAdmin} from '../../Redux/actions'
import { Link } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { useEffect } from 'react'

const CardsSlushys = (props)=>{

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getActionAdmin)
    },[dispatch])
    return(
        <div>
<div className={styled.cardContainer}>
    <div className={styled.divName}>
        <h3 className={styled.nameSlushys}>{props.name}</h3>
      </div> 
 <Link to={`/slushys/${props.id}`}>
    <div className={styled.divImg}>
        <img alt={props.name} className={styled.imgSlushys} src={props.image} />
      </div>
</Link>
    <div className={styled.divPrice}>
        <h3 className={styled.priceSlushys}>${props.price}</h3>
      </div>
</div>

</div>

    )
}


export default CardsSlushys  