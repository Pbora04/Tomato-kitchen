import './Menu.css'
import {menu_list} from '../../assets/assets.js'
const Menu = ({category,setCategory}) => {
  // console.log(category)

  return (
    <div className='explore-menu' id='menubar'>
    <h1>Explore our menu</h1>
    <p className='explore-menu-text'>choose from a diverse menu featuring a delectable array of dishes crafted with finest ingredent and culinary expertise. Our mission is to satisfy your craving and evaluate your dining experience,one delicious meal at a time. </p>
  <div className='explore-menu-list'>
{
  menu_list.map((item,index)=>{
     return(
      <div className='explore-menu-list-item' key={index} onClick={()=>setCategory(prev=> prev===item.menu_name?"All":item.menu_name)}>
                 <img className={category===item.menu_name?"active":""} src={item.menu_image} alt='menuImg'/>
                 <p>{item.menu_name}</p>
                </div>
     )
  })
}    </div>
     <hr/>
    </div>
  )
}

export default Menu