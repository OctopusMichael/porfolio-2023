import data from "../json/technologies.json";

const Tecnologies = ({tecnologia}) => {
  return (
    <section>
      <div ref={tecnologia} className="container flex flex-col gap-5">
        <h1 className="text-[26px] text-center font-bold">Tecnologias</h1>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-10 bg-slate-800  rounded-xl p-10">
          {data.map((element) => (
            <div className="flex justify-center cursor-pointer items-center  hover:scale-110 transition-all duration-200 "  key={element.id}>
              <img className="w-[120px]" src={element.img} alt={element.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tecnologies;
