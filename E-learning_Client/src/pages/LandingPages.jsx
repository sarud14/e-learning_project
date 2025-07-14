import Footer from "../components/Footer.jsx";
import LandingIntroduceTeam from "../components/LandingPageComponents/LandingIntroduceTeam.jsx";
import LandingPageCoursesItem from "../components/LandingPageComponents/LandingPageCoursesItem.jsx";
import LandingPageVideo from "../components/LandingPageComponents/LandingPageVideo.jsx";
import { Link } from "react-router";

function LandingPages() {
  return (
    <div>
      <LandingPageVideo />
      <div className="w-360 mx-auto mt-36">
        <h1 className="text-info text-4xl">Our Courses</h1>
        <div>
          <div className="flex h-full justify-center items-end">
            <h1 className="text-info text-2xl mt-6">
              Ready to dive into the world of development? Whether you're just
              starting out or already writing code, our video courses are here
              to help you grow. Learn how to build websites, create apps,
              explore DevOps, and much more — all through clear,
              beginner-friendly videos you can watch anytime, anywhere.
            </h1>
            <Link to="/course" className="btn btn-primary text-info">View All</Link>
          </div>
        </div>
      </div>
      <LandingPageCoursesItem />
      <LandingIntroduceTeam />
      <Footer />
    </div>
  );
}
export default LandingPages;
