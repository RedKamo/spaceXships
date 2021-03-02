//import React from 'react'
import { useRouter }  from 'next/router'

const ProductItem = () => {

    const router = useRouter()
    const {pid} = router.query

    
    return (
        <div>
            esta pagina es para un producto 123213 {pid}
        </div>
    )
}

export default ProductItem;