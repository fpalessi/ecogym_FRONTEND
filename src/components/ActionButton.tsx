import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "../types";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className="transparent rounded-md px-10 py-2 hover:bg-primary-100 hover:text-white"
      onClick={() => setSelectedPage(SelectedPage.Unirse)}
      href={`#${SelectedPage.Unirse}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
