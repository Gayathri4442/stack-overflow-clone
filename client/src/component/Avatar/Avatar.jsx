import React from 'react'

const Avatar = ({ Child, backgroundColor, px, py, color,  borderRadius, fontSize,cursor}) =>{ 
     const style={
      backgroundColor,
      padding:`${px} ${py}`,
      color: color || 'black',
      borderRadius,
      fontSize,
      textAlign: "center",
      cursor: cursor || 'null',
      textDecoration: "none"
    }

    
  return (
    <div style={style} >{ Child}</div>
  )
};

export default Avatar
