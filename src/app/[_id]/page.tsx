interface ProductId{
    params: {
        _id: string
    }
}

export async function fetchProductById ({params}: ProductId){
    const res = await fetch(`https://private-radtek-server.onrender.com/product/${params._id}`)
    const data = await res.json()
    return data;
}


export async function ById ({params}: ProductId){
    const product = await fetchProductById({params})
    
    
        return(
            <div key={product._id}>
                <p>{product._id}</p>
            </div>
        )
}