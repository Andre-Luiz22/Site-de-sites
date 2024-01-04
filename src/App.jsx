import { Banner } from "./components/Banner";
import { Carrossel } from "./components/Carrossel";

function App() {
  const cardsTeste = [
    {
      title: "test",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ab quis",
      link: "https://globo.com",
      img: "https://picsum.photos/200/150",
      alt: "imagem do card",
    },
    {
      title: "test",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ab quis",
      link: "https://globo.com",
      img: "https://picsum.photos/200/150",
      alt: "imagem do card",
    },
    {
      title: "test",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ab quis",
      link: "https://globo.com",
      img: "https://picsum.photos/200/150",
      alt: "imagem do card",
    },
    {
      title: "test",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ab quis",
      link: "https://globo.com",
      img: "https://picsum.photos/200/150",
      alt: "imagem do card",
    },
    {
      title: "test",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ab quis",
      link: "https://globo.com",
      img: "https://picsum.photos/200/150",
      alt: "imagem do card",
    },
    {
      title: "test",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ab quis",
      link: "https://globo.com",
      img: "https://picsum.photos/200/150",
      alt: "imagem do card",
    },
    {
      title: "test",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ab quis",
      link: "https://globo.com",
      img: "https://picsum.photos/200/150",
      alt: "imagem do card",
    },
    {
      title: "test",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ab quis",
      link: "https://globo.com",
      img: "https://picsum.photos/200/150",
      alt: "imagem do card",
    },
    {
      title: "test",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ab quis",
      link: "https://globo.com",
      img: "https://picsum.photos/200/150",
      alt: "imagem do card",
    },
    {
      title: "test",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ab quis",
      link: "https://globo.com",
      img: "https://picsum.photos/200/150",
      alt: "imagem do card",
    },
    {
      title: "test",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ab quis",
      link: "https://globo.com",
      img: "https://picsum.photos/200/150",
      alt: "imagem do card",
    },
    {
      title: "test",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ab quis",
      link: "https://globo.com",
      img: "https://picsum.photos/200/150",
      alt: "imagem do card",
    },
    {
      title: "test",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ab quis",
      link: "https://globo.com",
      img: "https://picsum.photos/200/150",
      alt: "imagem do card",
    },
    {
      title: "test",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ab quis",
      link: "https://globo.com",
      img: "https://picsum.photos/200/150",
      alt: "imagem do card",
    },
    {
      title: "test",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ab quis",
      link: "https://globo.com",
      img: "https://picsum.photos/200/150",
      alt: "imagem do card",
    },
    {
      title: "test",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ab quis",
      link: "https://globo.com",
      img: "https://picsum.photos/200/150",
      alt: "imagem do card",
    },
    {
      title: "test",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ab quis",
      link: "https://globo.com",
      img: "https://picsum.photos/200/150",
      alt: "imagem do card",
    },
    {
      title: "test",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ab quis",
      link: "https://globo.com",
      img: "https://picsum.photos/200/150",
      alt: "imagem do card",
    },
    {
      title: "test",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ab quis",
      link: "https://globo.com",
      img: "https://picsum.photos/200/150",
      alt: "imagem do card",
    },
  ];
  return (
    <main className="bg-bgPage font-custom px-7 pb-1 relative">
      <header className="  flex w-full h-12 justify-between items-center mb-5">
        <h2 className="text-pinkLogo bg-gradLogo font-bold px-5 py-1 rounded-md">
          SDS
        </h2>
        <ul className="flex relative text-white  gap-10 w-1/5 justify-end pr-7 after:block after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-full after:bg-gradLogo after:h-1">
          <li>Lista</li>
          <li>Lista</li>
          <li>Lista</li>
        </ul>
      </header>
      <Banner />
      <Carrossel objConfig={{ title: "Mais acessados", emoji: ":)" }} cards={cardsTeste} />
      <Carrossel objConfig={{ title: "BackGround Sites", emoji: ":)" }} cards={cardsTeste} />
      <Carrossel objConfig={{ title: "BackGround Sites", emoji: ":)" }} cards={cardsTeste} />
      <Carrossel objConfig={{ title: "BackGround Sites", emoji: ":)" }} cards={cardsTeste} />
      <Carrossel objConfig={{ title: "BackGround Sites", emoji: ":)" }} cards={cardsTeste} />
      <Carrossel objConfig={{ title: "BackGround Sites", emoji: ":)" }} cards={cardsTeste} />
      <Carrossel objConfig={{ title: "BackGround Sites", emoji: ":)" }} cards={cardsTeste} />
    </main>
  );
}

export default App;
