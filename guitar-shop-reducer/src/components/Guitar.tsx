import { Dispatch } from 'react'
import type {Guitar} from '../types/types'
import { CartAction } from '../reducers/cartReducer'

type GuitarProps = {
    guitar : Guitar
    dispatch : Dispatch<CartAction>
}

export default function Guitar({guitar, dispatch} : GuitarProps){

    // Props
    const {name, description, image, price} = guitar

    return(        
        <div className="col-md-6 col-lg-4 my-4 row align-items-center">
            <div className="col-4">
                <img className="img-fluid" src={`/img/${image}.jpg`} alt="Guitar image" />
            </div>
            <div className="col-8">
                <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
                <p>{description}</p>
                <p className="fw-black text-primary fs-3">${price}</p>
                {/* Callback needed in listener, otherwise the function 
                is called automatically without listening to the event*/} 
                <button 
                    type="button"
                    className="btn btn-dark w-100"
                    onClick={() => dispatch({type: 'add-to-cart', payload: {item: guitar}})}                    
                >Add to Cart</button>
            </div>
        </div>
    )
}