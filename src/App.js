import { useState,useEffect } from 'react';
import { Link } from "react-scroll"
import HashLoader from "react-spinners/HashLoader";
import sk from './south-korea.png';
import './App.css';
import Home from './section/Home';
import About from './section/About';
import Project from './section/Project';
import Contact from './section/Contact';

function App() {
  const [loading, setLoading] = useState(false);
  const [page,setPage] = useState([]);

  

  useEffect(()=>{
    setLoading(true)
    
    setTimeout(()=>{
      setLoading(false)
    },3000)

    setTimeout(()=>{
      setPage(true)
    },3000)

    setTimeout(()=>{
      setPage(false)
    },6000)

  },[])

  console.log(page)
  return (
    <div className="App">
      {
        loading ?
        <div className='loading'><HashLoader  color="#133c55" /></div>
        
       
        :

        page?

        <div className="App-header amatic">
          ALIEN (she/her) registered in  <span ><img className='flag-sk' src={sk}/></span>
        </div>

          :

          
            <div className='test' >
              


            <nav>
              <ul className='nav body-font'>
                <li><Link to="home" spy={true} smooth={true}>Home</Link> </li>
                <li><Link to="about" spy={true} smooth={true}>About</Link> </li>
                <li><Link to="project" spy={true} smooth={true}>Project</Link> </li>
                <li><Link to="contact" spy={true} smooth={true}>Contact Me</Link></li>
              </ul>
            </nav>

            <Home />
            <About />
            <Project />
            <Contact />

           
            


</div>

          
          

          
        
          

          



       

        

      }
      
    </div>
  );
}

export default App;
