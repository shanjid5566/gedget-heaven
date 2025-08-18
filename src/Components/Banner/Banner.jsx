import bannerImg from "../../assets/BannerImg.png";
const Banner = () => {
  return (
    <div>
      <div className="hero  bg-[#9538E2] p-24">
        <div className="hero-content text-center flex flex-col">
          <div className="max-w-4xl ">
            <h1 className=" text-2xl md:text-5xl font-bold md:leading-14 text-white">
              Upgrade Your Tech Accessorize with Gadget Heaven Accessories
            </h1>
            <p className="py-6">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <button className="btn bg-white text-[#9538E2] mb-22 font-semibold">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <img src={bannerImg} alt="" className="w-4xl reletive -mt-40" />
      </div>
    </div>
  );
};

export default Banner;
