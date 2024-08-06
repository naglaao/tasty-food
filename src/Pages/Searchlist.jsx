import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { detailProducts, filterDisheSearch } from '../redux/features/dishSlice';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import { addToCart } from '../redux/features/cartSlice';
import toast from 'react-hot-toast';

function Searchlist() {

const dispatch = useDispatch();
const valueDish = useSelector((state)=> state.allDish);

function filterDish(e){
dispatch(filterDisheSearch(e));
}

const handleDetailProduct = (e) => {
console.log(e)
dispatch(detailProducts(e))
}

const send = (e)=>{
    dispatch(addToCart(e))
    toast.success("Item added In Your Cart")
}

  return (
    <div className='bgColor pt-3 m-0'>
        <div className='row justify-content-center align-items-center m-0 bgColor'>
        <input style={{width:"350px"}} placeholder='Search your recipes' onChange={(e) => {
                      filterDish(e.target.value); }}/>
                      </div>
                      <div className='row m-0 mt-2 d-flex justify-content-around align-items-center'>
                    {valueDish.dishesMobile.map((element)=>
                    <>
                                    <Card style={{ width: "22rem", border: "none" }} className='hove mb-4 bgColor'>
                                        <Link to="/details"><Card.Img style={{objectFit:"cover"}} variant='top' className='cd' src={element.imgdata} alt='no img' onClick={() => handleDetailProduct(element)}/></Link>
                                        <div className="card_body">
                                            <div className="upper_data d-flex justify-content-between align-items-center">
                                                <h4 className='mt-2'>{element.dish}</h4>
                                                <span>{element.rating}&nbsp;★</span>
                                            </div>

                                            <div className="lower_data d-flex justify-content-between ">
                                                <h5>{element.category}</h5>
                                                <span>$ {element.price}</span>
                                            </div>
                                            <div className="extra"></div>

                                            <div className="last_data d-flex justify-content-between align-items-center">
                                                <img src={element.arrimg} className='limg' alt="" />
                                                <Button style={{ width: "150px", background: "#E43A19", border: "none" }} variant='outline-light'
                                                    className='mt-2 mb-2'
                                                    onClick={()=>send(element)}
                                                >Add To Cart</Button>
                                                <img src={element.delimg} className='laimg' alt="" />

                                            </div>
                                        </div>
                                    </Card>
                    </>)
                    }
                    </div>
                    <div>
                    <p className="bgColor" style={{listStyle:"none", background:"white", textAlign:"center", color:"red"}}>{valueDish.dishesStatusMobile}</p>
                    </div>
    </div>
  )
}

export default Searchlist