import { ProductProps } from "@/components/Products/CardProduct";

export async function fetchId(_id: ProductProps) {
    return await fetch(`https://private-radtek-server.onrender.com/product/${_id}`)
    .then(res => res.json())
  }


export default async function Detail ({params}: any) {
    const {_id} = params

    const prod = await fetchId(_id);

    return (
        <div>
            <p>{prod.name}</p>
        </div>
    )
}