import MainHeader from '../../components/MainHeader'
import Programs from '../../components/Programs';
import Values from '../../components/values';
import FAQs from "../../components/FAQs";

import './home.css'

const home = () => {
    return (
      <>
        <MainHeader/>
        <Programs/>
        <Values/>
        <FAQs/>
        
      </>
    )
  }
  
  export default home