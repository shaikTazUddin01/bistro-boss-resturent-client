import { useEffect, useState } from "react";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
// react reting
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
const Testimonaals = () => {
    const [reviews, setRevies] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setRevies(data))
    }, [])
    // console.log(reviews)
    return (
        <div>
            <div>
                <SectionTitle heading={'testimonials'} subHeading={'What Our Clients Say'}></SectionTitle>
            </div>
            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper my-10">
                    {reviews?.map(review => {
                        return (
                            <SwiperSlide key={review?._id}>
                                <div className="text-center max-w-[800px] mx-auto space-y-2">
                                    <div  className="flex justify-center">
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={review?.rating}
                                        readOnly 
                                    />
                                    </div>
                                    <p>{review?.details}</p>
                                    <p className="text-3xl font-medium text-yellow-600">{review?.name}</p>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonaals;