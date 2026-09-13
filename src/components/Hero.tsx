import bannerImage from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-[1170px] grid-cols-1 items-center gap-10 px-4 py-12 md:grid-cols-[1.3fr_0.7fr] md:py-16 lg:py-20">

        <div>
          <h3 className="font-['Inter'] text-[38px] font-extrabold leading-[1.1] text-[#0F172A] sm:text-[48px] lg:text-[60px]">
            Build Your Ideal
          </h3>

        <h3 className="gradient-text font-['Inter'] text-[38px] font-extrabold leading-[1.08] sm:text-[46px] lg:text-[60px]">
  Development Stack
</h3>

          <p className="mt-5 max-w-[560px] text-[14px] font-medium leading-7 text-[#475569]">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits your
            next project.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
         <button className="gradient-bg rounded-md px-5 py-3 text-[14px] font-medium text-white">
  Explore Technologies
</button>

            <button className="rounded-md border border-gray-300 px-5 py-3 text-[14px] font-medium text-[#0F172A]">
              Learn More
            </button>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src={bannerImage}
            alt="Development Stack"
            className="w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[420px]"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;