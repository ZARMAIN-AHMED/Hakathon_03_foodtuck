'use client'


const Error404 = () => {
    return (
      <div className="flex items-center justify-center min-h-screen  ">
        <div className="text-center space-y-6">
          {/* 404 Heading */}
          <h1 className="text-6xl font-bold text-orange-500">404</h1>
  
          {/* Subheading */}
          <p className="text-xl">
            Oops! Looks like something went wrong.
          </p>
  
          {/* Message */}
          <p className="text-lg">
            Page Cannot be found! We will have it figured out in no time.<br/> Meanwhile, check out these fresh ideas:
          </p>
  
          {/* Button */}
          <button 
            onClick={() => window.location.href = '/homepage'} 
            className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all"
          >
            Go to Home Page
          </button>
        </div>
      </div>
    );
  };
  
  export default Error404;
  