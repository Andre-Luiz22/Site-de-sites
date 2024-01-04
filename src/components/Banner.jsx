import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { BolaMetodos } from "../classes/ClassBola";

export const Banner = () => {
  const bolaRoxa = useRef(null);
  const bolaRoxa2 = useRef(null);
  const bolaRoxa3 = useRef(null);
  const bolaPreta1 = useRef(null);
  const bolaPreta2 = useRef(null);
  const bolaPreta3 = useRef(null);
  const bolaPreta4 = useRef(null);
  const bolaVerde1 = useRef(null);
  const bolaVerde2 = useRef(null);
  const divContainer = useRef(null);

  useEffect(() => {
    const bolaRoxaObj = bolaRoxa.current;
    const bolaRoxa2Obj = bolaRoxa2.current;
    const bolaRoxa3Obj = bolaRoxa3.current;
    const bolaPreta1Obj = bolaPreta1.current;
    const bolaPreta2Obj = bolaPreta2.current;
    const bolaPreta3Obj = bolaPreta3.current;
    const bolaPreta4Obj = bolaPreta4.current;
    const bolaVerde1Obj = bolaVerde1.current;
    const bolaVerde2Obj = bolaVerde2.current;
    const divContainerObj = divContainer.current.getBoundingClientRect();


    const BolaRoxaClass = new BolaMetodos(bolaRoxaObj, divContainerObj);
    const BolaRoxa2Class = new BolaMetodos(bolaRoxa2Obj, divContainerObj);
    const BolaRoxa3Class = new BolaMetodos(bolaRoxa3Obj, divContainerObj);
    const BolaPreta1Class = new BolaMetodos(bolaPreta1Obj, divContainerObj);
    const BolaPreta2Class = new BolaMetodos(bolaPreta2Obj, divContainerObj);
    const BolaPreta3Class = new BolaMetodos(bolaPreta3Obj, divContainerObj);
    const BolaPreta4Class = new BolaMetodos(bolaPreta4Obj, divContainerObj);
    const BolaVerde1Class = new BolaMetodos(bolaVerde1Obj, divContainerObj);
    const BolaVerde2Class = new BolaMetodos(bolaVerde2Obj, divContainerObj);

    gsap.to(bolaRoxaObj, {
      onStart: BolaRoxaClass.goTo(),
    });
    gsap.to(bolaPreta1Obj, {
      onStart: BolaPreta1Class.goTo(),
    });
    gsap.to(bolaPreta2Obj, {
      onStart: BolaPreta2Class.goTo(),
    });
    gsap.to(bolaPreta3Obj, {
      onStart: BolaPreta3Class.goTo(),
    });
    gsap.to(bolaPreta4Obj, {
      onStart: BolaPreta4Class.goTo(),
    });
    gsap.to(bolaVerde1Obj, {
      onStart: BolaVerde1Class.goTo(),
    });
    gsap.to(bolaRoxa2Obj, {
      onStart: BolaRoxa2Class.frente(),
    });
    gsap.to(bolaVerde2Obj, {
      onStart: BolaVerde2Class.goTo(),
    });
    gsap.to(bolaRoxa3Obj, {
      onStart: BolaRoxa3Class.goTo(),
    });
  }, []);

  return (
    <div className="w-full h-bannerHeight overflow-hidden rounded-3xl flex items-center relative mb-8">
      <div className="w-2/5 flex flex-col gap-10 ml-10 z-10">
        <h1 className="font-black text-8xl bg-clip-text bg-gradTextContainerBolinhas text-transparent text-nowrap">
          Site de Sites
        </h1>
        <p className="text-xl text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ab
          quis dolores accusamus maxime debitis, unde numquam quod omnis. Porro
          excepturi distinctio iste neque et minima id itaque ipsa voluptate?
        </p>
      </div>
      <div
        ref={divContainer}
        className="absolute  bg-gradContainerBolinhas blur-3xl -inset-8"
      >
        <div
          ref={bolaRoxa}
          className="rounded-full h-60 w-60 bg-purple-400 blur-2xl top-0  left-0 absolute"
        ></div>
        <div
          ref={bolaPreta1}
          className=" rounded-full h-80 w-80 bg-black opacity-50 blur-2xl absolute top-0 left-0"
        ></div>
        <div
          ref={bolaPreta2}
          className=" rounded-full h-96 w-96 bg-black opacity-30 blur-xl absolute top-0 left-0"
        ></div>
        <div
          ref={bolaPreta3}
          className="rounded-full h-10 w-10 bg-black absolute top-0 left-0 blur-2xl "
        ></div>
        <div
          ref={bolaVerde1}
          className="rounded-full h-40 w-40 bg-bolinhas-verde blur-3xl"
        ></div>
        <div
          ref={bolaRoxa2}
          className="rounded-full h-4/5 w-2/5 top-5 absolute origin-center blur-2xl bg-bolinhas-roxo -z-10"
        ></div>

        <div
          ref={bolaVerde2}
          className="rounded-full h-96 w-96 blur-3xl bg-bolinhas-verde absolute top-0 left-0"
        ></div>

        <div
          ref={bolaRoxa3}
          className="rounded-full h-96 w-96 blur-3xl bg-bolinhas-roxo2 absolute top-0 left-0"
        ></div>
        <div
          ref={bolaPreta4}
          className=" rounded-full h-96 w-96 bg-black opacity-30 blur absolute top-0 left-0"
        ></div>
      </div>
    </div>
  );
};
