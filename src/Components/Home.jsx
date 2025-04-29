import Slider from "./Slider";
import CountUp from "react-countup";
import "../App.css";
import ServiceSlider from "./ServicesSlider";
import Gallery from "./Gallery";
import EmployeeAwards from "./EmployeeAwards";
import { useEffect } from "react";
import "animate.css/animate.css";
import Testominal from "./Testominal";
import ServiceComponent from "./ServiceComponent";

import WOW from "wow.js";
export default function Home() {
  useEffect(() => {
    const wow = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
    });
    wow.init();
  }, []);

  return (
    // slider start
    <div className=" " id="Home" >
      <Slider />
      {/* slider ended */}

      {/* service start */}
      <div className="service-slider">
        <ServiceSlider />
      </div>
      <div className="service-component lg:mb-20">
        <ServiceComponent />
      </div>
      {/* service ended*/}

      {/* counter start */}
      <section className="mt-28 lg:mb-40 hidden lg:block">
        <div
          className="py-5 w-dvw"
          style={{
            backgroundImage: 'url("/images/wave.svg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-24 my-10">
              <div
                className="wow animate__animated animate__zoomIn"
                data-wow-delay="0.3s"
              >
                <div className=" rounded-es-full flex items-center justify-center p-4 h-16">
                  <div className="bg-blue flex items-center justify-center  mb-2 w-20 h-20">
                    <i className="fa fa-users text-slateblue text-5xl"></i>
                  </div>
                  <div className="ps-4">
                    <h5 className="text-slateblue font-Poppins text-center font-bold text-3xl mb-0">
                      Happy Clients
                    </h5>
                    <CountUp
                      end={131321}
                      duration={2}
                      className="text-slateblue  font-bold text-2xl mt-2"
                    />
                  </div>
                </div>
              </div>
              <div
                className="wow animate__animated animate__zoomIn"
                data-wow-delay="0.3s"
              >
                <div className="bg-light rounded-e-xl flex items-center justify-center p-4 h-36">
                  <div className=" flex items-center justify-center rounded mb-2 w-16 h-16">
                    <i className="fa fa-check text-white text-5xl"></i>
                  </div>
                  <div className="ps-4">
                    <h5 className="text-white font-Poppins text-center font-bold text-3xl mb-0">
                      Projects Done
                    </h5>
                    <CountUp
                      end={181341}
                      duration={2}
                      className="mb-0 text-2xl text-white font-bold"
                    />
                  </div>
                </div>
              </div>
              <div
                className="wow animate__animated animate__zoomIn"
                data-wow-delay="0.3s"
              >
                <div className="rounded-s-full flex items-center justify-center ml-40 whitespace-nowrap h-20">
                  <div className="bg-blue flex items-center justify-center rounded mb-2 w-16 h-16">
                    <i className="fa fa-award text-slateblue text-5xl"></i>
                  </div>
                  <div className="ps-4">
                    <h5 className="text-slateblue font-Poppins text-center font-bold text-4xl mb-0">
                      Win Awards
                    </h5>
                    <CountUp
                      end={213451}
                      duration={2}
                      className="text-slateblue text-2xl font-bold mb-0"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* counter ended */}

      {/* gallery start  */}
      <Gallery />
      {/* gallery ended   */}

      {/*  Testimonials start  */}
      <div className="mt-28 lg:mt-52 mb-10">
        <h1
          className="font-Poppins text-center font-bold text-4xl  lg:text-5xl mb-2
           text-slateblue wow animate__animated animate__fadeInLeft"
          data-wow-delay="0.2s"
          data-wow-duration="1s"
        >
          Testimonials
        </h1>
        <div className="section-title-line  bg-slateblue items-center"></div>
        <div className=" lg:mx-28 mx-8 ">
          <div className="flex text-left ">
            <div
              className="section-title text-center position-relative  lg:mx-auto sm:max-w-xl 
              lg:max-w-4xl xl:max-w-4xl"
            >
              <h1 className="mb-0  font-bold font-Poppins  pt-4 text-slate-900  text-sm lg:text-base leading-relaxed">
                Transforming Experiences into Words: Elevate Your Brands Story
                with Our Dynamic Content Writing Services Where Innovative
                Narratives Come to Life, Powering Your Exceptional Online
                Presence.
              </h1>
            </div>
          </div>
        </div>
      </div>
      <Testominal />
      {/*  Testimonials start  */}

     

      {/* Employee Award  started*/}

      <div className="my-20">
        <div
          className="  font-Poppins text-center font-bold  text-4xl lg:text-5xl 
           text-white wow animate__animated animate__fadeInDown"
          data-wow-delay="0.2s"
          data-wow-duration="3s"
        >
          <h1 className="pt-16  text-slateblue">Employee Award</h1>
          <p className="mb-0   mx-10 lg:mx-0 font-bold font-Poppins pt-1 text-slate-900 text-base leading-relaxed">
            Celebrating the achievements and dedication of our team members
          </p>
          <div className="section-title-line  bg-white  items-center  "></div>
        </div>

        <EmployeeAwards />
      </div>

      {/* Employee Award ended */}
    </div>
  );
}
