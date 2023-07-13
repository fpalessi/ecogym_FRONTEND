import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "../types";
import { motion } from "framer-motion";

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const Benefit = ({ icon, title, description, setSelectedPage }: Props) => {
  return (
    <motion.div
      variants={childVariant}
      className="border-1 mt-5 rounded-md border-2 border-gray-70 px-5 py-16 text-center"
    >
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-70 bg-gray-70 p-4">
          {icon}
        </div>
      </div>
      <h4 className="font-bold">{title}</h4>
      <p className="my-3"> {description}</p>
      <AnchorLink
        className="text-sm font-bold text-primary-100 underline"
        onClick={() => setSelectedPage(SelectedPage.Unirse)}
        href={`#${SelectedPage.Unirse}`}
      >
        <p>Learn More</p>
      </AnchorLink>
    </motion.div>
  );
};

export default Benefit;
