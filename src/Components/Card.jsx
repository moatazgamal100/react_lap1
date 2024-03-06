import React, { useEffect, useState } from 'react'
import Products from './Products'
import useFetch from './Hooks/useFetch';

export default function Card() {
    let {datalist} = useFetch('http://localhost:2000/products');
    // console.log(datalist);
    const [catgs, setCatgs] = useState([]);
    useEffect(() => {
        setCatgs(datalist);
    }, []);
    return (
        <>
            <div className="container mt-5">
                <div className="row">

                    <Products catags={catgs}/>
                </div>
            </div>
  </>

  )
}
