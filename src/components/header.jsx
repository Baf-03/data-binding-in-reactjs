const Header = (props)=>{
   const {user,get_data} =props
   console.log(user.name)
   console.log(get_data)

    const clickHandler =(e,v)=>{
        console.log(user.name)
        console.log(v)
        console.log(e.target)
    }
    
    const data="how"

   return(
    <>
    <nav>
        {user.name}
    </nav>
    <button className="btn" onClick={(e)=>clickHandler(e,data)}>My button</button>
    <button className="btn" onClick={()=>get_data(data)}>send data</button>
    </>
   )

}

export default Header;

