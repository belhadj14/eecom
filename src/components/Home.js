import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
const homedata = [
  {
    id: 1,
    image: require('../assets/images/20423.jpg'),
    decr: "50% Off for Your First Shopping For Headphone Section",
    more: "Nulla vitae elit libero, a pharetra augue mollis interdum."

  },
  {
    id: 1,
    image: require('../assets/images/3174102.jpg'),
    decr: "50% Off for Your First Shopping For SmartPhone Section",
    more: "Nulla vitae elit libero, a pharetra augue mollis interdum."

  },
  {
    id: 1,
    image: require('../assets/images/Wavy_Bus-17_Single-09.jpg'),
    decr: "50% Off for Your First Shopping For Our Products",
    more: "Nulla vitae elit libero, a pharetra augue mollis interdum."

  }

]
const Home = () => {
  return (
    <section className='mainclass fluid'>
      <div className="carousel-wrapper rounded">
       <Carousel className="custom-carousel">
    {homedata.map((elt) => (
      <Carousel.Item key={elt.id} className='w-100 h-100'>
        <div className="carousel-slide">
          <div className="carousel-text ms-5">
            <h1>{elt.decr}</h1>
            <p className='mt-5 '>{elt.more}</p>
             <Button variant="primary" className='mt-5 ms-5 rounded-5'>Visit our Collections</Button>
          </div>
         


          <div className="carousel-image">
            <img
              src={elt.image}
              alt="slide"
              className="img-fluid me-5"
            />
          </div>
        </div>
      </Carousel.Item>
    ))}
  </Carousel>
  </div>
    </section>
  )
}

export default Home