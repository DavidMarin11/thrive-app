// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import '../css/headerStyles.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

import { Doctor } from '../../mocks/doctors';

export function Header () {
  
  return (
    <section className="header">
      <Swiper
        slidesPerView={3}
        spaceBetween={40}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {
          Doctor.map((doctor) => {
            const {id, name, lastname, specialty, img, gender } = doctor
            return (
            <SwiperSlide >
              <section key={id} className="info">
                <h3>{gender === 'female' ? 'Dra' : 'Dr'}</h3>
                <h1>{name}</h1>
                <h1>{lastname}</h1>
                <p>{specialty}</p>
                <img className='img-doctor' src={img} alt={doctor.name}/>
              </section>
            </SwiperSlide>)
          })
        }
      </Swiper>
    </section>
  );
}