import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { detailProducts, filterDishes } from '../redux/features/dishSlice';
import { Link } from 'react-router-dom';

function SearchBar() {

const dispatch = useDispatch();
const valueDish = useSelector((state)=> state.allDish);
const [inputValue, setInputValue] = useState('');
const searchRef = useRef(null);

useEffect(() => {
        function handleClickOutside(event) {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setInputValue('');
                dispatch(filterDishes('')); 
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dispatch]);
    
function filterDish(e){
    dispatch(filterDishes(e));
    setInputValue(e);
}

const handleDetailProduct = (e) => {
    console.log(e)
    dispatch(detailProducts(e))
}

  return (
    <div ref={searchRef}>
        <ul className="searchBarMob" style={{color:"red", position:"absolute", top:"12.5px", left:"30vw", zIndex:"1"}}>
                    <li style={{listStyle:"none"}}>
                    <input style={{height:"35px", width:"250px",outline:"non",border:"2px solid #7e9f60" ,borderRadius:"5px"}} placeholder='Search your recipes' 
                    onChange={(e) => {
                      filterDish(e.target.value); }} 
                      value={inputValue}/>
                    </li>
                    {valueDish.dishes.map((e)=>
                    <>
                        <Link to="/details" style={{textDecoration:"none", color:"black"}}>
                        <li onClick={() => handleDetailProduct(e)} style={{listStyle:"none", background:"white",height:"60px", width:"100%", padding:"2px", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                            <p>{e.dish}</p>
                            <img style={{width:"50px",height:"50px", objectFit:"cover", borderRadius:"3px"}} src={e.imgdata} alt={e.dish}/>
                        </li>
                        </Link>
                    </>)
                    }
                    <li style={{listStyle:"none", background:"white"}}>{valueDish.dishesStatus}</li>
                    </ul>
    </div>
  )
}

export default SearchBar