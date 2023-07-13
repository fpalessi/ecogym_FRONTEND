import { motion } from "framer-motion";
import { SelectedPage } from "../types";
import RegisterGirlImg from "../assets/girlgym3.jpeg";

import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/auth";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Register = ({ setSelectedPage }: Props) => {
  const isAuth = useAuthStore((state) => state.isAuth);
  const navigate = useNavigate();
  const handleClick = () => navigate("/register");
  return (
    <section id="unirse" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Unirse)}
        className="md:mt-30 mt-16 items-center justify-between gap-20 md:mt-28 md:flex"
      >
        {/* Header */}
        <motion.div
          className="text-justify md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h1 className="basis-3/5 font-montserrat text-3xl font-bold">
            <span className="text-primary-100">ÚNETE AHORA</span>
          </h1>
          <p className="text my-4">
            EcoGym es una iniciativa que combina el cuidado del medio ambiente
            con la promoción de un estilo de vida saludable.
          </p>
          <ul className="list-disc pb-5">
            <li>
              Utilizamos materiales ecológicos en la construcción y el diseño
              del gimnasio{" "}
            </li>
            <li>
              Contamos con sistemas de iluminación, calefacción, y aire
              acondicionado eficientes desde el punto de vista energético
            </li>
            <li>
              Utilizamos fuentes de energía renovables, como la solar o la
              eólica
            </li>{" "}
            <li>
              Ofrecemos equipos de entrenamiento ecológicos fabricados con
              materiales sostenibles{" "}
            </li>
            <li>
              Utilizamos productos de limpieza naturales y reducir los residuos
              mediante el reciclaje y el compostaje
            </li>{" "}
            <li>
              {" "}
              Promovemos opciones de transporte sostenible, como incentivos para
              el transporte público
            </li>{" "}
            <li>
              Ofrecemos clases y programas que promuevan una vida sostenible y
              estilos de vida saludables
            </li>
          </ul>
          {isAuth ? null : (
            <div>
              <p className="font-semibold text-primary-100">
                Únete ahora tendrás acceso a la tienda de nuestros productos
                ecológicos al mejor precio.{" "}
              </p>
              <p className="font-semibold text-primary-100">
                Cultivados por y para nosotros.
              </p>
              <button
                className="mt-2 rounded-xl bg-primary-100 p-2 text-white hover:bg-red-500"
                onClick={handleClick}
              >
                Registrarme
              </button>
            </div>
          )}
        </motion.div>
        <motion.div
          className="relative mt-16 basis-2/5 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
            <img
              className="mx-auto hidden w-3/5 rounded-xl md:block"
              alt="register-girl-img"
              src={RegisterGirlImg}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Register;
