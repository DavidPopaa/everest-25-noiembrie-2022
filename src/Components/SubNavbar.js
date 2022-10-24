import React, {useState} from 'react';
import '../Styles/subnavbar.css';
import { Icon } from '@iconify/react';
import menuIcon from '@iconify/icons-bytesize/menu';
import cartIcon from '@iconify/icons-dashicons/cart';
import "../Styles/lista-categorii.css";
import { Link } from 'react-router-dom';


const SubNavbar = () => {
  const [show, setShow] = useState("hide")
  let body = document.querySelector(".full")
  const handeClick = () => {
    //show === "hide" ? setShow("unhide") : setShow("hide")
    console.log(body);
    if(show==="hide"){
      setShow("unhide")
      body.classList.add("visibel")
    }else{
      setShow("hide")
      body.classList.remove("visibel")
    }
  }
  let cart=document.querySelector(".cart")
  let [here,setHere]=useState(0)
  
  let drag=()=>{
    if(here===0){
      setHere(1)
      cart.classList.add("he")
      body.classList.add("visibel")
    }else{
      cart.classList.remove("he")
      setHere(0)
      body.classList.remove("visibel")
    }

  }
  let undrag=()=>{
      if(here===1){
      cart.classList.remove("he")
      setHere(0)
      body.classList.remove("visibel")
      }
  }
  
    return(
      <div className='sub-navbar'> 
      
        <div className="left-ceva">
          <Icon icon={menuIcon} onClick={handeClick} className="menu" />
        </div>
        <div className='rigth-ceva'>
          <Icon icon={cartIcon} className='cart-icon' onClick={drag}/>
          <button id='auth-btn'>Sign In/ Log In</button>
        </div>
      {/*Menu right */}
      {/*Menu right */}
      {/*Menu right */}
      
      <div className='cart'>
        <button onClick={undrag}>Iesire</button>
        <ul>
          <il>Produs</il>
          <il></il>
          <il></il>
        </ul>
      </div>
        <div className={show}>
      {/*menu left*/}
      {/*menu left*/}
      {/*menu left*/}
      <ul>
      <li className="list-element">
        <Link to="/Jucarii" className='decoration'>
          <div className="parent">
            <div>Jucarii</div>{" "}
            <div>
              <Icon icon="eva:arrow-ios-forward-fill" className="arrow-icon"/>
            </div>
          </div>
        </Link>
      </li>
      <li className="list-element">
        <Link to="/Natura" className='decoration'>
          <div className="parent">
            <div>Natura</div>{" "}
            <div>
              <Icon icon="eva:arrow-ios-forward-fill" className="arrow-icon"/>
            </div>
          </div>
        </Link>
      </li>
      <li className="list-element">
        <Link to="/Papuci" className='decoration'>
          <div className="parent">
            <div>Papuci</div>
            <div>
              <Icon icon="eva:arrow-ios-forward-fill" className="arrow-icon"/>
            </div>
          </div>{" "}
        </Link>
      </li>
      <li className="list-element">
        <Link to="/Tehnologie" className='decoration'>
          <div className="parent">
            <div>Tehnologie</div>{" "}
            <div>
              <Icon icon="eva:arrow-ios-forward-fill" className="arrow-icon"/>
            </div>
          </div>
        </Link>
      </li>
      <li className="list-element">
        <Link to="/Ceasuri" className='decoration'>
          <div className="parent">
            <div>Ceasuri</div>{" "}
            <div>
              <Icon icon="eva:arrow-ios-forward-fill" className="arrow-icon"/>
            </div>
          </div>
        </Link>
      </li>
      <li className="list-element">
        <Link to="/Pentru Acasa" className='decoration'>
          <div className="parent">
            <div>Pentru Acasa</div>{" "}
            <div>
              <Icon icon="eva:arrow-ios-forward-fill" className="arrow-icon"/>
            </div>
          </div>
        </Link>
      </li>
      <li className="list-element">
        <Link to="/Imbracaminte" className='decoration'>
          <div className="parent">
            <div>Imbracaminte</div>{" "}
            <div>
              <Icon icon="eva:arrow-ios-forward-fill" className="arrow-icon"/>
            </div>
          </div>
        </Link>
      </li>
      <li className="list-element">
        <Link to="/Arta" className='decoration'>
          <div className="parent">
            <div>Arta</div>
            <div>
              <Icon icon="eva:arrow-ios-forward-fill" className="arrow-icon"/>
            </div>
          </div>
        </Link>
      </li>
      <li className="list-element">
        <Link to="/Altele" className='decoration'>
          <div className="parent">
            <div>Altele</div>{" "}
            <div>
              <Icon icon="eva:arrow-ios-forward-fill" className="arrow-icon"/>
            </div>
          </div>
        </Link>
      </li>
          </ul>
        </div>
      </div>

    )
}

export default SubNavbar