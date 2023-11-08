import React, { useState } from "react";
import data from "../json/data.json";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";

const Projects = ({ proyectos }) => {
  const elementPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage) => {
    /* if (currentPage <= 1) return; */
    setCurrentPage(newPage);
  };
  const increment = () => {
    if (currentPage + 1 <= totalPages) {
      setCurrentPage((prevState) => prevState + 1);
    }
  };
  const decrement = () => {
    if (currentPage <= 1) return;
    setCurrentPage((prevState) => prevState - 1);
  };

  const startIndex = (currentPage - 1) * elementPerPage;
  const endIndex = startIndex + elementPerPage;
  const currentElements = data.slice(startIndex, endIndex);

  const totalPages = Math.ceil(data.length / elementPerPage);
  return (
    <section>
      <div
        ref={proyectos}
        className="container  flex flex-col justify-center items-center p-10 "
      >
        <h1 className="text-[26px] font-bold">Proyectos</h1>

        <div className=" h-auto md:h-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[20px]  p-[20px]">
          {currentElements.map((element) => {
            return (
              <div
                className=" my-[20px] p-6 h-[300px] flex flex-col   justify-between  items-center hover:bg-slate-800 cursor-pointer rounded-xl hover:scale-110 transition-all duration-200"
                key={element.id}
              >
                <div className="h-[50%]">
                  <img
                    className="h-auto"
                    src={element.img}
                    alt={element.name}
                  />
                </div>
                <div className="flex flex-col  h-[5%] ">
                  <h1 className=" font-bold text-slate-300 text-center hover:underline">
                    {element.name}
                  </h1>
                </div>
                <div className="flex gap-5  justify-center  h-[5%] ">
                  <a href={element.code} target="_blank" rel="noreferrer">
                    <Github className="text-slate-300 hover:text-blue-600" />
                  </a>
                  <a href={element.site} target="_blank" rel="noreferrer">
                    <ExternalLink className=" text-slate-300 hover:text-blue-600" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex gap-2 mt-5 items-center ">
          <button className="hover:text-blue-600" onClick={decrement}>
            <ChevronLeft />
          </button>
          {Array.from({ length: totalPages }).map((_, index) => (
            <div key={index + 1}>
              <button
                className={`${
                  currentPage === index + 1
                    ? "text-white bg-transparentPage w-[20px] h-[20px] flex justify-center items-center text-[14px] rounded-xl"
                    : "text-white"
                } hover:bg-transparentPage w-[20px] h-[20px] flex justify-center items-center text-[14px] rounded-xl `}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            </div>
          ))}
          <button className="hover:text-blue-600" onClick={increment}>
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
