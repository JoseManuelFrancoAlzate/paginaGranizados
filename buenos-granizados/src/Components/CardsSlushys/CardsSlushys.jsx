import styled from './CardsSlushys.module.css'
import { Link } from 'react-router-dom'
const CardsSlushys = (props)=>{
    return(
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

    )
}


export default CardsSlushys  