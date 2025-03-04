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
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <svg className="absolute top-0 left-0 w-full" viewBox="0 0 1440 600" fill="none">
          <path d="M0 0H1440V400C1440 400 1200 600 720 600C240 600 0 400 0 400V0Z" fill="#DCFCE7"/>
        </svg>
      </div>

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
            Welcome to<br />Grow Your Own
          </h1>

          <div className="mb-12">
            <h2 className="heading-2">About</h2>
            <p className="mb-8">
              Our mission is to help everyone grow their own food sustainably. We provide comprehensive guides
              and resources to make gardening accessible and enjoyable for all.
            </p>

            <h2 className="heading-3">Reasons Why</h2>
            <div className="space-y-6">
              <div className="feature-item">
                <h3 className="feature-title">Healthy and Delicious</h3>
                <p>Grow fresh, nutritious vegetables right in your backyard.</p>
              </div>
              <div className="feature-item">
                <h3 className="feature-title">Save Money</h3>
                <p>Reduce your grocery bills by growing your own produce.</p>
              </div>
              <div className="feature-item">
                <h3 className="feature-title">Sustainable Living</h3>
                <p>Contribute to environmental sustainability through home gardening.</p>
              </div>
              <div className="feature-item">
                <h3 className="feature-title">Clean and Fresh</h3>
                <p>Know exactly where your food comes from and how it's grown.</p>
              </div>
            </div>
          </div>

          <Link 
            to="/guides"
            className="btn btn-primary mb-12"
          > 
            View Our Guides
          </Link>

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

          <div className="process-flow mb-12">
            <div className="process-circle process-circle-blue">Tools</div>
            <ArrowRight className="process-arrow" />
            <div className="process-circle process-circle-green">
              Garden
            </div>
          </div>

          <div className="info-section mb-12">
            <h2 className="heading-3 text-center">Donate or Receive Gardening Tools and Seeds</h2>
            <p>
              Join our community initiative to share gardening resources. Whether you have extra tools to donate
              or need supplies to start your garden, we're here to help.
            </p>
          </div>

          <div className="highlight-box mb-12">
            <h2 className="heading-3">Supporting the Environment with Kaitiakitaka</h2>
            <p>
              We're committed to environmental stewardship through sustainable gardening practices.
              Learn how you can make a positive impact on our ecosystem.
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