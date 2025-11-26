import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Importa los estilos de Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import type { RootObject, SectionsHomeAbout } from "../../interfaces/dbData";
import Counter from "../global/Counter";
import ButtonContent from "../buttons/Buttons";

interface HeroSection2Props {
  data: RootObject; // Asegúrate de que RootObject está bien definido y accesible.
  blockSection: SectionsHomeAbout[];
}

const HeroSection2: React.FC<HeroSection2Props> = ({ data, blockSection }) => {
  const yearExperiense = data.yearsExperience;
  const miles = data.milesCover;
  const city = data.dataGeneral.location[0].city;

  //como puedo poner lo anterior en un array ? que sea parameter y label

  const dataCounter = [
    {
      label: "Experience",
      subLabel: "Years of",
      parameter: yearExperiense,
    },
    {
      label: city,
      subLabel: "miles around",
      parameter: miles,
    },
    {
      label: "On Time",
      subLabel: "%",
      parameter: 100,
    },
  ];

  return (
    <div className="w-full flex md:flex-row flex-col">
      <div className="md:w-[50%] mx-auto w-[95%] flex items-center flex-wrap px-2 relative">
      <div className="absolute inset-0 w-full h-full rounded-xl">
          <video autoPlay loop muted className="w-full h-full object-cover rounded-xl">
            <source
              src="/assets/img/home.mp4"
            />
          </video>
          <div className="absolute inset-0 bg-black/40 rounded-xl"></div>{" "}
          {/* Black overlay with opacity */}
        </div>
        <div className="md:w-[80%] mx-auto w-full flex flex-col md:py-2 py-8 md:px-1 px-3 relative z-20">
          <div className="md:w-[80%] mx-auto w-full">
            <div className="border-l-4 border-primary pl-4 my-4">
              <span className="ext-[20px] font-bold text-white">
                {data.name}
              </span>
              <h1 className="md:text-[50px] text-[30px] font-bold text-white">
                {data.slogan[0]}
              </h1>
            </div>
            <p className="text-white mb-4">{data.valuesContent.mission}</p>
            <ButtonContent />
          </div>
        </div>
        <div className="md:w-[20%] mx-auto w-full  md:flex justify-end md:pb-1 pb-16">
          <div className="flex flex-col gap-4 md:mr-[-50px] md:relative z-20">
            {dataCounter.map((item, index) => {
              return (
                <Counter
                  key={index}
                  label={item.label}
                  number={Number(item.parameter)}
                  subLabel={item.subLabel}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="md:w-[50%] mx-auto w-[95%] relative">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
        >
          {blockSection[0].additionalImages.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Slide ${index}`}
                className="w-full md:min-h-[100vh] min-h-[40vh]   max-h-[40vh] md:max-h-[100vh] object-cover rounded-tl-2xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSection2;
