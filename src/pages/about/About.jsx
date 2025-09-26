import Header from "../../components/Header"
import Headerimage from "../../images/header_bg_1.jpg"
import StoryImage from "../../images/about1.jpg"
import VisionImage from "../../images/about2.jpg"
import MissionImage from "../../images/about3.jpg"
import './about.css'



const About = () => {
  return (
    <>
   <Header title="About Us" image={Headerimage}>
  <p>ipsum dolor sit amet consectetur adipisicing elit. Suscipit molestias quidem cumque aperiam sit nulla repellat aliquid maiores esse praesentium?</p> 
   </Header>
   <section className="about__story">
    <div className="container about__story-container">
      <div className="about__section-image">
        <img src={StoryImage} alt="Our story Img"/>
      </div>
      <div className="about__section-content">
        <h1>Our Story</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo laudantium dolore corrupti perspiciatis id! Ducimus assumenda ut asperiores eos odit voluptatibus quidem vel, provident natus labore dicta recusandae cupiditate corporis!
          Lorem ipsum dolor sit amet consectetur adipisicing elit in ullam eligendi quod doloremque odit dolores animi dignissimos architecto!.

        </p>
        <p>
         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo laudantium dolore corrupti perspiciatis id! Ducimus assumenda ut asperiores eos odit voluptatibus quidem vel, provident natus labore dicta recusandae cupiditate corporis!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, repudiandae.
          Lorse eaque in ullam eligendiores animi dignissimos architecto!.
          
        </p>
        <p>
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo laudantium dolore corrupti perspiciatis id! Ducimus assumenda ut asperiores eos odit voluptatibus quidem vel, provident natus labore dicta recusandae cupiditate corporis!
          Ladipisicing elit. Sapiente eaque in ullam eligendi quod doloremque odit dolores animi dignissimos architecto!.
          
        </p>
      </div>
    </div>

   </section>

   <section className="about__Vision">
    <div className="container about__Vision-container">
       <div className="about__section-image">
        <img src={VisionImage} alt="Our story Img"></img>
      </div>
      <div className="about__section-content">
        <h1>Our Vision</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo laudantium dolore corrupti perspiciatis id! Ducimus assumenda ut asperiores eos odit voluptatibus quidem vel, provident natus labore dicta recusandae cupiditate corporis!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, repudiandae.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente eaque in ullam eligendi quod doloremque odit dolores animi dignissimos architecto!.

        </p>
        <p>
         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo laudantium dolore corrupti perspiciatis id! Ducimus assumenda ut asperiores eos odit voluptatibus quidem vel, provident natus labore dicta recusandae cupiditate corporis!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, repudiandae.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente eaque in ullam eligendi quod doloremque odit dolores animi dignissimos architecto!.
          
        </p>
        <p>
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo laudantium dolore corrupti perspiciatis id! Ducimus assumenda ut asperiores eos odit voluptatibus quidem vel, provident natus labore dicta recusandae cupiditate corporis!
          Ladipisicing elit. Sapiente eaque in ullam eligendi quod doloremque odit dolores animi dignissimos architecto!.
          
        </p>
      </div>
     
    </div>

   </section>

    <section className="about__mission">
    <div className="container about__mission-container">
       <div className="about__section-image">
        <img src={MissionImage} alt="Our Mission Img"></img>
      </div>
      <div className="about__section-content">
        <h1>Our Mission</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo laudantium dolore corrupti perspiciatis id! Ducimus assumenda ut asperiores eos odit voluptatibus quidem vel, provident natus labore dicta recusandae cupiditate corporis!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, repudiandae.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente eaque in ullam eligendi quod doloremque odit dolores animi dignissimos architecto!.

        </p>
        <p>
         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo laudantium dolore corrupti perspiciatis id! Ducimus assumenda ut asperiores eos odit voluptatibus quidem vel, provident natus labore dicta recusandae cupiditate corporis!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, repudiandae.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente eaque in ullam eligendi quod doloremque odit dolores animi dignissimos architecto!.
          
        </p>
        <p>
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo laudantium dolore corrupti perspiciatis id! Ducimus assumenda ut asperiores eos odit voluptatibus quidem vel, provident natus labore dicta recusandae cupiditate corporis!
          Ladipisicing elit. Sapiente eaque in ullam eligendi quod doloremque odit dolores animi dignissimos architecto!.
          
        </p>
      </div>
     
    </div>

   </section>
   </>
  )
}


export default About
