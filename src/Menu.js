import React from 'react'; 
import { Menu } from 'antd'; 

const MenuItems = [
  { name: 'Home', link: '/home' }, 
  { name: 'About', link: '/about' }, 
  { name: 'Contact', link: '/contact' },
  { name: 'Blog', link: '/blog' },
  { name: 'Tech', link: '/tech' },
  { name: 'Bio', link: '/bio' }
]; 

 const MyMenu = () => { 

  return ( 
    <Menu mode="horizontal"> 

      {MenuItems.map(item => (  

        <Menu.Item key={item.name}>  

          <a href={item.link}>{item.name}</a>  

        </Menu.Item>  

      ))}  

    </Menu>  

  ); 

 }; 

 export default MyMenu;