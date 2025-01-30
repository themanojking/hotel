const Title = ({ title, subtitle }) => {
    return (
      <div className='text-center space-y-2 px-4 md:px-8 lg:px-16 py-5'>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold'>{title}</h1>
        <h3 className='text-lg md:text-xl font-semibold text-gray-600'>
          {subtitle}
        </h3>
      </div>
    );
  };
  
  export default Title;