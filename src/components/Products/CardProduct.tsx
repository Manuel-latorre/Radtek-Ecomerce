import Image from 'next/image'
import style from './Product.module.css'
import Link from 'next/link'
import { Advent_Pro, Abel, Antonio } from "next/font/google"


const advent = Advent_Pro({ subsets: ['latin'], weight: ["200", "300", "900"] })
const abel = Abel({ subsets: ['latin'], weight: ['400'] });
const antonio = Antonio({ subsets: ['latin'], weight: ["200", "300"] })
  

interface ProductProps{
    product: {
    _id: string,
    id: number,
    category: string,
    price: number,
    name: string,
    image: string,
    color: string,
    description: string,    
    brand: string,
    stock: number
    }
}


export default function Product({product}:ProductProps){
    return(
        <div className={style.card}>
            <Link href={`/product/${product._id}`}>
                <img style={{width: 200, margin:'auto'}} src={product.image} alt='product'/>
                <div className={style.title_price_container}>
                    <p style={{fontSize: 26, fontWeight: '500'}} className={advent.className}>{product.name}</p>
                    <p className={abel.className}>${product.price}</p>
                </div>
                <div>
                    <p></p>
                </div>
                <div className={style.buy_container}>
                    <p className={antonio.className}>COMPRAR</p>
                </div>
                
            </Link>
        </div>
    )
}