import React, { useState } from 'react'

export default function Products({ catags }) {
    // console.log(catags);
    return (
        <>
            { catags.map((product,index)=>
                <div key={index} className='col-md-4 mt-2' >
                    <img src={product.thumbnail} className='w-75 bg-danger p-1'  />
                    <h1>{product.title}</h1>
                    <p>{product.price}</p>
                    <p>{product.category}</p>
                    <button className='btn btn-danger w-25 me-4'>Delete</button>
                    <button className='btn btn-info w-25'>Update</button>
                </div>
            )}

      </>
  )
}
