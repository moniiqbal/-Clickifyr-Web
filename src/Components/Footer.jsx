import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className=" relative overflow-hidden" id="Footer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute min-h-full "
      >
        <path
          fill="#5000ca"
          fillOpacity="0.8"
          d="M0,96L48,117.3C96,139,192,181,288,186.7C384,192,480,160,576,128C672,96,768,64,864,58.7C960,53,1056,75,1152,85.3C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div className="lg:mx-auto w-full max-w-screen-xl p-4 
        lg:py-8 relative z-10">
        <div className="md:flex md:justify-between">
          <div className="lg:mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <img
                src="/images/clickifyr.png"
                className="lg:ml-1 lg:h-28 h-32 lg:mt-0  mt-16 ml-14"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-4  sm:grid-cols-3 mx-8 lg:mx-0">
            <div>
              <h2
                className="lg:mb-5  lg:mt-24  mt-40 text-xl font-bold
               font-Poppins text-white"
              >
                Resources
              </h2>
              <ul className="text-base font-semibold  font-Poppins text-white">
                <li className="mb-2 pt-3">
                  <Link to="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:underline">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2
                className="mb-5  mt-40 lg:mt-24 text-xl  font-bold 
              font-Poppins text-white "
              >
                Follow us
              </h2>
              <ul className="text-white font-semibold  text-base font-Poppins">
                <li className=" ">
                  <Link
                    to="https://whatsapp.com/channel/0029Va8rO3jJUM2SulAEnL2t"
                    className=""
                  >
                    <i className="fa-brands fa-whatsapp me-4 text-2xl  hover:text-amber-400"></i>
                    <Link to="https://fb.me/1ODvfDUK3">
                      <i className="fa-brands fa-facebook me-4 text-xl hover:text-amber-400"></i>
                    </Link>

                    <Link to="https://www.linkedin.com/in/clickifyr-marketing-agency-3199902a7/">
                      <i className="fa-brands fa-linkedin me-4 text-xl hover:text-amber-400"></i>
                    </Link>
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.instagram.com/clickifyr.marketing?igsh=MTd1YjI3Znoxdjdmdw=="
                    className=""
                  >
                    <i className="fa-brands fa-instagram me-4 text-2xl hover:text-amber-400"></i>

                    <Link to="https://www.tiktok.com/@clickifyrmarketing?_t=8kkVrE1DIry&_r=1">
                      <i className="fa-brands fa-tiktok me-4 mt-3 text-xl hover:text-amber-400"></i>
                    </Link>
                  </Link>
                </li>
                {/* <li>
                  <Link to="https://www.instagram.com/clickifyr.marketing?igsh=MW9jOWx4ZXkyeThlaQ==">
                  <i className="fa-brands fa-instagram me-4 text-2xl"></i>
                  </Link>
                </li> */}
              </ul>
            </div>
            <div>
              <h2
                className="mb-5 lg:mt-24  text-xl
               font-bold font-Poppins text-white"
              >
                Legal
              </h2>
              <ul className=" text-base font-semibold  font-Poppins text-white">
                <li className="mb-2">
                  <Link to="#" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="sm:flex sm:items-center sm:justify-between"></div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-white sm:text-center font-Poppins">
            © 2024 <a href="/" className="hover:underline">MuneebaIqbal</a>. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
