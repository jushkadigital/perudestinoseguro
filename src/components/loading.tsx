'use client'
import React, { CSSProperties } from "react"

interface Props {
  sty?:string
}
export default function Loader({sty=""}:Props){
  // const override: CSSProperties = {
  // display: "block",
  // margin: "0 auto",
  // borderColor: "red",
  return (
  <div></div>
  // <div className={`mt-28 ${sty}`}>
  //     <ClipLoader  cssOverride={override} loading={true} color="#D20000" size={100}/>
  //   </div>
    )
    }
