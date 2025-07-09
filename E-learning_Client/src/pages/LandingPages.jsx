function LandingPages() {
  return (
    <>
      <div className="w-540 h-200 border-10 border-accent rounded-xl mx-auto mt-30 flex justify-center items-center">
        <h1 className="text-5xl">Video</h1>
      </div>
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
      <div className="flex justify-evenly gap-4 w-540 mx-auto mt-20">
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body bg-info">
            <h2 className="card-title">
              Card Title
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Card Title
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default LandingPages;
