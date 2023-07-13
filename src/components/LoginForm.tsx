import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/auth";
import { doLogin, getProfile } from "../api/auth";
import { Spinner } from "react-bootstrap";

const LoginForm = () => {
  const setToken = useAuthStore((state) => state.setToken);
  const setProfile = useAuthStore((state) => state.setProfile);
  const [alert, setAlert] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const email = (event.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement)
      .value;

    if ([email, password].includes("")) {
      setAlert("Rellena los campos para continuar");
      return;
    }
    if (password.length < 6) {
      setAlert("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    try {
      setLoading(true);
      const resLogin = await doLogin(email, password);
      setToken(resLogin.data.token);
      const resProfile = await getProfile();
      console.log(resProfile);
      setProfile(resProfile.data.userProfile);
      setAlert("");
      navigate("/store");
    } catch (error) {
      setAlert("Email o Contraseña inválidos");
    } finally {
      setLoading(false);
    }
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 2 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <form className="w-full max-w-md" onSubmit={handleSubmit}>
        <div className="flex items-center border-b border-yellow-50 py-2">
          <input
            className="mr-3 w-full appearance-none border-none bg-transparent py-1 px-2 leading-tight text-gray-700 focus:outline-none"
            type="email"
            placeholder="Email"
          />
          <input
            className="mr-3 w-full appearance-none border-none bg-transparent py-1 px-2 leading-tight text-gray-700 focus:outline-none"
            type="password"
            placeholder="Password"
          />
          {loading ? (
            <Spinner />
          ) : (
            <button className="flex-shrink-0 rounded border-4 border-primary-100 bg-primary-100 py-1 px-2 text-sm text-white hover:border-yellow-50 hover:bg-yellow-50">
              Iniciar sesión
            </button>
          )}
        </div>{" "}
        {alert && (
          <div className="text-md my-2 rounded-md p-3 text-center font-semibold uppercase text-primary-100">
            {alert}
          </div>
        )}
      </form>
    </motion.div>
  );
};

export default LoginForm;
