import { Parallax } from 'react-parallax';

const CoverPage = ({ img, coverHeading, coverSubHeading }) => {
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={img}
            bgImageAlt="the menu"
            strength={-200}
        >
            {/* <div style={{ backgroundImage: `url(${img})` }} className="h-[600px] bg-cover"> */}
            <div className="flex flex-col items-center h-[600px] justify-center p-40">
                {
                    coverHeading && coverSubHeading &&
                    <div className="bg-[#0606066f] py-20 px-40 text-white text-center space-y-2 w-full">
                        <h1 className="text-6xl uppercase">{coverHeading}</h1>
                        <p className="uppercase text-[16px]">{coverSubHeading}</p>
                    </div>
                }
                {/* </div> */}
            </div>
        </Parallax>

    );
};

export default CoverPage;