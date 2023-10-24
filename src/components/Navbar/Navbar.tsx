"use client"
  
import React, {useRef} from "react";
import "./Navbar.css"
import Image from "next/image";
import Link from "next/link";

//ICONOS NAVBAR
import img from "@/components/Img/RADTEK 1.png"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
//FUENTE DE LOS NAVLINKS
import { Actor, Sora } from "next/font/google";
const actor = Actor({
  subsets:["latin"],
  weight:["400"]
})
const sora = Sora({
  subsets:["latin"],
  weight:["400", "800"]
})


function Navbar() {
  const navRef = useRef<HTMLInputElement | null>(null);

  const showNavBar = ()=>{  
    navRef.current?.classList.toggle('responsive')
  }
  return(
    <div className="fixed">
    <div className="presentacion">
      <p className={sora.className} style={{color:"white", fontSize:10}}>Conoce mas de nuestro trabajo.  <strong style={{paddingLeft:10}}>agendar demo</strong></p>
      <ArrowForwardIcon sx={{fontSize:15, color:"white", marginLeft:1}}/>
    </div>
    <div className="NavContainer">
      <nav>
        <Image src={img} alt="" width={186} height={146}/>
        <ul className="NavLinks">
          <div className="linksContainer" ref={navRef}>
            <div className="li" >
          <Link href="/" className={actor.className} style={{fontSize:15 , color:"white", margin:20}} onClick={showNavBar}>INICIO</Link>
          <Link href="/" className={actor.className} style={{fontSize:15 , color:"white", margin:20}} onClick={showNavBar}>CONTACTOS</Link>
          <Link href="/productss" className={actor.className} style={{fontSize:15 , color:"white", margin:20}} onClick={showNavBar} >PRODUCTOS</Link>
          <AccountCircleIcon sx={{fontSize:31, color:"white", margin:2}}/>
          <ShoppingCartIcon sx={{fontSize:31, color:"white", margin:2}}/>
            </div>
          </div>
        </ul>
        <button className="hamburger" onClick={showNavBar}>
        <MenuIcon  sx={{fontSize:38, color:"white", marginLeft:1}}/>
      </button>
      </nav>
      <div className="searchBar">
        <div className="real">
        <input type="text" className="inputSearchBar" placeholder="Buscar..."/>
          <div className="searchBarIcon">
            <SearchIcon sx={{fontSize:28, color:"white"} }/>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Navbar;
