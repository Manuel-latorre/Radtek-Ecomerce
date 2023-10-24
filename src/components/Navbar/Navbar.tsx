"use client"
  
import React from "react";
import "./Navbar.css"
import Image from "next/image";
import Link from "next/link";

//ICONOS NAVBAR
import img from "@/components/Img/RADTEK 1.png"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SearchIcon from '@mui/icons-material/Search';

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
  return(
    <>
    <div className="presentacion">
      <p className={sora.className} style={{color:"white", fontSize:10}}>Conoce mas de nuestro trabajo.  <strong style={{paddingLeft:10}}>agendar demo</strong></p>
      <ArrowForwardIcon sx={{fontSize:15, color:"white", marginLeft:1}}/>
    </div>
    <div className="NavContainer">
      <nav>
        <Image src={img} alt="" width={186} height={146}/>
        <ul className="NavLinks">
          <div className="linksContainer">
          <Link href="/" className={actor.className} style={{fontSize:15 , color:"white", margin:20}}>INICIO</Link>
          <Link href="/" className={actor.className} style={{fontSize:15 , color:"white", margin:20}}>CONTACTOS</Link>
          <Link href="/productss" className={actor.className} style={{fontSize:15 , color:"white", margin:20}}>PRODUCTOS</Link>
          <AccountCircleIcon sx={{fontSize:31, color:"white", margin:2}}/>
          <ShoppingCartIcon sx={{fontSize:31, color:"white", margin:2}}/>
          </div>
        </ul>
      </nav>
      <div className="searchBar">
        <div className="real">
          {/* ANIMACION CLICK */}
        <input type="text" className="inputSearchBar"/>
          <div className="searchBarIcon">
            <SearchIcon sx={{fontSize:28, color:"white"} }/>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar;
