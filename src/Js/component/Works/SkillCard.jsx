import React from 'react'
import { skill } from './Skills'
import '../../../css/component/Works/skill.css'

const SkillCard = () => {
 
  return (

    <div className='grid'>
       {
           skill.map(( item, index)=>(
               <div key={index} className='skill_child' style={{backgroundColor:'inherit'}} >
<img src={item.img} alt="a" className='grid_img'/>
<p className='skillNames'>{item.title}</p>
                   </div>
           ))
       }
    </div>
  )
}

export default SkillCard