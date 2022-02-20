import { Link } from 'react-router-dom'
import OffcanvasMenu from 'react-offcanvas-menu-component'
import './Navbar.css'
function Navbar({location}:any) {

  
  
  return (
    <OffcanvasMenu
    Link={Link} 
    location={location} 
    config={{
        width: 300, 
        push: true
    }}
   
    menu={[
       
        {text: 'Home', link: '/entery'}, 

        // menu item with submenu
        {text: 'Pages', link: '/page', submenu: [ 
            {text: 'Easy', link: '/'},
            {text: 'category', link: '/category'}
        ]}
    ]}
   
/>
  )
}

export default Navbar