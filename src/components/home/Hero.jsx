import { useState } from "react";

const Hero = () => {
  const [video, setVideo] = useState(false);
  const closeVideo = () => {
    setVideo(false);
  };
  const playVideo = () => {
    setVideo(true);
    // scroll to top smoothly
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-hero pt-44 lg:pt-56  lg:px-24 h-[52rem]">
      {/* video */}
      <div
        className={
          video
            ? `absolute w-full left-0 overflow-hidden flex justify-center top-36 z-50 lg:top-44`
            : `hidden`
        }
      >
        <video
          src="/images/hero/hero-video.mp4"
          className="h-[40rem] bg-gray-500 w-[18rem] rounded-lg lg:w-[50rem] lg:h-[25rem]"
        />
        <p
          onClick={closeVideo}
          className="text-3xl -ml-7 text-white relative cursor-pointer"
        >
          X
        </p>
      </div>

      <div className="w-full  mx-auto  md:flex flex-row justify-between ">
        <div className="hidden lg:block md:block">
          <div className="rectangle ">
            <img
              src="/images/hero/rectangle.svg"
              alt=""
              srcset=""
              className=" "
            />
          </div>

          <div className=" h-96 md:w-80  lg:w-96 m-4 rectangle-4 p-4">
            <h1 className="font-semibold text-3xl lg:p-4">
              A Great App Makes Your Life Better
            </h1>
            <p className="lg:px-4">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>

            <p className="lg:p-4 text-xl">Download App Now</p>

            <div className="p-4 w-full flex">
              <div className="bg-black w-1/2 text-white text-xs border flex rounded-lg p-2 ">
                <img src="/images/hero/google-play 1.svg" alt="" srcset="" />
                <p>
                  Get it on <p className="text-sm"> Google play</p>
                </p>
              </div>

              <div className="bg-black w-1/2 text-white text-xs  border flex rounded-lg p-2 ">
                <img
                  src="/images/hero/ic_baseline-apple.svg"
                  alt=""
                  srcset=""
                />
                <p>
                  Download on the <p className="text-sm">App Store </p>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="items-center">
          <div className="w-full mx-auto h-full -mt-12">
            <img
              src="/images/hero/phone-screen.svg"
              alt="phone-screen"
              srcset=""
              className="mx-auto h-96  md:h-4/5 sm:h-full"
            />

            <div className="block lg:hidden md:hidden">
              {/* <p className=" text-secondary text-3xl  text-center mt-8" >A GREAT APP MAKES </p>
          <p className=" text-secondary text-3xl  text-center" > YOUR LIFE Better</p>
          <p className="text-white text-center mt-4 mx-4">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p> */}
              <p className="text-white text-3xl text-center mt-4">
                Download App Now
              </p>

              <div className="p-4 w-max ml-4 items-center flex">
                <div className="bg-black w-fit text-white text-xs border flex rounded-lg p-2 ">
                  <img src="/images/hero/google-play 1.svg" alt="" srcset="" />
                  <p>
                    Get it on <p className="text-sm"> Google play</p>
                  </p>
                </div>

                <div className="bg-black w-fit ml-4 text-white text-xs  border flex rounded-lg p-[0.4rem] ">
                  <img
                    src="/images/hero/ic_baseline-apple.svg"
                    alt=""
                    srcset=""
                  />
                  <p>
                    Download on the <p className="text-sm">App Store </p>{" "}
                  </p>
                </div>
              </div>
            </div>
            <div
              className="text-xl text-white float-right cursor-pointer flex flex-col items-center mr-10 lg:block md:block"
              onClick={playVideo}
            >
              <img
                src="/images/hero/play-icon.svg"
                alt=""
                srcset=""
                className=" px-8 lg:h-16"
              />
              <p>Watch Video</p>
            </div>
          </div>
        </div>
      </div>
    </div> /*hero div close*/
  );
};

export default Hero;
