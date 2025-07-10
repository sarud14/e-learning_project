import Footer from "../components/Footer.jsx";
import LandingPageCoursesItem from "../components/LandingPageComponents/LandingPageCoursesItem.jsx";
import LandingPageVideo from "../components/LandingPageComponents/LandingPageVideo.jsx";

function LandingPages() {
  return (
    <>
      <LandingPageVideo />
      <div className="w-540 mx-auto mt-36">
        <h1 className="text-info text-4xl">Our Courses</h1>
        <div>
          <div className="flex h-full justify-center items-end">
            <h1 className="text-info text-xl mt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              natus iure minima culpa laborum! Reprehenderit perspiciatis, omnis
              harum quo, aspernatur rem atque eum totam officiis incidunt
              dignissimos. Ullam, quisquam quaerat? Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Dicta similique sed mollitia error
              quibusdam beatae delectus! Velit ab nam hic sit dolores doloremque
              quaerat, consequatur qui rem quibusdam, vel sapiente. Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Cupiditate minus ad
              doloribus quis consectetur fuga, harum, nisi maiores velit nemo
              asperiores, error quisquam. Quae culpa repellat, consectetur rerum
              mollitia quo.
            </h1>
            <button className="btn btn-primary text-info">View All</button>
          </div>
        </div>
      </div>
      <LandingPageCoursesItem />
      <Footer />
    </>
  );
}
export default LandingPages;
