import React from 'react';
import { Link } from 'react-router-dom';
import toothy from '../../assets/images/toothy.png'

function Header(){
  return (
    <div>
    <style jsx>{`
        div {
          background-image: url(${toothy});
          text-align: center;
          background-position: center;
          border-radius: 25px;
        }
        h1{
          text-shadow: white 0px 0px 10px;
        }
      `}</style>
      <h1>"You Good Bro?" Brewery</h1>
      <Link to="/">Home</Link> | <Link to="/newbeer">Input Beer</Link>
    </div>
  );
}

export default Header;
