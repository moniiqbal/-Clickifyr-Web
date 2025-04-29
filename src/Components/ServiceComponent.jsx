import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import WOW from "wow.js";
import WebDevelopment from "./WebDevelopment";

const ServicesComponent = () => {
  useEffect(() => {
    const wow = new WOW({
      boxClass: "wow", // default
      animateClass: "animated", // default
      offset: 0, // default
    });
    wow.init();
  }, []);

  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollRef = useRef(null);
  const [activeService, setActiveService] = useState("graphicDesign");

  const services = {
    graphicDesign: {
      label: "Graphic Design",
      icon: "src/images/use grapgic design  icon with a slateblue and yellow color scheme (1).png",
      content: (
        <div className="">
          <h1
            className="font-Poppins text-center font-bold 
             pt-4 text-3xl uppercase text-slateblue 
       wow animate__animated animate__fadeInDownBig"
            data-wow-delay="0.2s"
            data-wow-duration="1s"
          >
            Graphic Designing
          </h1>
          <div className=" line justify-center  align-center  bg-slateblue text-center"></div>
          <div className=" px-2">
            <div className="grid grid-cols-1 ">
              <div className="grid grid-cols-1 md:grid-cols-2  mt-8 ">
                <div className="col-span-1 md:col-span-1">
                  <div className=" relative mb-1">
                    <h5
                      className="font-Poppins font-bold text-3xl
                       text-slateblue uppercase wow animate__animated animate__heartBeat 
                    animate__duration 0.5s animate__repeat-1 animate__slow 2s"
                    >
                     
                    </h5>
                  </div>
                  <p
                    className="font-bold pb-1 font-Poppins text-slate-900 text-xl leading-tight 
                  wow animate__animated animate__bounceInLeft animate__duration 0.5s animate__repeat-1 
                  animate__slow 2s"
                  >
                    The Best IT Solution With our Experience
                  </p>
                  <h1 className="text-left pt-2 pb-6 font-Poppins font-medium text-gray-600 wow animate__animated animate__bounce text-sm md:text-base lg:text-lg">
    Our Graphic Designing services breathe life into your brand,
    creating visual identities that inspire and connect with
    your audience on a profound level.
</h1>

                  <div className="grid grid-cols-2 gap-4 mx-2 mb-4">
                    <div
                      className="wow animate__animated 
                      animate__zoomIn list-disc leading-relaxed font-Poppins text-slateblue text-xl"
                      data-wow-delay="0.2s"
                      data-wow-duration="2s"
                    >
                      <h5 className="mb-6 text-sm font-Poppins space-x-1 font-medium">
                        <i className="fa-brands fa-pied-piper me-2  custom-icon-color"></i>
                        Logo Design
                      </h5>
                      <h5 className="  mb-4 text-sm font-Poppins font-medium whitespace-nowrap">
                        <i className="fa-solid fa-book me-1 custom-icon-color1"></i>
                        Book cover Design
                      </h5>
                    </div>
                    <div
                      className="wow animate__animated animate__zoomIn text-xl list-disc leading-relaxed font-Poppins text-slateblue "
                      data-wow-delay="0.2s"
                      data-wow-duration="2s"
                    >
                     <h5 className="mb-8  text-xs ml-2 font-Poppins font-medium whitespace-nowrap">
    <i className="fa-solid fa-book-open-reader me-1 custom-icon-color2"></i>
    Flyer & Branding Design
</h5>

                      <h5 className="mb-2  mt-4 text-xs ml-2 font-Poppins font-medium whitespace-nowrap">
                        <i className="fa-solid fa-mobile me-1 custom-icon-color3"></i>
                        Mobile & Web Layout
                      </h5>
                    </div>
                    <div
                      className="wow animate__animated animate__zoomIn list-disc leading-relaxed font-Poppins text-slateblue text-xl"
                      data-wow-delay="0.2s"
                      data-wow-duration="2s"
                    >
                      <h5 className="mb-4 text-xs font-Poppins font-medium whitespace-nowrap">
                        <i className="fa-regular fa-envelope me-1 custom-icon-color4"></i>
                        LetterStationary Design
                      </h5>
                    </div>
                    <div
                      className="wow animate__animated animate__zoomIn list-disc leading-relaxed font-Poppins text-slateblue text-xl"
                      data-wow-delay="0.2s"
                      data-wow-duration="2s"
                    >
                      <h5 className="mb-4 text-xs ml-3 font-Poppins font-medium whitespace-nowrap">
                        <i className="fa-solid fa-icons me-1  custom-icon-color5"></i>
                        Social Media Post Design
                      </h5>
                    </div>
                    <div
                      className="wow animate__animated animate__zoomIn list-disc leading-relaxed font-Poppins text-slateblue text-xl"
                      data-wow-delay="0.2s"
                      data-wow-duration="2s"
                    >
                      <h5 className="mb-4  text-sm  font-Poppins font-medium whitespace-nowrap ">
                        <i className="fa-solid fa-ticket me-1 custom-icon-color6"></i>
                        Banner Design
                      </h5>
                    </div>
                    <div
                      className="wow animate__animated animate__zoomIn list-disc leading-relaxed font-Poppins text-slateblue text-xl"
                      data-wow-delay="0.2s"
                      data-wow-duration="2s"
                    >
                      <h5 className="mb-4 text-sm ml-2 font-Poppins font-medium whitespace-nowrap">
                        <i className="fa-solid fa-shirt me-1 custom-icon-color7 "></i>
                        Cup & T-Shirt Design
                      </h5>
                    </div>
                  </div>
                </div>
                <div
                  className="col-span-1 md:col-span-1"
                  style={{ width: "100%", height: "100%" }}
                >
                  <div className="relative h-100">
                    <Link className="" style={{ animationDelay: "0.4s" }}>
                      <img
                        className="col-span-1 wow animate__zoomInDown animate__duration 0.5s animate__repeat-3  animate__slow	2s"
                        data-wow-delay="0.2s"
                        data-wow-duration="2s"
                        // Add this class for the hover animation
                        src="/images/2nd Image.png"
                        alt=""
                        style={{ width: "100%", height: "100%" }} // Set image width and height for responsiveness
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    videoEditing: {
      label: "Video Editing",
      icon: "src/images/video icon.png",
      content: (
        <div className="">
          <h1 className="font-Poppins text-center justify-center
           font-bold pb-2 text-3xl pt-5
           uppercase text-slateblue">
            Video Editing
          </h1>
          <div className="line bg-slateblue  items-center "></div>
          {/* Your video editing content */}
          <div className="grid grid-cols-1 mt-4 ">
            {/* ... (Video Editing content) */}
            <div className="  wow fadeInUp" data-wow-delay="0.1s">
              <div className="">
                <div
                  className=" px-8 sm:ml-20"
                  
                >
                  <h1 className=" text-center py-2 font-Poppins
                   font-medium   text-slate-900  text-sm md:text-base lg:text-lg">
                    Crafting captivating visual stories that leave a lasting
                    impression  your journey to meaningful engagement starts
                    here
                  </h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4  mx-8  ">
                  <div className="col-span-4 lg:col-span-1 ">
                    <div className="grid grid-cols-2 gap-5  mt-12 ">
                      <div
                        className="wow zoom-in mb-8 items-center justify-center"
                        data-wow-delay="0.2s"
                      >
                        <div className=" rounded-full flex items-center justify-center h-10 w-10">
                          <Link>
                            <img
                              src="/images/video.gif"
                              className="w-20"
                              style={{ backgroundColor: "slateblue" }}
                              alt=""
                            />
                          </Link>
                        </div>
                        <h4 className="font-Poppins font-bold  text-base text-slateblue uppercase">
                          Video graphic
                        </h4>
                        <p className="mb-0  font-Poppins  text-balance text-sm font-medium  text-gray-600">
                          Turn your ideas into eye-catching visuals with our
                          video graphic
                        </p>
                      </div>

                      <div
                        className=" wow zoom-in "
                        data-wow-delay="0.2s"
                      >
                        <div className=" rounded-full flex items-center justify-center  h-10 w-10">
                          <Link>
                            <img
                              src="/images/video-lecture.gif"
                              className=" "
                              alt=""
                            />
                          </Link>
                        </div>
                        <h4 className="font-Poppins font-bold  text-base text-slateblue uppercase">
                          Instagram Reel
                        </h4>
                        <p className="mb-0  font-Poppins text-balance text-sm font-medium text-gray-600">
                          Create Instagram magic with our special touch on Reel
                          editing.
                        </p>
                      </div>
                    </div>
                  </div>
               


                  <div className="col-span-4 lg:col-span-1 ">
                    <div className="grid grid-cols-2 gap-5  ">
                      <div
                        className="wow zoom-in "
                        data-wow-delay="0.2s"
                      >
                        <div className=" rounded-full flex   h-10 w-10">
                          <Link>
                            <img
                              src="/images/camera.gif"
                              className=" text-slate-900"
                              alt=""
                            />
                          </Link>
                        </div>
                        <h4 className="font-Poppins font-bold  text-base text-slateblue uppercase">
                          Ads Clip Editing
                        </h4>
                        <p className="mb-0 font-Poppins  text-balance text-sm font-medium  text-gray-600">
                          Make your message shine with our friendly and
                          impactful ad clip edits.
                        </p>
                      </div>
                      <div
                        className="  wow zoom-in  items-center justify-center mt-6"
                        data-wow-delay="0.2s"
                      >
                        <div
                          className="bg-lime-300 rounded-full flex items-center justify-center mb-3 h-1 w-10 
                        "
                        >
                          <Link>
                            <img
                              className=" text-slate-900 "
                              src="/images/database.gif"
                              alt=""
                            />
                          </Link>
                        </div>
                        <h4 className="font-Poppins font-bold  text-base text-slateblue uppercase">
                          Report Hosting
                        </h4>
                        <p className="mb-0 font-Poppins  text-balance text-sm font-medium  text-gray-600">
                          Share your data effortlessly with our secure report
                          hosting
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="lg:col-span-2 wow zoom-in"
                    data-wow-delay="0.9s"
                    style={{ minHeight: "350px" }}
                  >
                    <div>
                      <Link>
                        <img
                          src="/images/3image.png"
                          className=" mt-10 -ml-4 wow animate__animated animate__zoomInDown"
                          data-wow-delay="0.2s"
                          data-wow-duration="1s"
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>












                </div>

                <div className="grid lg:grid-cols-4  grid-cols-2  gap-3 ">
                  <div
                    className="wow zoom-in  flex flex-col mx-7 "
                    data-wow-delay="0.2s"
                  >
                    <div className="bg-lime-300 rounded-full flex h-12 w-12">
                      <Link>
                        <img
                          src="/images/ads.gif"
                          className=" text-slate-900"
                          alt=""
                        />
                      </Link>
                    </div>
                    <h4 className="font-Poppins font-bold pb-1 text-base text-slateblue ">
                      Animation Gifs
                    </h4>
                    <p className="  font-Poppins text-balance text-sm font-medium  text-gray-600">
                      Create Instagram magic with special touch on Reel editing.
                    </p>
                  </div>
                  <div
                    className=" wow zoom__in flex flex-col mx-4"
                    data-wow-delay="0.2s"
                  >
                    <div className="bg-lime-300 rounded-full flex   h-12 w-12">
                      <Link>
                        <img
                          src="/images/post.gif"
                          className=" text-slate-900"
                          alt=""
                        />
                      </Link>
                    </div>
                    <h4 className="font-Poppins font-bold  text-base text-slateblue ">
                      Animation Post Editing
                    </h4>
                    <p className=" font-Poppinsfont-Poppins  text-balance text-sm font-medium  text-gray-600">
                      Create Instagram magic with special touch on Reel editing.
                    </p>
                  </div>

                  <div
                    className="wow zoom-in  mx-6  flex flex-col mt-4 "
                    data-wow-delay="0.2s"
                  >
                    <div className="bg-lime-300 rounded-full flex   h-12 w-12">
                      <Link>
                        <img
                          src="/images/film-tape.gif"
                          className=" text-slate-900"
                          alt=""
                        />
                      </Link>
                    </div>
                    <h4 className="font-Poppins font-bold pb-1 text-sm text-slateblue ">
                      Documentary Movies
                    </h4>
                    <p className="   font-Poppins text-balance text-sm font-medium  text-gray-600">
                      Create Instagram magic with special touch on Reel editing.
                    </p>
                  </div>
                  <div
                    className="wow zoom-in  flex flex-col mx-4 mt-5 "
                    data-wow-delay="0.2s"
                  >
                    <div className="bg-lime-300 rounded-full flex  h-10 w-10">
                      <Link>
                        <img
                          src="/images/video-channel.gif"
                          className=" text-slate-900"
                          alt=""
                        />
                      </Link>
                    </div>
                    <h4 className="font-Poppins font-bold pb-1 text-base text-slateblue ">
                      YouTube Video Editing
                    </h4>
                    <p className="   font-Poppins text-balance text-sm font-medium  text-gray-600">
                      Create Instagram magic with special touch on Reel editing.
                    </p>
                  </div>
                </div>










              </div>
            </div>
          </div>
        </div>
      ),
    },
    webDevelopment: {
      label: "Website Design",
      icon: "fa-regular fa-object-group",
      content: <WebDevelopment />,
    },

    contentWriting: {
      label: "Content Writing",
      icon: "fa-regular fa-object-group",
      content: (
        <div className="">
          <h1
            className="font-Poppins text-center font-bold  text-3xl lg:text-5xl mb-2 text-slateblue 
           wow animate__animated animate__fadeInLeft"
            data-wow-delay="0.2s"
            data-wow-duration="1s"
          >
            Content Writing
          </h1>
          <div className="line   bg-slateblue  items-center  "></div>
          {/* ... Your social media management content goes here */}
          <section className=" text-slateblue">
            <div className=" lg:mx-28  ">
              <div className="flex text-left ">
              <div
  className="text-center position-relative "
  style={{
    maxWidth: "700px" // Apply maxWidth: "300px" when window width is 600px or smaller
  }}
>
                  <h1 className="mb-0  font-medium lg:font-bold font-Poppins mx-5 pt-4 text-slate-900 text-base leading-relaxed">
                    Transform Your Ideas into Reality with Our Dynamic Content
                    Writing Services – Crafting Innovative Narratives to Elevate
                    Your Online Presence.
                  </h1>
                </div>
              </div>
            </div>

            <div>
              <div className="grid grid-cols-2 lg:mx-28">
                {/* Blog 1 */}
                <div
                  className="col-span-1 wow animate__animated animate__rotateIn lg:pl-20  pt-20 zoom-in-effect "
                  data-wow-delay="0.2s"
                  data-wow-duration="1s"
                >
                  <div className="blog-card rounded-lg overflow-hidden shadow-lg back">
                    <img
                      className="blog-image lg:w-full lg:h-60 object-cover lg:p-3 lg:pt-5 p-2 object-center rounded-xl"
                      src="https://images.pexels.com/photos/2821823/pexels-photo-2821823.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Motivation Image"
                    />
                    <div className="blog-text px-4 pb-2 ">
                      <h1 className="font-Poppins font-bold text-white  text-lg lg:text-2xl leading-relaxed">
                        Motivation Speech
                      </h1>
                      <p className="lg:mb-4 lg:font-bold font-Poppins text-white text-base leading-tight lg:leading-relaxed">
                        Insert your motivation speech content here. This is a
                        place for uplifting and inspiring messages.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Blog 2 */}
                <div
                  className="col-span-1 wow animate__animated animate__rotateOut lg:p-10 pl-4 pt-12 zoom-in-effect"
                  data-wow-delay="0.2s"
                  data-wow-duration="1s"
                >
                  <div className="blog-card rounded-lg overflow-hidden shadow-lg back">
                    <img
                      className="blog-image  lg:w-full lg:h-60 object-cover lg:p-3 lg:pt-5 p-2 object-center rounded-xl"
                      src="https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="Motivation Image"
                    />
                    <div className="blog-text px-4 pb-2">
                      <h1 className="font-Poppins font-bold text-white text-nowrap text-lg lg:text-2xl leading-relaxed">
                        Real Estate Content
                      </h1>
                      <p className="lg:mb-4 lg:font-bold font-Poppins text-white text-base leading-tight lg:leading-relaxed">
                        Share informative content about real estate, market
                        trends, or anything related to the real estate industry.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Blog 3 */}
                <div
                  className="col-span-1 wow animate__animated animate__zoomOut lg:p-10 pl-2 pt-6 zoom-in-effect"
                  data-wow-delay="0.2s"
                  data-wow-duration="1s"
                >
                  <div className="blog-card rounded-lg overflow-hidden shadow-lg back">
                    <img
                      className="blog-image  lg:w-full lg:h-60 object-cover lg:p-3 lg:pt-5 p-2  object-center rounded-xl"
                      src="https://images.pexels.com/photos/19871866/pexels-photo-19871866/free-photo-of-close-up-of-a-colorful-boxes-and-a-3d-printing-station.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="Business Image"
                    />
                    <div className="blog-text px-4 pb-2">
                      <h1 className="font-Poppins font-bold text-white text-nowrap text-lg lg:text-2xl leading-relaxed">
                        Business Taglines
                      </h1>
                      <p className="lg:mb-4 lg:font-bold font-Poppins text-white text-base leading-tight lg:leading-relaxed">
                        Explore catchy and impactful business taglines that can
                        resonate with your audience.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Blog 4 */}
                <div
                  className="col-span-1 wow animate__animated animate__zoomIn  pl-6 mb-8 pt-3 zoom-in-effect"
                  data-wow-delay="0.2s"
                  data-wow-duration="1s"
                >
                  <div className="blog-card rounded-lg overflow-hidden shadow-lg back">
                    <img
                      className="blog-image  lg:w-full lg:h-60 object-cover lg:p-3 lg:pt-5 p-2  object-center rounded-xl"
                      src="https://img.freepik.com/free-vector/flat-islamic-new-year-landing-page-template_23-2149425333.jpg?size=626&ext=jpg&ga=GA1.1.195428180.1713303901&semt=ais"
                      alt="Business Image"
                    />
                    <div className="blog-text px-4 pb-2">
                      <h1 className="font-Poppins font-bold text-white text-nowrap text-lg lg:text-2xl leading-relaxed">
                        Islamic Content
                      </h1>
                      <p className="lg:mb-4 lg:font-bold font-Poppins text-white text-base leading-tight lg:leading-relaxed">
                        Share valuable Islamic content, quotes, or teachings in
                        this dedicated space.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      ),
    },
    seoServices: {
      label: "SEO Services",
      icon: "fa-regular fa-object-group", // Add the actual class for the SEO services icon if needed
      content: (
        <div className= "">
          <h1
            className="font-Poppins text-center font-bold lg:text-5xl  text-3xl   lg:mb-2 text-slateblue 
         wow animate__animated animate__fadeInLeft"
            data-wow-delay="0.2s"
            data-wow-duration="1s"
          >
            SEO Service
          </h1>
          <div className="  bg-slateblue  items-center  "></div>
          {/* ... Your social media management content goes here */}
          <section className=" text-slateblue">
            <div className=" lg:mx-28 ">
              <div className="flex text-left ">
                <div
                  className="line text-center position-relative   mx-auto"
                
                >
                  <h1 className="mb-0  font-bold font-Poppins pt-4 text-slate-900 text-base leading-relaxed">
                  
                    Boost Your Digital Presence with Our SEO Magic Lets Make
                    Your Business Shine Bright Online
                  </h1>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 mx-3 relative">
              <div className="col-span-1">
                
                <ul
                  className=" list-disc pt-4 leading-relaxed 
                 font-Poppins text-slateblue "
                >
                  {/* New SEO services */}
                  <div
                    className="grid grid-cols-2 gap-6 mb-4 wow animate__animated animate__rotateInDownLeft relative"
                    data-wow-delay="0.2s"
                    data-wow-duration="2s"
                  >
                    <div className="container relative heading rounded-full  py-2 ">
                      <i className="fa-brands fa-google text-3xl flex rounded-full justify-center googleicon"></i>

                      <h1 className="heading cursor-pointer whitespace-nowrap  rounded-s-5xl  font-Poppins text-sm font-black text-white py-2 px-1">
                        {" "}
                        GoogleAds 
                      </h1>
                      <p className="paragraph text-center rounded-lg hidden  left-0  p-x-2 py-1  text-white text-xs font-Poppins ">
                        Be Seen, Be Loved Supercharge Your Presence with Google
                        Ads that Turn Clicks into Smiles
                      </p>
                    </div>

                    <div className="container  relative heading rounded-full p-2 col-span-1 ">
                      <i className="fa-brands fa-facebook text-3xl flex rounded-full justify-center googleicon"></i>

                      <h1 className="heading cursor-pointer whitespace-nowrap  rounded-s-5xl font-Poppins text-sm font-black text-white p-2">
                        Facebook Ads Strategy
                      </h1>
                      <p className="paragraph absolute rounded-lg hidden  left-0  p-x-2 py-1  text-white text-xs font-Poppins ">
                        Share the Love, Share Success Elevate Your Business
                        Story with Facebook Ads that Spark Joy
                      </p>
                    </div>

                    <h1>
                      <i className=" me-3 "></i>
                    </h1>
                  </div>

                  <div
                    className="grid grid-cols-2 gap-6 mb-8 wow animate__animated animate__rotateInDownRight "
                    data-wow-delay="0.2s"
                    data-wow-duration="2s"
                  >
                    <div className="container relative heading rounded-full p-2 ">
                      <i className="fa-brands fa-linkedin me-3 col-span-1 text-3xl flex rounded-full justify-center googleicon"></i>

                      <h1 className="heading cursor-pointer   rounded-s-5xl font-Poppins text-xs font-black text-white py-2 px-1">
                        LinkedIn Ads 
                      </h1>
                      <p className="paragraph absolute rounded-lg hidden  left-0  p-x-2 py-1  text-white text-xs font-Poppins  ">
                        Connect and Prosper Grow Your B2B Story with LinkedIn
                        Ads Crafted for Success and Smiles
                      </p>
                    </div>

                    <div className="container relative heading rounded-full p-2 col-span-1 ">
                      <i className="fa-solid fa-search me-3 col-span-1 text-3xl flex rounded-full justify-center googleicon"></i>

                      <h1 className="heading cursor-pointer   rounded-s-5xl font-Poppins text-xs font-black text-white p-2">
                        Keyword Research
                      </h1>
                      <p className="paragraphabsolute rounded-lg hidden  left-0  p-x-2 py-1  text-white text-xs font-Poppins  ">
                        Discover Keywords that Click with Your Story Fueling
                        Your Online Adventure with Strategic Keyword Magic
                      </p>
                    </div>
                  </div>
                </ul>
              </div>

              <div className="col-span-1 relative">
                {/* Link to image */}
                <Link>
                  <img
                    className=" ml-8 mt-5 wow animate__animated animate__zoomInUp"
                    data-wow-delay="0.2s"
                    data-wow-duration="3s" // Add this class for the hover animation
                    src="/images/tree.png"
                    alt=""
                    style={{ width: "100%", height: "auto" }} // Adjust the width and minHeight as needed
                  />
                </Link>
              </div>
            </div>
          </section>
        </div>
      ),
    },
    socialMediaManagement: {
      label: "Social Media ",
      icon: "fa-regular fa-object-group",
      content: (
        <div className="">
          <h1
            className="font-Poppins text-center font-bold text-2xl mb-2 text-slateblue 
           wow animate__animated animate__fadeInLeft"
            data-wow-delay="0.2s"
            data-wow-duration="2s"
          >
            Social Media Management{" "}
          </h1>
          
          {/* ... Your social media management content goes here */}
          <section className=" text-slateblue">
            <div className=" mx-10 ">
              <div className="flex text-left ">
                <div
                  className="text-center position-relative  "
                  
                >
                 <h1 className="mb-0  font-medium font-Poppins pt-4 text-slate-900 text-base leading-relaxed">
                    {" "}
                    Our Social Media Marketing strategies harness the power of
                    social platforms to build relationships to achieve
                    measurable growth for your business.
                  </h1>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 mx-2">
              <div
                className="col-span-1 wow animate__animatedn animate__flipInY"
                data-wow-delay="0.2s"
                data-wow-duration="2s"
              >
              
                <ul className="pl-3 list-disc pt-6 leading-relaxed  space-y-3 font-Poppins text-slateblue font-medium text-lg text-nowrap">
                  <h1>
                    {" "}
                    <i className="fa-brands fa-square-instagram  me-3"></i>
                    Instagram Marketing{" "}
                  </h1>
                  <h1>
                    {" "}
                    <i className="fa-brands fa-facebook me-3"></i>Facebook
                    Marketing{" "}
                  </h1>

                  <h1>
                    {" "}
                    <i className="fa-brands fa-linkedin me-3"></i>Linkedln
                    Marketing{" "}
                  </h1>
                  <h1>
                    {" "}
                    <i className="fa-brands fa-pinterest-p me-3"></i>Pinterest
                    Marketing{" "}
                  </h1>
                  <h1>
                    {" "}
                    <i className="fa-solid fa-arrow-up-right-dots me-3"></i>
                    Increased Profitability{" "}
                  </h1>
                  <h1>
                    {" "}
                    <i className="fa-solid fa-check me-3"></i>Complete Brand
                    Control{" "}
                  </h1>
                  <h1>
                    {" "}
                    <i className="fa-solid fa-check me-3"></i>Online Brand
                    Management{" "}
                  </h1>
                </ul>
              </div>
              <div className="col-span-1 ">
                <Link>
                  <img
                    className=" wow animate__animated animate__zoomInUp   ml-10 mt-16"
                    data-wow-delay="0.2s"
                    data-wow-duration="3s" // Add this class for the hover animation
                    src="/images/4rth Image.png"
                    alt=""
                    style={{ width: "80%", height: "auto" }} // Adjust the width and minHeight as needed
                    // Set image width and height for responsiveness
                  />
                </Link>
              </div>
            </div>
          </section>
        </div>
      ),
    },
    // Add more services here
  };



  const handleScrollLeft = () => {
    const newScrollPosition = scrollPosition - 100;
    setScrollPosition(newScrollPosition);
    scrollRef.current.scrollBy({
      left: -100,
      behavior: 'smooth'
    });
  };
  
  const handleScrollRight = () => {
    const containerWidth = scrollRef.current.clientWidth;
    const contentWidth = scrollRef.current.scrollWidth;
    const maxScrollPosition = contentWidth - containerWidth;
    const newScrollPosition = scrollPosition + 100;
  
    // Ensure new scroll position doesn't exceed the maximum scrollable width
    const clampedScrollPosition = Math.min(newScrollPosition, maxScrollPosition);
  
    setScrollPosition(clampedScrollPosition);
    scrollRef.current.scrollBy({
      left: 100,
      behavior: 'smooth'
    });
  };
  
  const handleIconClick = (serviceKey) => {
    setActiveService(serviceKey);
  };

  return (
    <div className="flex flex-col items-center  overflow-hidden space-y-2 " id="1services">
      <h1 className="font-Poppins text-center font-bold text-5xl pt-14 pb-1 
       text-slateblue  wow animate__animated animate__bounce">
        Our Services
      </h1>
      <p className="text-center mx-10 pt-1 w-100 font-Poppins  text-base font-medium text-slate-900">
        At Clickifyr Marketing, we empower businesses in the digital realm with
        an extensive suite of services, meticulously crafted for maximum
        efficiency and impact. Our offerings redefine excellence, success in the
        ever-evolving landscape of the digital world
      </p>
      <div className="flex items-center -space-x-">
        <button
          className="hover:bg-blue-200 text-slateblue text-4xl font-bold px-1 py-4 rounded mt-8 "
          onClick={handleScrollLeft}  
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <div
          className="overflow-x-hidden"
          style={{ width: "290px", height: "200px" }}
          ref={scrollRef}
        >
          <div
            className="flex space-x-28 p-2"
            style={{ transform: `translateX(-${scrollPosition}px)` }}
          >
            {Object.keys(services).map((serviceKey) => (
              <div
                key={serviceKey}
                className={`w-32 h-32 flex items-center  ${
                  activeService === serviceKey ? "active" : ""
                }`}
                onClick={() => handleIconClick(serviceKey)}
              >
                <div className="hexagon-container wow animate__animated animate__zoomInLeft animate__repeat-1 animate__slow 2s">
                  <div className="hexagon "></div>
                  <div className="text-content sm:text-sm text-[10px] relative text-center pt-10 font-poppins text-white">
                    {services[serviceKey].label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          className="hover:bg-blue-200 text-slateblue text-4xl font-bold px-2 py-3 rounded mt-8 ml-6"
          onClick={handleScrollRight}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
      <div className={`service-content p-4 ${activeService ? "active" : "hidden"}`}>
        {activeService && <>{services[activeService].content}</>}
      </div>

      <style>
        {`
          @media only screen and (max-width: 600px) {
            .hexagon-container {
              width: 40px;
              height: 40px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ServicesComponent;
