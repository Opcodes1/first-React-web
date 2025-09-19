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
            <img src={Image} alt="Values Image"/>
    </div>
       
    </div>
    <div className="values__right">
        <SectionHead icon={<GiCutDiamond/>} title="Values"/>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, ex molestiae laudantium asperiores quis qui explicabo. Corrupti, cumque aspernatur! Quod, doloremque! Totam ex fuga esse doloribus repellendus architecto ipsam placeat!
        </p>
        <div className="values__wrapper">
            {
                values.map(({id, icon, title, desc})=>{
                    return <Card key={id} className="values__value">
                      <span>{icon}</span>
                      <h4>{title}</h4>
                      <small>{desc}</small>

                    </Card>
                })
            }
        </div>
    </div>
   </div>
</section>
    )
}
export default Values