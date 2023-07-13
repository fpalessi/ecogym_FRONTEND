import { ClassType, SelectedPage } from "../types";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import { motion } from "framer-motion";
import Class from "./Class";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const classes: Array<ClassType> = [
  {
    name: "Clases de levantamiento de mancuerna",
    image: image1,
  },
  {
    name: "Clases de Yoga",
    image: image2,
  },
  {
    name: "Clases para enderecer vientre",
    image: image3,
  },
  {
    name: "Clases para aumentar la química",
    image: image4,
  },
  {
    name: "Clases para ponerse en forma",
    image: image5,
  },
  {
    name: "Clases para ponerse al día",
    image: image6,
  },
];

const NuestrasClases = ({ setSelectedPage }: Props) => {
  return (
    <section id="nuestrasclases" className="w-full bg-gray-70 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.NuestrasClases)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <h1 className="basis-3/5 font-montserrat text-3xl font-bold">
              NO PIERDAS ESTA OPORTUNIDAD
            </h1>
            <p className="py-5">
              Ir al gimnasio regularmente tiene muchos beneficios para la salud
              física y mental. En primer lugar, el ejercicio físico ayuda a
              fortalecer los músculos y huesos, lo que puede mejorar la postura,
              la movilidad y la resistencia física. Además, el ejercicio también
              puede ayudar a reducir el riesgo de enfermedades crónicas como la
              diabetes, la hipertensión y la obesidad.{" "}
            </p>
            <p className="py-5">
              El ejercicio también puede mejorar la salud mental al reducir el
              estrés y la ansiedad, mejorando el estado de ánimo y promoviendo
              la liberación de endorfinas, que son las hormonas del bienestar.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default NuestrasClases;
