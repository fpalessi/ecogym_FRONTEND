const Footer = () => {
  return (
    <footer className="bg-gray-70 py-3">
      <div
        className="justify-content
      mx-auto w-5/6 gap-16
      md:flex"
      >
        <div className="mt-8 basis-1/2 md:mt-0">
          <h2 className="font-bold">ECOGYM</h2>
          <p className="my-4">
            Somos el primer gimnasio que funciona 24 horas con energía humana y
            solar.
          </p>
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-gps"
              width="30"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="rgb(50, 50, 50)"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
              <path d="M12 17l-1 -4l-4 -1l9 -4z" />
            </svg>
            <p className="my-4">C. del Desengaño, 21, 28004 Madrid</p>
          </div>
        </div>
        <div className="mt-8 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <div className="flex flex-col">
            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-instagram"
                width="30"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="rgb(50, 50, 50)"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                <path d="M16.5 7.5l0 .01" />
              </svg>

              <a
                className="my-4"
                href="https://www.instagram.com/ecogym/"
                target="_blank"
              >
                Instagram
              </a>
            </div>
            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-twitter"
                width="30"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="rgb(50, 50, 50)"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z" />
              </svg>
              <a
                className="my-2"
                href="https://www.twitter.com/ecogym/"
                target="_blank"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contáctanos</h4>
          <p className="my-4">
            Estamos abiertos 24h al día & 7 días a la semana.
          </p>
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-phone-check"
              width="30"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="rgb(50, 50, 50)"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
              <path d="M15 6l2 2l4 -4" />
            </svg>
            <p>9862 3102 9109</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
