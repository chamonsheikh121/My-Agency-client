import img from './../../../assets/hire.png';

const HireMessageSection = () => {
  return (
    <section
      className="relative text-white  py-32 px-6 flex flex-col items-center text-center"
     
    >

      {/*  style={{ backgroundImage: `url(${`https://images.pexels.com/photos/957040/night-photograph-starry-sky-night-sky-star-957040.jpeg?auto=compress&cs=tinysrgb&w=600`})`, backgroundSize: 'cover', backgroundPosition: 'top' }} */}
      {/* Background Blur Effect */}
      <div className="absolute "></div>

      {/* Content Wrapper */}
      <div className="relative space-y-10 z-10 max-w-3xl">
        <h2 className="text-5xl font-extrabold mb-4 text-gray-700">
          Ready To Grow <span className='text-purple-800'>Your Business?</span>
        </h2>
        <p className="text-lg mb-6 text-gray-600">
          Just take a step ahead and Hire now or get a free quote to discuss how we can help you.
        </p>
        <button className="bg-gradient-to-t from-purple-400 to-purple-800 text-purple-100  font-semibold px-14 py-3 rounded-full hover:scale-105 text-lg shadow-lg transition-all duration-300 hover:bg-purple-700 hover:text-white hover:shadow-xl">
          Hire now
        </button>
      </div>
    </section>
  );
};

export default HireMessageSection;
