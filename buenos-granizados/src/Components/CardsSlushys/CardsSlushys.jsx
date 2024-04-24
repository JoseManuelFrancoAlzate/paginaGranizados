import styled from './CardsSlushys.module.css'

const CardsSlushys = (props)=>{
    return(
<div className={styled.cardContainer}>
    <div className={styled.divName}>
        <h3 className={styled.nameSlushys}>{props.name}</h3>
    </div>
    <div className={styled.divImg}>
        <img alt={props.name} className={styled.imgSlushys} src={props.image} />
    </div>
    <div className={styled.divPrice}>
        <h3 className={styled.priceSlushys}>${props.price}</h3>
    </div>
</div>

    )
}


export default CardsSlushys  