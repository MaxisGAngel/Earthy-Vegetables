import { Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Home = () => {
  const carouselImages = [
    'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2',
    'https://images.unsplash.com/photo-1560493676-04071c5f467b',
    'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735',
  ];

  return (
    <div className="hero-section">
      { <div className="absolute top-0 left-0 w-full h-full -z-10">
        <svg className="absolute top-0 left-0 w-full" viewBox="0 0 1440 600" fill="none">
          <path d="M0 0H1440V400C1440 400 1200 600 720 600C240 600 0 400 0 400V0Z" fill="#DCFCE7"/>
        </svg>
      </div> }

      <div className="container mx-auto px-4 py-8">
        <div className="relative">
          <div className="absolute top-0 right-0 -mt-4">
            <Star className="text-yellow-400 w-16 h-16" fill="currentColor" />
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-bold">
              Guides
            </span>
          </div>
        </div>

        <div className="content-wrapper">
          <h1 className="heading-1 text-center">Welcome</h1>
          <h1 className="heading-2">
            Welcome to Earthy Vegetables<br />Your Guide to Growing your own Fresh Vegetables at Home!
          </h1>

          <div className="mb-12">
            <h2 className="heading-2">About</h2>
            <p className="mb-8">
            At Earthy Vegetables, we believe everyone should have access to the learning and benefits of growing their own food. Whether you're an advanced gardener or just starting out, we’re here to help you grow a delicious garden!
            </p>

            <h2 className="heading-3">Why Grow Your Own Vegetables?</h2>
            <div className="space-y-6">
              <div className="feature-item">
                <h3 className="feature-title">Healthy and Delicious</h3>
                <p> Enjoy nutrient-packed produce right from your own garden.</p>
              </div>
              <div className="feature-item">
                <h3 className="feature-title">Save Money</h3>
                <p>Reduce grocery bills by growing your own food.</p>
              </div>
              <div className="feature-item">
                <h3 className="feature-title">Sustainable Living</h3>
                <p>Cut down on food waste and reduce your carbon footprint.</p>
              </div>
              <div className="feature-item">
                <h3 className="feature-title">Clean and Fresh</h3>
                <p>Know exactly what goes into your food – no chemicals or pesticides.</p>
              </div>
              <div className="feature-item">
                <h3 className="feature-title">A new Hobby</h3>
                <p>Experience the joy of growing and harvesting your own plants!</p>
              </div>
            </div>
          </div>

          <Link 
            to="/guides"
            className="btn btn-primary mb-12"
          > 
            View Our Guides
          </Link>

          <div> 
          <h2 className="heading-3">Start your Gardening Journey</h2>
          <p>Our easy-to-follow guides are here to help you every step of the way. From beginner tips to expert advice, we cover everything you need to know to grow vegetables indoors or outdoors. Explore our detailed guides on how to grow some of the most essential plants, and start your own garden today!</p>
          </div>

          <div className="carousel-wrapper mb-12">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{ delay: 3000 }}
              pagination={{ clickable: true }}
              className="carousel"
            >
              {carouselImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <img src={image} alt={`Garden ${index + 1}`} className="w-full h-full object-cover" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="info-section mb-12">
            <h2 className="heading-3 text-center">Donate or Receive Gardening Supplies</h2>
          </div>

          <div className="process-flow mb-12">
            <div className="process-circle process-circle-blue">Tools</div>
            <ArrowRight className="process-arrow" />
            <div className="process-circle process-circle-green">
              Garden
            </div>
          </div>

          <div>
            <p>
            At Earthy Vegetables, we believe gardening should be accessible to everyone. That’s why we’ve created a space where you can donate old gardening tools and seeds, or receive free gardening supplies to get started. If you have spare tools or seeds lying around, consider donating them so someone else can begin their gardening adventure.
            </p>
          </div>

          <div className="highlight-box mb-12">
            <h2 className="heading-3">Supporting the Environment with Kaitiakitaka</h2>
            <p>
            Our commitment to the environment is strong. We are inspired by the Maori concept of Kaitiakitaka, which means "care and guardianship of the environment." We believe in nurturing the earth, protecting our natural resources, and fostering a sustainable way of living. Through gardening, we can contribute to the health of our planet, support local ecosystems and live more sustainably. Let’s care for the environment together, one plant at a time.
            </p>
          </div>

          <div>
            <h2 className="heading-3">Why We created This Website</h2>
            <p>
            We started Grow Your Own with one mission in mind: to inspire and help people to grow their own food. By growing your own vegetables, we can reconnect with the earth and create a healthier, more sustainable lifestyle. We are here to guide you.
            </p>
          </div>

          <div> 
            <p>
          Join us in our mission to grow fresh food, support the environment, and lead healthier, more sustainable lives. Let’s grow together!
            </p>
          </div>

          <Link 
            to="/contact"
            className="btn btn-secondary"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;