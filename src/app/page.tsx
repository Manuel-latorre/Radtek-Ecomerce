'use client'


import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";


export default function Home() {
  return (
    <div style={{display:'flex', justifyContent:'center', marginTop: 300}}>
      <Dropdown>
      <DropdownTrigger>
        <Button 
          variant="bordered" 
        >
          TOCAME PAPI
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="new">ASHEEEEE</DropdownItem>
        <DropdownItem key="copy">ahi lo mandam</DropdownItem>
        <DropdownItem key="edit">depacito</DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger">
          Delete file
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
    </div>
  )
}
