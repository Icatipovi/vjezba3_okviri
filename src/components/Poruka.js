//importamo React
import React from 'react'

const Poruka = ({props}) => {
  return (
    <li className="poruka">{props.sadrzaj}</li>
  )
}
//ovo smo napravili da bi je mogi importat na drugom mjestu
export default Poruka
