import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Mousewheel } from "swiper/modules";
import { v4 as uuid4 } from "uuid";
import { Card } from "./components/card";
import "swiper/css";
import "swiper/css/effect-fade";
function App() {
  const cards = [
    {
      classImg: "https://picsum.photos/300/200?random=1",
      linkSite: "https://www.globo.com",
      nome: "Globo",
      descricao:
        "É o site da emissora de TV onde passam novelas, jornais, jogos de futebol, e aos finais de semana passam tambem programas para toda a familia como Domingão.",
    },
    {
      classImg: "https://picsum.photos/300/200?random=2",
      linkSite: "https://www.globo.com",
      nome: "record",
      descricao:
        "É o site da emissora de TV onde passam novelas, jornais, jogos de futebol, e aos finais de semana passam tambem programas para toda a familia como Domingão.",
    },
    {
      classImg: "https://picsum.photos/300/200?random=3",
      linkSite: "https://www.globo.com",
      nome: "Youtube",
      descricao:
        "É o site da emissora de TV onde passam novelas, jornais, jogos de futebol, e aos finais de semana passam tambem programas para toda a familia como Domingão.",
    },
    {
      classImg: "https://picsum.photos/300/200?random=4",
      linkSite: "https://www.globo.com",
      nome: "Gov.com",
      descricao:
        "É o site da emissora de TV onde passam novelas, jornais, jogos de futebol, e aos finais de semana passam tambem programas para toda a familia como Domingão.",
    },
    {
      classImg: "https://picsum.photos/300/200?random=5",
      linkSite: "https://www.globo.com",
      nome: "Magazine",
      descricao:
        "É o site da emissora de TV onde passam novelas, jornais, jogos de futebol, e aos finais de semana passam tambem programas para toda a familia como Domingão.",
    },
    {
      classImg: "https://picsum.photos/300/200?random=6",
      linkSite: "https://www.globo.com",
      nome: "Riachuelo1",
      descricao:
        "É o site da emissora de TV onde passam novelas, jornais, jogos de futebol, e aos finais de semana passam tambem programas para toda a familia como Domingão.",
    },
    {
      classImg: "https://picsum.photos/300/200?random=67",
      linkSite: "https://www.globo.com",
      nome: "Riachuelo2",
      descricao:
        "É o site da emissora de TV onde passam novelas, jornais, jogos de futebol, e aos finais de semana passam tambem programas para toda a familia como Domingão.",
    },
    {
      classImg: "https://picsum.photos/300/200?random=68",
      linkSite: "https://www.globo.com",
      nome: "Riachuelo3",
      descricao:
        "É o site da emissora de TV onde passam novelas, jornais, jogos de futebol, e aos finais de semana passam tambem programas para toda a familia como Domingão.",
    },
    {
      classImg: "https://picsum.photos/300/200?random=63",
      linkSite: "https://www.globo.com",
      nome: "Riachuelo4",
      descricao:
        "É o site da emissora de TV onde passam novelas, jornais, jogos de futebol, e aos finais de semana passam tambem programas para toda a familia como Domingão.",
    },
    {
      classImg: "https://picsum.photos/300/200?random=60",
      linkSite: "https://www.globo.com",
      nome: "Riachuelo5",
      descricao:
        "É o site da emissora de TV onde passam novelas, jornais, jogos de futebol, e aos finais de semana passam tambem programas para toda a familia como Domingão.",
    },
    {
      classImg: "https://picsum.photos/300/200?random=51",
      linkSite: "https://www.globo.com",
      nome: "Riachuelo6",
      descricao:
        "É o site da emissora de TV onde passam novelas, jornais, jogos de futebol, e aos finais de semana passam tambem programas para toda a familia como Domingão.",
    },
    {
      classImg: "https://picsum.photos/300/200?random=52",
      linkSite: "https://www.globo.com",
      nome: "Riachuelo7",
      descricao:
        "É o site da emissora de TV onde passam novelas, jornais, jogos de futebol, e aos finais de semana passam tambem programas para toda a familia como Domingão.",
    },
    {
      classImg: "https://picsum.photos/300/200?random=53",
      linkSite: "https://www.globo.com",
      nome: "Riachuelo8",
      descricao:
        "É o site da emissora de TV onde passam novelas, jornais, jogos de futebol, e aos finais de semana passam tambem programas para toda a familia como Domingão.",
    },
    {
      classImg: "https://picsum.photos/300/200?random=54",
      linkSite: "https://www.globo.com",
      nome: "Riachuelo9",
      descricao:
        "É o site da emissora de TV onde passam novelas, jornais, jogos de futebol, e aos finais de semana passam tambem programas para toda a familia como Domingão.",
    },
    {
      classImg: "https://picsum.photos/300/200?random=55",
      linkSite: "https://www.globo.com",
      nome: "Riachuelo10",
      descricao:
        "É o site da emissora de TV onde passam novelas, jornais, jogos de futebol, e aos finais de semana passam tambem programas para toda a familia como Domingão.",
    },
  ];

  return (
    <>
      <section className="bg-zinc-400 w-full h-banner relative">
        <Swiper
          className="mySwiper text-white h-full"
          modules={[EffectFade, Autoplay]}
          effect={"fade"}
          slidesPerView={1}
          loop
          speed={3000}
          autoplay={{
            delay: 15000,
          }}
        >
          <SwiperSlide className="w-full h-full flex items-center justify-center">
            <img
              className="max-w-full max-h-full "
              src="https://picsum.photos/1559/480?random=1"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide
          // className="flex items-center justify-center"
          >
            <img
              className="max-w-full max-h-full "
              src="https://picsum.photos/1559/480?random=2"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide
          // className="flex items-center justify-center"
          >
            <img
              className="max-w-full max-h-full "
              src="https://picsum.photos/1559/480?random=3"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide
          // className="flex items-center justify-center"
          >
            <img
              className="max-w-full max-h-full "
              src="https://picsum.photos/1559/480?random=4"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide
          // className="flex items-center justify-center"
          >
            <img
              className="max-w-full max-h-full "
              src="https://picsum.photos/1559/480?random=5"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide
          // className="flex items-center justify-center"
          >
            <img
              className="max-w-full max-h-full "
              src="https://picsum.photos/1559/480?random=6"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide
          // className="flex items-center justify-center"
          >
            <img
              className="max-w-full max-h-full "
              src="https://picsum.photos/1559/480?random=7"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide
          // className="flex items-center justify-center"
          >
            <img
              className="max-w-full max-h-full "
              src="https://picsum.photos/1559/480?random=8"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide
          // className="flex items-center justify-center"
          >
            <img
              className="max-w-full max-h-full "
              src="https://picsum.photos/1559/480?random=9"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide
          // className="flex items-center justify-center"
          >
            <img
              className="max-w-full max-h-full "
              src="https://picsum.photos/1559/480?random=10"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
        <div className="absolute z-10 -bottom-36 w-full">
          <h3 className="text-4xl font-montSerrat font-extrabold ml-2  text-white">Mais Visitados</h3>
          <div className=" h-72 bg-carrosselBg   text-white p-2">
            <Swiper
              className="h-full"
              modules={[Autoplay, Mousewheel]}
              slidesPerView={6}
              mousewheel
              centeredSlides
              loop
              autoplay={{
                delay: 15000,
              }}
            >
              {cards.map((card) => (
                <SwiperSlide key={uuid4()}>
                  <Card card={card} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
