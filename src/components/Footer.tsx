import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-screen bg-pasy-brown-text px-4 py-6 flex align-middle flex-col">
      <div className="flex flex-row w-fit self-center gap-2">
        <a href="https://www.facebook.com">
          <i>
            <span className="[&>svg]:h-7 [&>svg]:w-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 320 512"
              >
                <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
              </svg>
            </span>
          </i>
        </a>
        <a href="https://www.twitter.com">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com">
          <i>
            <span className="[&>svg]:h-7 [&>svg]:w-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 448 512"
              >
                <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
              </svg>
            </span>
          </i>
        </a>
      </div>
      <p className="text-center text-white font-rubik font-normal mt-2">
        &copy; {new Date().getFullYear()} PASY. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
