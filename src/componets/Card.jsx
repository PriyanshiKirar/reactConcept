import React from 'react'
 name="ruhi" 
const Card = ({name="ruhi"}) => {
    // console.log(props.name);
    
  return (
    <>
    <div className="box w-[15vw] h-[45vh] bg-slate-600">
  <h1 className='text-center text-2xl'>{name}</h1>
  <p> Lorem ipsum dolor sit amet  et inventore tempora reprehenderit aut?</p>
</div>
    </>
  )
}

export default Card