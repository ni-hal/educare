const ViewAllButton = ({  onClick }) => {
    return (
        <div className="relative inline-block group">
        {/* Skewed Background Shadow */}
        <div className="absolute bottom-0 left-0 w-full h-full bg-yellow-400 rounded-md z-0 -rotate-6 translate-x-4 translate-y-5 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:rotate-0 transition-all duration-300 ease-in-out"></div>
      
        {/* Button */}
        <button
          onClick={onClick}
          className="relative z-10 px-5 py-2 bg-[#b91c1c] text-white rounded-md font-semibold flex items-center gap-2 transition-all duration-300"
        >
          View All
          <span className="bg-blue-500 text-white text-sm px-1.5 py-0.5 rounded-sm">↗</span>
        </button>
      </div>
      
    );
  };
  
  export default ViewAllButton;