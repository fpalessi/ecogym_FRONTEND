import useMediaQuery from "../hooks/useMediaQuery";
import { SelectedPage } from "../types";
import ActionButton from "./ActionButton";
import HomeGirlImage from "../assets/girlgym.jpeg";
import EcoGymTitle from "../assets/EcoGymTitle.png";
import RedBullLogo from "../assets/Red-Bull-Logo-5.png";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="home" className="gap-16 py-10 md:h-full md:pb-0">
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        <div className="z-10 mt-32 md:basis-3/5">
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div>
              <div>
                <img alt="home-page-text" src={EcoGymTitle} />
              </div>
            </div>

            <p className="mt-8 text-sm">
              El primer y único gimnasio del mundo que funciona las 24 horas del
              día gracias a una combinación de energía humana y solar. Cambia tu
              cuerpo, cambia nuestro planeta.
            </p>
            <p className="mt-8 text-sm text-primary-100">
              Únete ahora para tener acceso excluvo a la tienda de productos
              ecológicos cultivados por y para nosotros.
            </p>
          </motion.div>

          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Únete ya
            </ActionButton>

            <ActionButton setSelectedPage={setSelectedPage}>
              Quiero saber más
            </ActionButton>
          </motion.div>
        </div>

        <img
          alt="home-pageGraphic"
          src={HomeGirlImage}
          width={300}
          className="mx-auto hidden w-1/5 rounded-xl md:block"
        />
      </motion.div>

      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-gray-70 py-10">
          <div className="mx-auto w-5/6">
            <div className="flex  items-center justify-between gap-8">
              <img alt="fortune-sponsor" src={RedBullLogo} width={100} />

              <img alt="fortune-sponsor" src={RedBullLogo} width={100} />

              <img alt="fortune-sponsor" src={RedBullLogo} width={100} />

              <img alt="fortune-sponsor" src={RedBullLogo} width={100} />

              <img alt="fortune-sponsor" src={RedBullLogo} width={100} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
