import { Github, Linkedin } from "lucide-react";

const Content = ({sobre}) => {
  return (
    <section>
      <div className="container flex flex-col gap-10 md:gap-0 md:flex-row justify-center  items-center">
        <div className="md:w-2/4  flex justify-center items-center ">
          <img
            className="rounded-xl md:w-[50%] "
            src="/assets/avatar/michael-perfil.jpg"
            alt="michael-perfil"
          />
        </div>
        <div ref={sobre} className="  flex flex-col gap-5 justify-center    md:w-2/4">
          <h1 className="text-white text-[26px] font-bold">Sobre Mí</h1>
          <p>
            Ingeniero Mecanico interesado en el diseño y la programación web. Me
            considero una persona proactiva, creativa y siempre dispuesto a
            aprender nuevas habilidades.
          </p>
          <p>
            Llevo aproximadamente 1 año estudiando de forma autodidacta todo lo
            relacionado con el desarrollo Front-End. Me gustaria medir mis
            conocimientos y conseguir mi primer empleo como desarrollador Junior
            especialmente utilizando REACT.js.
          </p>
          <div className="flex gap-2 ">
            <a target="_blank" href="https://github.com/OctopusMichael" rel='noreferrer' >
              <Github className="text-slate-300  hover:text-blue-600" />
            </a>
            <a href="https://www.linkedin.com/in/michael-diaz-1944bb14b/" target="_blank" rel='noreferrer'  >
              <Linkedin className="text-slate-300 hover:text-blue-600" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
