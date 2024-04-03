// import images
import img1 from '../../assets/home/slide1.jpg'
import img2 from '../../assets/home/slide2.jpg'
import img3 from '../../assets/home/slide3.jpg'
import img4 from '../../assets/home/slide4.jpg'
import img5 from '../../assets/home/slide5.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import SectionTitle from '../Shared/SectionTitle/SectionTitle'
const Categoy = () => {
    return (
        <div className='mx-auto text-center pt-10 pb-20'>
            <div className='pb-10'>
            <SectionTitle heading={'Order online'} subHeading={'From 11.00 am to 10.00 pm'}></SectionTitle>
            </div>
            <Swiper
                slidesPerView={4}
                spaceBetween={20}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper pb-20"
            >
                <SwiperSlide className='relative'> 
                    <img src={img1} alt="" className='h-[400px]' />
                    <h1 className='uppercase text-center text-xl -mt-20 text-white font-semibold absolute left-24'>slald</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" />
                    <h1 className='uppercase text-center text-xl -mt-20 text-white font-semibold'>slald</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" />
                    <h1 className='uppercase text-center text-xl -mt-20 text-white font-semibold'>slald</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="" />
                    <h1 className='uppercase text-center text-xl -mt-20 text-white font-semibold'>slald</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt="" />
                    <h1 className='uppercase text-center text-xl -mt-20 text-white font-semibold'>slald</h1>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Categoy;