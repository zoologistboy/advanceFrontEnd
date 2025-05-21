import Button from "./Button"

const Hero = ()=>{
    const searchProduct =()=>{
        alert("searching...")
    }
    return(
        <div>
            <p>Welcome to my first webpage</p>

            <input type="text" placeholder="type"/>
            
            <Button handleClick={searchProduct} text="search"/>
        </div>
    )
}
export default Hero