import cloneimg from "./image/cloneimg.jpg";
import LikeUpper from "./lastbuttons/likeUpper";
import LikeDown from "./lastbuttons/likeDown";
import Comment from "./lastbuttons/comment";
import Share from "./lastbuttons/share";
import Link from "./lastbuttons/link";
import Globe from "./svg/globe";
import ArrowDown from "./svg/arrowDown";
import Profile from "./profile";

function App() {
  return (
    <div className="flex items-center bg-white flex-wrap justify-center">
      <div className="bg-white border-1 border-black w-160 min-h-screen">
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
                <ArrowDown />
                <div>
                  <h1 className="mt-7 ml-7 text-2xl font-bold text-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill=""
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="size-7 text-gray-600 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex ">
              <h1 className="text-2xl ml-5 mt-1">Reason</h1>
              <div className="w-7 h-7 ml-4 mt-2 border-2 border-gray-500 rounded-sm flex justify-center items-center bg-gradient-to-r from-gray-300 via-gray-500 to-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="white"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m11.99 16.5 3.75 3.75m0 0 3.75-3.75m-3.75 3.75V3.75H4.49"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap flex-col">
            <div className="w-[480px] h-[480px] mt-1">
              <img src={cloneimg} alt="Clone" className="w-[480px] h-[480px]" />
            </div>
          </div>
        </div>

        <div>
          <LikeUpper />
        </div>

        <div className="flex flex-wrap">
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
