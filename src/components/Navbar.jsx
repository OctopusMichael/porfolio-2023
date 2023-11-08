import React, { useState, useEffect, useRef } from "react";

import { MenuIcon, X } from "lucide-react";

const Navbar = ({ scrollToTarget, sobre, tecnologia, proyectos, curso }) => {
  const [menu, setMenu] = useState(false);

  const handleClick = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    if (menu) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [menu]);

  const menuList = [
    {
      id: 0,
      title: "Sobre mi",
      ref: sobre,
    },
    {
      id: 1,
      title: "Tecnologias",
      ref: tecnologia,
    },
    {
      id: 2,
      title: "Proyectos",
      ref: proyectos,
    },
    {
      id: 3,
      title: "Cursos",
      ref: curso,
    },
    /*   {
      id: 4,
      title: "Contacto",
    }, */
  ];
  return (
    <section>
      <nav className="container flex  justify-between items-center h-[20vh] ">
        <div>
          <a
            href="#"
            className="text-white font-bold text-[26px] md:text-[40px] "
          >
            Michael Diaz
          </a>
        </div>
        <div className="md:hidden">
          {menu ? (
            <X onClick={handleClick} />
          ) : (
            <MenuIcon onClick={handleClick} />
          )}
        </div>
        {menu && (
          <div className="absolute top-0 left-0 w-full h-full bg-black transition-all duration-75 flex flex-col  items-end container ">
            <div className="flex justify-end items-center  h-[14vh]   ">
              {menu ? (
                <X onClick={handleClick} />
              ) : (
                <MenuIcon onClick={handleClick} />
              )}
            </div>
            <ul className="flex flex-col gap-5 px-[50px]">
              {menuList.map((element) => (
                <li key={element.id}>
                  {" "}
                  <a
                    onClick={() => {
                      scrollToTarget(element.ref);
                      handleClick();
                    }}
                    href="#"
                    className="hover:text-blue-600"
                  >
                    {" "}
                    {element.title}{" "}
                  </a>{" "}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="  hidden md:block">
          <ul className="flex gap-5">
            {menuList.map((element) => (
              <li key={element.id}>
                {" "}
                <a
                  onClick={() => scrollToTarget(element.ref)}
                  href="#"
                  className="hover:text-blue-600"
                >
                  {" "}
                  {element.title}{" "}
                </a>{" "}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
