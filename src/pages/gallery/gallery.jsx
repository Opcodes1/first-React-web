import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_3.jpg'
import './gallery.css'

const gallery = () => {
  const gallerylength = 15;
  const images = []

  for(let i=1; i <= gallerylength; i++){
    images.push(require(`../../images/gallery${i}.jpg`))
  }
  return (
   <>
   <Header title="Our Gallery" image={HeaderImage}>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio beatae, debitis consequatur rem at perferendis provident eaque error quia blanditiis.
    </Header> 
    <section className='Gallery'>
     <div className="container gallery__container">
      {
        images.map((image, index)=>{
          return <article key={index}>
            <img src={image} alt={`Gallery Image${index+1}`}></img>
          </article>
        })
      }
     </div>
    </section>
     </>
  )
}

export default gallery
