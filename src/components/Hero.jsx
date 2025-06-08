const Hero = ({ title, description, image }) => {
  return (
    <section
      className="hero-section relative h-[80vh] mt-5"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay absolute inset-0 bg-gradient-to-b from-black/30 to-black/40 flex flex-col justify-center items-center text-center text-white p-8">
        <div className="mt-24">
          <h1 className="text-4xl md:text-6xl font-bold mb-4  text-white">
            {title}
          </h1>
          <p className="text-lg md:text-2xl mt-6  text-white">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
