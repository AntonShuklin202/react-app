import './AsideMenu.scss';

function AsideMenu() {
  return (
    <div className="AsideMenu">
       <nav>
           <ul className="AsideMenu__List">
               <li className="AsideMenu__List--item">Home</li>
               <li className="AsideMenu__List--item">About</li>
               <li className="AsideMenu__List--item">Products</li>
               <li className="AsideMenu__List--item">Cabinet</li>
           </ul>
       </nav>       
    </div>
  );
}

export default AsideMenu;