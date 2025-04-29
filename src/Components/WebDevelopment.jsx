
import {Link} from 'react-router-dom'
import '../App.css';

const WebDevelopment = () => {


    
   
    return (
      <section className='web development'>
        <div className="lg:mx-10 mx-8 " >
          <h1 className="font-Poppins text-center font-bold md:text-3xl text-2xl lg:text-5xl mb-2 text-slateblue">
            Web Development Services
          </h1>
          <div className="section-title-line bg-slateblue items-center"></div>
    <div className="section-title text-center position-relative   mx-auto" style={{ maxWidth: '750px' }}>
    <h1 className="mb-0  lg:font-bold  font-medium font-Poppins text-slate-900 text-base leading-relaxed">
     Our Web Development Services are designed to elevate your online presence, providing innovative solutions 
      to meet the dynamic needs of the digital landscape.
    </h1>
  </div>
          <section className="text-slateblue">
            <div className="grid grid-cols-2 lg:mx-28 mx-2">
              <div className="col-span-1 wow animate__animated animate__bounceInLeft" data-wow-delay="0.2s" data-wow-duration="2s">
                <h1 className="pt-20 font-Poppins text-left font-bold lg:text-4xl text-3xl text-nowrap text-slateblue">
                  Key Features
                </h1>
                <ul className=" list-disc pt-4 leading-relaxed space-y-3 font-Poppins text-slateblue text-xl ">
                  <div className="relative group">
                    <div className="pointer-shape   group-hover:bg-orange-300 transition duration-300">
                      <div className="pointer-content px-3  ">
                        <span className="text-white font-Poppins text-center  text-nowrap font-semibold text-xl lg:text-2xl lg:ml-2">Responsive Website Design</span>
                      </div>
                    </div>
                  </div>

                  <div className="relative group">
                    <div className="pointer-shape group-hover:bg-blue-500 transition duration-300">
                      <div className="pointer-content px-2">
                        <span className="text-white font-Poppins text-center  text-nowrap  font-semibold lg:text-2xl text-lg lg:ml-2">User-Friendly Interface Design</span>
                      </div>
                    </div>
                 </div>
                 <div className="relative group">
                    <div className="pointer-shape group-hover:bg-blue-500 transition duration-300">
                      <div className="pointer-content px-2">
                        <span className="text-white font-Poppins text-center  text-nowrap
                          font-semibold lg:text-2xl text-lg lg:ml-2">E-commerce Solutions</span>
                      </div>
                    </div>
                 </div>
                 <div className="relative group">
                    <div className="pointer-shape group-hover:bg-blue-500 transition duration-300">
                      <div className="pointer-content px-2">
                        <span className="text-white font-Poppins text-center whitespace-nowrap 
                        font-semibold text-base lg:text-2xl lg:ml-2">Content Management Systems (CMS)</span>
                      </div>
                    </div>
                 </div>
                 <div className="relative group">
                    <div className="pointer-shape group-hover:bg-blue-500 transition duration-300">
                      <div className="pointer-content px-2">
                        <span className="text-white font-Poppins text-center whitespace-nowrap text-lg font-semibold lg:text-2xl lg:ml-2">SEO Optimization for Web Visibility</span>
                      </div>
                    </div>
                 </div>
                
                </ul>
              </div>
              <div className="col-span-1 hidden sm:block">
  <Link>
    <img
      className="lg:ml-20 ml-16 lg:mt-20 mt-44 wow animate__animated animate__fadeInRightBig"
      data-wow-delay="0.2s"
      data-wow-duration="2s"
      src="/images/An image of web development services with tools such as laptop, code editor, browser, and ser.png"
      alt=""
      style={{
        width: '100%',
        maxWidth: '500px',
        height: 'auto',
        ...(window.innerWidth <= 600 && { maxWidth: '300px' }) // Apply maxWidth: '300px' when window width is 600px or smaller
      }}
    />
  </Link>
</div>

            </div>
          </section>
        </div>
        </section>
      );
    };
    
    

export default WebDevelopment;
