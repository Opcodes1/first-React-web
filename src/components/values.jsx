import Image from '../images/values.jpg'
import SectionHead from './SectionHead'
import { GiCutDiamond } from 'react-icons/gi'
import {values} from '../data'
import Card from '../pages/trainers/UI/Card'

const Values = ()=>{
    return(
<section className="values">
   <div className="container values__Container">
    <div className="values__left">
        <div className="values__image"> 
            <img src={Image} alt="Values">
            </img>
    </div>
       
    </div>
    <div className="values__right">
        <SectionHead icon={GiCutDiamond}></SectionHead>
    </div>
   </div>
</section>
    )
}
export default Values