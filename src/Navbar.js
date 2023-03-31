import React from 'react'

const Navbar = () => {
  return (
    <div className="jumbotron text-center" style={{marginBottom:'0px', padding:'0px', backgroundColor: 'white'}}>
  <ul className="nav nav-tabs" style={{justifyContent: 'space-evenly', borderBottom: 'none', width: '100%', padding: '4px 5px 10px 5px'}}>
    <li className="nav-item">
      <a className="nav-link" href="#!">NEW ARRAIVALS</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#!">EXCLUSIVE COLLECTION</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#!">WOMEN</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#!">MEN</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#!">BOYS &amp; GIRLS</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#!">FRAGRANCES</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#!">MAKEUP</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#!">CATALOGE</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#!">40% - 50%</a>
    </li>
  </ul>
</div>

  )
}

export default Navbar;