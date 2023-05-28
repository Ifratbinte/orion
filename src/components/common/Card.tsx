import Link from 'next/link'
import React from 'react'
import { FaEthereum } from 'react-icons/fa'

interface Props{
  thumb: string
  author: []
  title : string
  amount : string
  stock: string
  time : string
  btn: string
}

const Card:React.FC<Props> = ({thumb, author,title,amount,stock,time,btn}) => {
  console.log({author});
  
  return (
    <></>
  )
}

export default Card