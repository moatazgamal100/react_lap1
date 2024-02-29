import React, { useState } from 'react'

export default function Products({ catags }) {
    return (
        <>
            { catags.map((product,index)=>
                <div key={product.id} className='col-4'>
                    <img src={product.thumbnail} className='w-100'  />
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <p>stock : {product.stock}</p>
                </div>
            )}

      </>
  )
}
