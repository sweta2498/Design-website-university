import './App.css';
import logo from './img/logo.png';
import london from './img/london.png'
import newyork from './img/newyork.png'
import washington from './img/washington.png'
import library from './img/library.png'
import basketball from './img/basketball.png'
import cafeteria from './img/cafeteria.png'
import user1 from './img/user1.jpg'
import user2 from './img/user2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faHeart } from '@fortawesome/free-solid-svg-icons'
import { TiThMenu } from "react-icons/ti";
import { GrClose } from "react-icons/gr";

function App() {

  var navlink=document.getElementById("navlink")
  const hideMenu=()=>{
      navlink.style.right="-200px";
  }
  const showMenu=()=>{
    navlink.style.right="0";
  }

  return (
    <div>
      <section className='header' id='home'>
        <nav>
          <a href=''><img src={logo} /></a>
          {/* <TiThMenu className='fa' onClick={showMenu}/> */}
          <div className='nav-links' id='navlink'>
            {/* <GrClose className='fa' onClick={hideMenu}/> */}
            <ul>
              <li><a href='#home'>Home</a></li>
              <li><a href='#course'>Course</a></li>
              <li><a href='#facilities'>Facilities</a></li>
              <li><a href='#blog'>Blog</a></li>
              <li><a href='#about'>About</a></li>
              <li><a href='#contact'>Contact</a></li>
            </ul>
            
          </div>
         
        
        </nav>

        <div className="text-box">
          <h1>World's Biggest University</h1>
          <p>Making WEbsite is World's biggest Unniversity.... </p>
          <a href='' className='hero-btn'>Visit Us To Know More</a>
        </div>
      </section>
      <section className='course' id='course'>
        <h1>Courses We Offer</h1>
        <p>Lorem insum door sit amet, courses dolor biggest offer </p>

        <div className="row">
          <div className="course-col">
            <h3>Intermediate</h3>
            <p>Lorem insum door sit amet, courses dolor biggest offer
              Lorem insum door sit amet, courses dolor biggest offer
              Lorem insum door sit amet, courses dolor biggest offer
            </p>
          </div>

          <div className="course-col">
            <h3>Degree</h3>
            <p>Lorem insum door sit amet, courses dolor biggest offer
              Lorem insum door sit amet, courses dolor biggest offer
              Lorem insum door sit amet, courses dolor biggest offer
            </p>
          </div>

          <div className="course-col">
            <h3>Post Graduation</h3>
            <p>Lorem insum door sit amet, courses dolor biggest offer
              Lorem insum door sit amet, courses dolor biggest offer
              Lorem insum door sit amet, courses dolor biggest offer
            </p>
          </div>

          
        </div>
      </section>

      <section className='campus' id='blog' >
        <h1>Our Globle Compus</h1>
        <p>Lorem insum door sit amet, courses dolor biggest offer </p>
        <div className="row">
          <div className="campus-col">
            <img src={london} />
            <div className="layer">
              <h3>LONDON</h3>
            </div>
          </div>

          <div className="campus-col">
            <img src={newyork} />
            <div className="layer">
              <h3>NEW YORK</h3>
            </div>
          </div>

          <div className="campus-col">
            <img src={washington} />
            <div className="layer">
              <h3>WASHINGTON</h3>
            </div>
          </div>

        </div>
      </section>

      <section className='facilities' id='facilities'>
        <h1>Our Facilities</h1>
        <p>Lorem insum door sit amet, courses dolor biggest offer </p>
        <div className="row">
          <div className="facilities-col">
            <img src={library} />
            <h3>World Ckass Library</h3>
            <p>Lorem insum door sit amet, courses dolor biggest offer </p>
          </div>

          <div className="facilities-col">
            <img src={basketball} />
            <h3>Largest Play Ground</h3>
            <p>Lorem insum door sit amet, courses dolor biggest offer </p>
          </div>

          <div className="facilities-col">
            <img src={cafeteria} />
            <h3>Tasty and Healthy Food</h3>
            <p>Lorem insum door sit amet, courses dolor biggest offer </p>
          </div>
        </div>
      </section>

      <section className='testimonials'>
        <h1>What our Student Says</h1>
        <p>Lorem insum door sit amet, courses dolor biggest offer </p>

        <div className="row">
          <div className="testimonial-col">
            <img src={user1} />
            <div>
              <p>Lorem insum door sit amet, courses dolor biggest offer.
                Lorem insum door sit amet, courses dolor biggest offer,
                Lorem insum door sit amet, courses dolor biggest offer. </p>
              <h3>Christine Berkley</h3>
            </div>
          </div>

          <div className="testimonial-col">
            <img src={user2} />
            <div>
              <p>Lorem insum door sit amet, courses dolor biggest offer.
                Lorem insum door sit amet, courses dolor biggest offer,
                Lorem insum door sit amet, courses dolor biggest offer. </p>
              <h3>David Byer</h3>
            </div>
          </div>
        </div>
      </section>

      <section className='cta' id='contact'>
        <h1>Enroll for our varios online Courses<br /> Anywhere From The World </h1>
        <a href='' className='hero-btn'>Contact Us </a>
      </section>

      <section className='footer' id='about'>
        <h4>About Us</h4>
        <p>Lorem insum door sit amet, courses dolor biggest offer.
          Lorem insum door sit amet, courses dolor<br/> biggest offer,
          Lorem insum door sit amet, courses dolor biggest offer.</p>

          <p>Made with <FontAwesomeIcon icon={faHeart} /> by $wet@</p>        
          

      </section>
    </div>
  );
}

export default App;
