// import Navbar from "../../components/Navbar/Navbar"
import Header from "../../components/Header/Header"
import Menu from "../../components/Menu/Menu"
import { useState } from "react"
import FoodDispaly from "../../components/foodDisplay/FoodDispaly"

const Home = () => {
const[category,setCategory]=useState('All')
// console.log(category)

  return (
    <div>
            {/* <Navbar/> */}
            <Header/>
            <Menu category={category}  setCategory={setCategory}/>
            <FoodDispaly category={category} />
    </div>
  )
}

export default Home