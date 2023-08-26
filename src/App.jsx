
import './App.css'
import Header from './components/header'

function App() {
  
  const userInfo={
    name:"Navbar",
    age:99,
    level:200
  }
  const get_data=(data)=>{
    if(data){
      console.log(data)
    }
    else{
      console.log("yahan pr data aye ga from component")
    }
  }
  return (
    <>
    <nav>
     <Header 
     user={userInfo}
     get_data={get_data}
     />
     </nav>
    </>
  )
}

export default App
