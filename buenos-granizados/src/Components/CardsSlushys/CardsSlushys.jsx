import styled from './CardsSlushys.module.css'
import { deleteActionSlushys, getActionAdmin} from '../../Redux/actions'
import { Link } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react'

const CardsSlushys = (props)=>{

    const stateAdmin = useSelector(state => state.admin)
    const dispatch = useDispatch()

    const deleteSlushyHandle = ()=>{
        dispatch(deleteActionSlushys(props.id))
        window.location.reload()
    }

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
{stateAdmin && stateAdmin.asset === true ? (
<button onClick={deleteSlushyHandle} className={styled.buttonX}>X</button>
): ""
}
</div>

    )
}


export default CardsSlushys  