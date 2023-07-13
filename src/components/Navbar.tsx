import { useState } from "react";
import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import useMediaQuery from "../hooks/useMediaQuery";
import { SelectedPage } from "../types";
import ActionButton from "./ActionButton";
import SpLink from "./SpLink";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/auth";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const isAuth = useAuthStore((state) => state.isAuth);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage ? "" : "bg-gray-70 drop-shadow";
  const navigate = useNavigate();
  const goToStore = () => navigate("/store");
  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* Left */}
            <span className="text-xl font-bold text-primary-100">ECOGYM</span>
            {/* Right */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <SpLink
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />

                  <SpLink
                    page="Acceso"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />

                  <SpLink
                    page="Nuestras clases"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />

                  <SpLink
                    page="Unirse"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>{" "}
                {isAuth ? (
                  <Button
                    className="border-gray-70 bg-primary-100 hover:border-gray-50 hover:bg-red-600"
                    onClick={goToStore}
                  >
                    Acceder a la tienda{" "}
                  </Button>
                ) : (
                  <div className={`${flexBetween} gap-8`}>
                    <ActionButton setSelectedPage={setSelectedPage}>
                      Convertirse en miembro
                    </ActionButton>
                  </div>
                )}
              </div>
            ) : (
              <button
                className="bg-primary-50 rounded-full p-2"
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobil menu */}
      {!isAboveMediumScreens && isOpen && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-gray-70 drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          {/* MENU ITEMS */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <SpLink
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <SpLink
              page="Nuestras clases"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
