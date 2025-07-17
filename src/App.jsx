import cloneimg from "./image/cloneimg.jpg";
import LikeUpper from "./lastbuttons/likeUpper";
import LikeDown from "./lastbuttons/likeDown";
import Comment from "./lastbuttons/comment";
import Share from "./lastbuttons/share";
import Link from "./lastbuttons/link";
import Globe from "./svg/globe";
import ThreeDots from "./svg/threeDots";
import Profile from "./profile";
import Cross from "./svg/cross";
import ArrowDown from "./svg/arrowDown";


function App() {
  return (
    <div className="flex items-center flex-wrap bg-blue-300 justify-center">
      <div className="bg-white  w-160 min-h-screen">
        <div className="flex justify-center flex-wrap">
          <div>
            <div className="flex">
              <Profile />
              <div>
                <div>
                  <h1 className="mt-6 ml-3 text-2xl font-semibold">
                    Abdul Rehman...
                  </h1>
                </div>
                <div className="flex">
                  <div>
                    <h1 className="mt-1 ml-3 text-sm font-light">
                      4d<span className="ml-2 font-semibold ">.</span>
                    </h1>
                  </div>
                  <Globe />
                </div>
              </div>
              <div className="flex">
                <div>
                  <h1 className="mt-5 font-extrabold text-2xl ml-22">.</h1>
                </div>
                <div>
                  <h1 className="mt-6 ml-7 text-2xl font-bold text-blue-600">
                    Follow
                  </h1>
                </div>
                <ThreeDots />
                < Cross />
              </div>
            </div>
            <div className="flex ">
              <h1 className="text-2xl mb-4 ml-5 mt-1">Reason</h1>
              < ArrowDown />
            </div>
          </div>

          <div className="flex flex-wrap flex-col">
              <img src={cloneimg} alt="Clone" style={{objectFit:'fill'}}  className="w-[480px] h-[620px]" />
          </div>
        </div>

        <div>
          <LikeUpper />
        </div>

        <div className="flex flex-wrap mt-2">
          <div>
            <LikeDown />
          </div>
          <div>
            <div>
              <Comment />
            </div>
          </div>
          <div>
            <Share />
          </div>
          <div>
            <Link />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
