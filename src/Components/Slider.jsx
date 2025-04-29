import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BubbleContainer = () => {
  const [showVision, setShowVision] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowVision((prevShowVision) => !prevShowVision);
    }, 8000); // Change statement every 5 seconds

    return () => clearTimeout(timeout);
  }, [showVision]);

  return (
    <div id="slider relative"
      className="min-h-screen flex justify-center items-center"
      style={{
        backgroundImage: `url('/images/Untitled design.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="box1 relative">
        <div
          className="   absolute lg:mt-28 
         mt-5   flex flex-col z-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div
              className="col-span-1 lg:ml-16 mx-5  text-justify wow 
              animate__animated animate__lightSpeedInLeft"
              data-wow-delay="0.2s"
              data-wow-duration="1s"
            >
              {showVision ? (
                <>
                  <h2
                    className="vision-heading 
                  font-Poppins font-bold lg:text-6xl  
                   text-4xl pb-1 text-white text-nowrap"
                  >
                    Vision Statement
                  </h2>
                  <p
                    className="vision-paragraph
             lg:text-[22px] text-base lg:pt-8 pt-2 lg:mb-3  text-white
                    lg:font-medium font-medium  lg:leading-10  font-Poppins"
                  >
                    At Clickifyr Marketing, we envision a world where businesses
                    thrive in the digital landscape through captivating design,
                    compelling content, and strategic marketing.{" "}
                  </p>
                  <p
                    className=" lg:pt-2 lg:text-xl  text-sm
                   text-balance  lg:mr-0 mr-52  text-white  
                   font-medium   lg:leading-8 font-Poppins pb-2"
                  >
                    {" "}
                    Our mission is to be the catalyst that transforms brands
                    into digital powerhouses, delivering innovative Graphic
                    Designing, Video Editing, Social Media Marketing, Content
                    Writing, Interior Design,UI/UX Design, and Marketing
                    services.
                  </p>
                  <div className="mt-8 text-lg font-Poppins font-bold">
                    <Link to="https://www.linkedin.com/in/clickifyr-marketing-agency-3199902a7/">
                      <button
                        className="btn-grad uppercase text-slateblue font-bold py-4 px-6 rounded-xl relative overflow-hidden"
                        style={{
                          backgroundColor: "slateblue",
                          backgroundImage:
                            "linear-gradient(to left, white  50%, #f6d365 50%)",
                          backgroundSize: "200% 100%",
                          backgroundPosition: "right bottom",
                          transition: "all 0.3s ease-out",
                        }}
                      >
                        <span className="relative z-10">Contact us</span>
                        <span
                          className="absolute left-0 w-full h-full bg-blue-200 
      transition-transform duration-300 origin-top transform scale-y-0"
                        ></span>
                      </button>
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <h2
                    className="vision-heading font-Poppins 
                  font-bold lg:text-6xl  text-4xl lg:pb-5 pb-2 text-white"
                  >
                    Mission Statement
                  </h2>
                  <p
                    className="vision-paragraph lg:pt-2 pt-1 lg:text-[22px] text-base
                    text-pretty  text-white  
                    font-medium   lg:leading-8 font-Poppins lg:pb-2"
                  >
                    Our Mission at Clickifyr Marketing is to empower businesses
                    with a comprehensive suite of services that amplify their
                    online presence and drive success. We are committed to
                    providing excellence in Graphic Designing, Video Editing,
                    Social Media
                  </p>
                  <p
                    className=" lg:pt-2 lg:text-xl text-base lg:mr-0 mr-56
                    text-pretty  text-white  
                    font-medium   lg:leading-8 font-Poppins lg:pb-2"
                  >
                    Marketing,Content Writing, UI/UX Design, and SEO Digital
                    Marketing. Through creativity ,we aim to elevate brand
                    experiences and achieve digital excellence for our clients.
                  </p>
                  <div className="lg:mt-8 mt-3 -ml-1 text-lg font-Poppins font-bold">
                    <Link to="https://www.linkedin.com/in/clickifyr-marketing-agency-3199902a7/">
                      <button
                        className="btn-grad uppercase text-slateblue font-bold py-4 px-6 rounded-xl relative overflow-hidden"
                        style={{
                          backgroundColor: "slateblue",
                          backgroundImage:
                            "linear-gradient(to left, white  50%, #f6d365 50%)",
                          backgroundSize: "200% 100%",
                          backgroundPosition: "right bottom",
                          transition: "all 0.3s ease-out",
                        }}
                      >
                        <span className="relative z-10">Contact us</span>
                        <span
                          className="absolute left-0 w-full h-full bg-blue-200 
      transition-transform duration-300 origin-top transform scale-y-0"
                        ></span>
                      </button>
                    </Link>
                  </div>
                </>
              )}
            </div>

            {/* Render this div only on medium screens and above */}
            <div
              className="  col-span-1 absolute   justify-end left-2/4  
             items-end opacity-90"
            >
              <Link to="/">
                <img
                  src="/images/WhatsApp Image 2024-04-30 at 8.14.28 PM.jpeg"
                  className="lg:w-[63%]  lg:mt-14 mt-[17rem]
                  lg:ml-56   w-48 ml-12 wow animate__animated 
                  animate__lightSpeedInRight"
                  data-wow-delay="0.2s"
                  data-wow-duration="1s"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BubbleContainer;
