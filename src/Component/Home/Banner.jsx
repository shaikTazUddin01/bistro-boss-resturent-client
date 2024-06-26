import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// images
import img01 from '../../assets/home/01.jpg'
import img02 from '../../assets/home/02.jpg'
import img03 from '../../assets/home/03.png'
import img04 from '../../assets/home/04.jpg'
import img05 from '../../assets/home/05.png'
import img06 from '../../assets/home/06.png'
// css
import './Banner.css'
const Banner = () => {
    return (
        <div>
            <Carousel>
                <div>
                    <img src={img01} />
                </div>
                <div>
                    <img src={img02} />
                </div>
                <div>
                    <img src={img03} />
                </div>
                <div>
                    <img src={img04} />
                </div>
                <div>
                    <img src={img05} />
                </div>
                <div>
                    <img src={img06} />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;