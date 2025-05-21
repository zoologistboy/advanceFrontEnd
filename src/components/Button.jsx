const Button =({text, handleClick, icon, bgColor})=>{
    return(
        <button onClick={handleClick} style={{...styles, background:bgColor}}>  {text}</button>
    )
}

const styles={
    color: 'blue'
}
export default Button