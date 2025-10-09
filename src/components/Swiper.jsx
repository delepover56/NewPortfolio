import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Projects from "./MyProjects";
import "swiper/css";
import "swiper/css/pagination";
import "./swiperCustom.css";

const Slider = () => {
    return (
        <Swiper
            spaceBetween={20}
            slidesPerView={1.2}
            grabCursor={true}
            modules={[Autoplay, Pagination]}
            pagination={true}
            loop={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            }}
            speed={1600}
            breakpoints={{
                768: { slidesPerView: 2.5 },
                1024: { slidesPerView: 2 },
                1280: { slidesPerView: 2.3 },
                1536: { slidesPerView: 3.5 },
                2560: { slidesPerView: 4.5 },
            }}
            className="select-none pb-10"
        >
            {Projects.map((project, index) => (
                <SwiperSlide key={index}>
                    <div className="p-[15px] flex justify-between items-start flex-col xl:w-[300px] h-[210px] sm:h-[250px] sm:w-[250px] rounded-2xl bg-[#00ff5e20] backdrop-blur-md border border-[#00ff5e40] gap-3 shadow-mD hover:shadow-xl transition-shadow duration-300">
                        <a
                            href={project.link}
                            target="_blank"
                            className="w-full h-full overflow-hidden rounded-2xl"
                            rel="noopener noreferrer"
                        >
                            <div className="hidden">
                                https://accounts.google.com/o/oauth2/v2/auth?prompt=select_account&state=E05BU60OCyXfNeLiAWYTti8AvMUizMQ5&redirect_uri=https%3A%2F%2Fsdk-os.mpsdk.easebar.com%2Fapi%2Fusers%2Flogin%2Fv2%2Fgoogle%2Fcallback&response_type=code&client_id=529895160150-2tlh8ntrjne89ecl4aqt2mbgkpfal7sg.apps.googleusercontent.com&scope=profile
                            </div>
                            <img
                                src={project.image}
                                alt={project.alt}
                                loading="lazy"
                                className="w-full h-full object-cover rounded-xl hover:scale-[1.1] transition-all duration-300"
                                draggable={false}
                            />
                        </a>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#00ff5e] font-semibold hover:text-white transition-all duration-300 poppins-semibold text-md md:text-lg"
                        >
                            {project.name}
                        </a>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Slider;
