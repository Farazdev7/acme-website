import { useContext } from 'react';
import './MenuButton.css';
import { Btncontext } from '../../Contexts/MenuButton';
// import MenuButtonContext from '../../context/MenuButtonContext';

const MenuButton = () => {
  const { menuToggle, setMenuToggle } = useContext(Btncontext);


  const menuToggleHandler = (e) => {
    e.preventDefault(); 
    console.log(menuToggle);
    setMenuToggle(!menuToggle);
  }
  

  return (
   <main>
    {/* left-[46vw] md:left-10  md:top-[10vh]*/}
      <div onClick={menuToggleHandler} id="menuToggle" className='z-50 fixed  md:top-[10vh] top-[5vh]  left-10 '>
        <input checked = {!menuToggle}   id="checkbox" type="checkbox" readOnly />
        <label className="toggle" htmlFor="checkbox">
          <div className="bar bar--top"></div>
          <div className="bar bar--middle"></div>
          <div className="bar bar--bottom"></div>
        </label>
        {/* <h3 className='text-white' >Menu</h3> */}
      </div>
    </main>
  );
};

export default MenuButton;

    // <main>
    //   <div onClick={menuToggleHandler} id="menuToggle" className='z-10 fixed top-[10vh] left-10'>
    //     <input id="checkbox" type="checkbox" />
    //     <label className="toggle" htmlFor="checkbox">
    //       <div className="bar bar--top"></div>
    //       <div className="bar bar--middle"></div>
    //       <div className="bar bar--bottom"></div>
    //     </label>
    //     <h3 >Menu</h3>
    //   </div>
    // </main>

