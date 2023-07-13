import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "../types";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const SpLink = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-primary-100" : ""}
        hover:scale-40 duration-400 transition hover:-translate-y-0.5 hover:text-primary-100
      `}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

export default SpLink;
