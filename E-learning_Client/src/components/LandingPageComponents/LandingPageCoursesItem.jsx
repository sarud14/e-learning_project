function LandingPageCoursesItem() {
  return (
    <>
      <div className="flex justify-evenly gap-4 w-360 mx-auto mt-20">
        <div className="card bg-info w-260 shadow-sm h-180 flex items-center">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
              className="w-full h-full object-cover"
            />
          </figure>
          <div>
            <div className="card-body flex items-center gap-4 ">
              <div className="flex gap-15">
                <h2 className="card-title text-4xl">UI/UX Design</h2>
                <div className="card-actions justify-end items-center">
                  <div className="badge badge-outline text-md font-bold">
                    5 weeks
                  </div>
                  <div className="badge badge-outline text-md font-bold">
                    Intermediate
                  </div>
                  <div className="badge badge-primary text-info text-md">
                    By Smith
                  </div>
                </div>
              </div>

              <p className="mt-3.5 text-lg pl-4">
                Master the art of creating intuitive user interfaces (UI) and
                enhancing user experiences (UX). Learn design principles,
                wireframing, prototyping, and usability testing techniques.
              </p>
              <button className="btn btn-primary text-info w-160 mt-">
                Get It Now
              </button>
            </div>
          </div>
        </div>
            <div className="card bg-info w-260 shadow-sm h-180 flex items-center">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
              className="w-full h-full object-cover"
            />
          </figure>
          <div>
            <div className="card-body flex items-center gap-4 ">
              <div className="flex gap-15">
                <h2 className="card-title text-4xl">UI/UX Design</h2>
                <div className="card-actions justify-end items-center">
                  <div className="badge badge-outline text-md font-bold">
                    5 weeks
                  </div>
                  <div className="badge badge-outline text-md font-bold">
                    Intermediate
                  </div>
                  <div className="badge badge-primary text-info text-md">
                    By Smith
                  </div>
                </div>
              </div>

              <p className="mt-3.5 text-lg pl-4">
                Master the art of creating intuitive user interfaces (UI) and
                enhancing user experiences (UX). Learn design principles,
                wireframing, prototyping, and usability testing techniques.
              </p>
              <button className="btn btn-primary text-info w-160 mt-">
                Get It Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default LandingPageCoursesItem;
