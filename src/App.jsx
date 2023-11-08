import { useRef } from "react";
import Content from "./components/Content";
import Cursos from "./components/Cursos";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Tecnologies from "./components/Tecnologies";
import "./style/App.css";

function App() {
  const sobre = useRef();
  const tecnologia = useRef();
  const proyectos = useRef();
  const curso = useRef();

  const scrollToTarget = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      document.body.classList.remove("overflow-y-hidden");
    }
  };
  return (
    <>
      <header>
        <Navbar
          scrollToTarget={scrollToTarget}
          curso={curso}
          tecnologia={tecnologia}
          proyectos={proyectos}
          sobre={sobre}
        />
      </header>

      <main>
        <Content sobre={sobre} />
        <Tecnologies tecnologia={tecnologia} />
        <Projects proyectos={proyectos} />
        <Cursos curso={curso} />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
