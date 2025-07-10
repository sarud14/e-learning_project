function LandingPageCoursesItem() {
  return (
    <>
      <div className="flex justify-evenly gap-4 w-580 mx-auto mt-20">
        <div className="card bg-info w-260 shadow-sm">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
              className="w-full h-full object-cover"
            />
          </figure>
          <div>
            <div className="card-body">
              <div className="flex justify-between">
                <h2 className="card-title">Card Title</h2>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Fashion</div>
                  <div className="badge badge-outline">Products</div>
                  <div className="badge badge-secondary">NEW</div>
                </div>
              </div>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
            </div>

            <button className="btn btn-primary text-info w-full">
              Buy Now
            </button>
          </div>
        </div>
        <div className="card bg-info w-260 shadow-sm">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
              className="w-full h-full object-cover"
            />
          </figure>
          <div>
            <div className="card-body">
              <div className="flex justify-between">
                <h2 className="card-title">Card Title</h2>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Fashion</div>
                  <div className="badge badge-outline">Products</div>
                  <div className="badge badge-secondary">NEW</div>
                </div>
              </div>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
            </div>

            <button className="btn btn-primary text-info w-full">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default LandingPageCoursesItem;
