import React from 'react'

const Footer = () => {
  return (
      <div>
  <div id="_last" className="d-flex flex-column" style={{alignItems: 'center', width: '95%', height: '30vh', backgroundColor: 'black', color: 'snow', padding: '30px 0px 0px 0px'}}>
    <div>
      <h4>BE THE FIRST</h4>
    </div>
    <div>
      <h6>New arrivals. Exclusive previews. First access to sales.</h6>
    </div>
    <div>
      <h6>Sign up to stay in know.</h6>
    </div>
    <div><input type="email" placeholder="Enter your E-mail Address.." style={{border: 'none'}} /><button className="_button" type="submit">Sign up</button></div>
  </div>
  <div className="d-flex" style={{width: '95%', height: '45vh', marginTop: 30, justifyContent: 'space-evenly', textAlign: 'left'}}>
    <div id="_footer" className="p-2" style={{flex: '30%', height: '45vh'}}>
      <h4 style={{paddingBottom: 20}}>NEED HELP?</h4>
      <h6>+92-1234567890 (9am - 10pm , Mon - Sat)</h6>
      <h6> &nbsp;</h6>
      <h6><a href="https://www.junaidjamshed.com">eshop@junaidjamshed.com</a></h6>
    </div>
    <div className="p-2" style={{flex: '25%', height: '45vh'}}>
      <h4 style={{paddingBottom: 20}}>CUSTOMER SERVICE</h4>
      <h6>Contact Us</h6>
      <h6>Delivery &amp; Orders</h6>
      <h6>Returns &amp; Exchanges</h6>
      <h6>Terms &amp; Conditions</h6>
      <h6>Privacy Policy</h6>
      <h6>Track My Order</h6>
      <h6>Payment Guide</h6>
    </div>
    <div className="p-2" style={{flex: '20%', height: '45vh'}}>
      <h4 style={{paddingBottom: 20}}>COMPANY</h4>
      <h6>Abouts Us</h6>
      <h6>Careers</h6>
    </div>
    <div className="p-2" style={{flex: '25%', height: '45vh'}}>
      <h4 style={{paddingBottom: 20}}>FOLLOW US</h4>
      <a href="https://www.facebook.com/" className="fa fa-facebook">.</a>
      <a href="https://twitter.com/" className="fa fa-twitter">.</a>
      <a href="https://www.linkedin.com/login" className="fa fa-linkedin">.</a>
      <a href="https://www.youtube.com/" className="fa fa-youtube">.</a>
      <a href="https://www.instagram.com/?hl=en" className="fa fa-instagram">.</a>
      <a href="https://www.pinterest.com/" className="fa fa-pinterest">.</a>
    </div>
  </div>
</div>

  )
}

export default Footer;