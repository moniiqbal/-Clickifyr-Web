import { Link } from "react-router-dom";
import "../App.css";

const Gallery = () => {
  return (
    <>
      <div className="mx-10 my-20  " id="Gallery">
        <h1
          className="font-Poppins text-center font-bold text-5xl mb-2 text-slateblue wow animate__animated animate__fadeInLeft"
          data-wow-delay="0.2s"
          data-wow-duration="2s"
        >
          Gallery{" "}
        </h1>
        <div className="section-title-line bg-slateblue items-center "></div>

        <div className="flex text-left ">
          <div
            className="section-title text-center position-relative mx-auto"
            style={{ maxWidth: "700px" }}
          >
            <h1 className="mb-0 font-bold font-Poppins pt-4 text-slate-900 text-base leading-relaxed">
              {" "}
              Immerse in our story at Clickifyr Gallery, where pixel-perfect
              visuals narrate our expertise and experience in a snapshot
            </h1>
          </div>
        </div>

        <section
          className="mt-10 wow  animate__animated animate__fadeIn"
          data-wow-delay="0.2s"
          data-wow-duration="1s"
        >
          <div className=" lg:mx-16  md:mx-5 columns-1 gap-1 lg:gap-2 sm:cols-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-2">
            <figure className=" hidden md:block portfolio-item relative overflow-hidden  align-middle m-0   w-full pt-1">
              <Link>
                <img
                  src="https://img.freepik.com/free-photo/abstract-glowing-flame-drops-electric-illumination-generative-ai_188544-8092.jpg?t=st=1709269256~exp=1709272856~hmac=087715ec6e59d828171488a32afad33372dadd2799b615278f03696df6e075ec&w=360"
                  data-bp="images/portfolio/1.jpg"
                />
              </Link>
              <figcaption className=" lg:mx-0 -mx-9">
                <h4 className="absolute text-black font-Poppins font-bold -mt-3 lg:ml-2 ml-24    text-xl text-center">
                  Graphic Design
                </h4>
              </figcaption>
            </figure>

            <figure className=" portfolio-item relative overflow-hidden  align-middle m-0  w-full  pt-1 ">
              {" "}
              <Link>
                <img
                  src="/images/730e4e161829759.Y3JvcCwzMTYyLDI0NzQsMTcyLDA.jpg"
                />
              </Link>
              <figcaption>
                <h4 className="absolute text-black font-Poppins font-bold -mt-3 ml-2 text-xl text-center">
                  Web Design
                </h4>
              </figcaption>
            </figure>

        
            <figure className=" portfolio-item relative overflow-hidden  align-middle m-0  w-full  pt-1 ">
              <Link>
                <img
                  src="/images/96cc11189994885.Y3JvcCwxMDgwLDg0NCwwLDExNw.jpg"
                />
              </Link>
              <figcaption>
                <h4 className="absolute text-black font-Poppins font-bold -mt-3 ml-2 text-xl text-center">
                  Content writing{" "}
                </h4>
              </figcaption>
            </figure>


            <figure className="  portfolio-item relative overflow-hidden  align-middle m-0  w-full  pt-1 ">
              <Link>
                <img
                  src="/images/78fc1a161892789(1).63ccfabebae9f.jpg"
                />

              </Link>{" "}
              <figcaption>
                <h4 className="absolute text-black font-Poppins font-bold -mt-3 ml-2 text-xl text-center">
                  SocialMedia
                </h4>
              </figcaption>
            </figure>

            <figure className=" portfolio-item relative overflow-hidden  align-middle m-0  w-full lg:h-[18rem] ">
              <Link>
                <img
                  src="https://img.freepik.com/free-vector/realistic-circular-di
                  agram-infographic_23-2148980965.jpg?t=st=1714130565~exp=1714134165~hmac=1fd4030214346e9ca22b59b3b2971e3e8df51377ca39b72b3cf4e8d3427ea4f6&w=740"
                  data-bp="images/portfolio/1.jpg"
                />
              </Link>
              <figcaption>
                <h4 className="absolute text-black font-Poppins font-bold -mt-3 ml-2 text-xl text-center">
                  Graphic Design
                </h4>
              </figcaption>
            </figure>

            <figure className=" portfolio-item relative overflow-hidden  align-middle m-0  w-full  pt-1 ">
              <Link>
                <img
                  src="/images/9387c3161789125.Y3JvcCwyMzU0LDE4NDEsMCw1ODI.jpg"
                  data-bp="images/portfolio/1.jpg"
                />
              </Link>
              <figcaption>
                <h4 className="absolute text-black font-Poppins font-bold -mt-3 ml-2 text-xl text-center">
                  Graphic Design
                </h4>
              </figcaption>
            </figure>




            <figure className=" portfolio-item relative overflow-hidden 
             align-middle   pt-1 ">
              <Link>
                <img src="/images/1a84e0189612757.Y3JvcCwxMjI3LDk2MCwxODUsMA.jpeg" />
              </Link>
              <figcaption>
                <h4 className="absolute text-black font-Poppins font-bold  ml-2 text-xl text-center">
                  Logo Design
                </h4>
              </figcaption>
            </figure>

            <figure className=" portfolio-item relative overflow-hidden  align-middle m-0  w-full  pt-1">
              <Link>
                <img
                  src="/images/71a1dd177303121.Y3JvcCwzNjE1LDI4MjgsMTg3LDA.jpg"
                />
              </Link>{" "}
              <figcaption>
                <h4 className="absolute text-black font-Poppins font-bold -mt-3 ml-2 text-xl text-center">
                  Social Media
                </h4>
              </figcaption>
            </figure>
          

            <figure className=" portfolio-item relative overflow-hidden  align-middle m-0  w-full   pt-3">
              <Link>
                <img
                  src="https://img.freepik.com/free-photo/photo-editor-histogram-setting-concept_53876-120321.jpg?t=st=1714131647~exp=1714135247~hmac=a6a29dbe28a5b503b673a8409d6588dfa3f303f70d3a352e24f40404ff200510&w=900"
                />
              </Link>{" "}
              <figcaption>
                <h4 className="absolute text-black font-Poppins font-bold -mt-3 ml-2 text-xl text-center">
                  video Editing
                </h4>
              </figcaption>
            </figure>

            <figure className=" portfolio-item relative overflow-hidden  align-middle m-0  w-full pt-3 ">
              <Link>
                <img
                  src="https://img.freepik.com/free-psd/restaurant-landing-page-template_23-2148466849.jpg?t=st=1714132932~exp=1714136532~hmac=aafa0cd90b23c5dc49c52b0ed275d775e3ab0a5bd20855a46b5275ede4eda170&w=1380"
                />
              </Link>
              <figcaption>
                <h4 className="absolute text-black font-Poppins font-bold -mt-3  -ml-2 text-xl text-center">
                  Responsive Design
                </h4>
              </figcaption>
            </figure>
         
            <figure className=" portfolio-item relative overflow-hidden  align-middle m-0  w-full pt-3 ">
              <Link>
                <img
                  src="/images/d8f8ba169906461.Y3JvcCwyNjY0LDIwODQsNzMyLDA.jpg"
                />
              </Link>
              <figcaption>
                <h4 className="absolute text-black font-Poppins font-bold -mt-3  -ml-2 text-xl text-center">
                  Social media post
                </h4>
              </figcaption>
            </figure>
           
          </div>
        </section>
      </div>
    </>
  );
};

export default Gallery;
