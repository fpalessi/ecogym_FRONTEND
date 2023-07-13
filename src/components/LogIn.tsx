import { motion } from "framer-motion";
import { SelectedPage } from "../types";
import LoginGirlImage from "../assets/girlgym2.jpeg";
import LoginForm from "./LoginForm";
import { useAuthStore } from "../store/auth";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const LogIn = ({ setSelectedPage }: Props) => {
  const isAuth = useAuthStore((state) => state.isAuth);

  return (
    <section id="acceso" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Acceso)}>
        <div className="md:mt-30 mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          <img
            src={LoginGirlImage}
            alt="login-girl-image"
            className="mx-auto hidden w-1/5 rounded-xl md:block"
          />
          <div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <h1 className="basis-3/5 font-montserrat text-3xl font-bold">
                CIENTOS DE SOCIOS FELICES PONIÉNDOSE
                <span className="text-primary-100"> EN FORMA</span>
              </h1>{" "}
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Nuestro gimnasio ecológico es una gran iniciativa que puede
                contribuir a la protección del medio ambiente al tiempo que
                ofrece un estilo de vida saludable a los socios del gimnasio.
              </p>
              <p className="mb-5">
                EcoGym pretende reducir la huella de carbono de sus operaciones
                utilizando fuentes de energía renovables, reduciendo los
                residuos y promoviendo prácticas sostenibles.
              </p>
            </motion.div>
            <div>{isAuth ? null : <LoginForm />}</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default LogIn;
