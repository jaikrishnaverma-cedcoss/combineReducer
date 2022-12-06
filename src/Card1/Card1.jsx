import React from 'react'
import style from './Card1.module.scss'
const Card1 = ({title,para,faClass,count,color="orange"}) => {
    return (
        <div className={style.card}>

<div className={style.poly} style={{ '--color':color}}></div>
<div className={style.hexagon} style={{'--color':color}}><h2>{count}</h2></div>
            <div className={style.cover} style={{ '--color':color}}>
                <div className={style.whiteBox}>
                    <div className={style.upperBox}>
                        <div className={style.innerBox1}>
                            <i class={faClass} aria-hidden="true"></i>
                        </div>
                        <div className={style.innerBox2}>
                            <p className={style.p1}>{title}</p>
                            <p className={style.p2}>{para}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card1