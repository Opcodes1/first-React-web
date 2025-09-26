import MainHeader from '../../components/MainHeader'
import Programs from '../../components/Programs';
import Values from '../../components/values';
import FAQs from "../../components/FAQs";
import Testimonials from "../../components/Testimonials";
import Footer from "../../components/Footer"
import './home.css'

const home = () => {
    return (
      <>
        <MainHeader/>
        <Programs/>
        <Values/>
        <FAQs/>
        <Testimonials/>
        
        
      </>
    )
  }
  
  export default home