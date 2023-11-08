import cursos from "../json/certificados.json";

const Cursos = ({ curso }) => {
  return (
    <section>
      <div ref={curso} className="container flex flex-col gap-5">
        <h1 className="text-[26px] font-bold  text-center"> Cursos </h1>
        <div className="grid md:grid-cols-2 gap-10 p-10">
          {cursos.map((element) => (
            <div key={element.id}>
              <img
                className="md:w-[600px] md:h-[400px] hover:scale-110 transition-all duration-200 "
                src={element.img}
                alt={element.name}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cursos;
