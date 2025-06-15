const Blob = () => {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      <svg
        className="absolute top-[20%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] opacity-20 animate-spin-slow"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#ec4899"
          d="M48.5,-51.1C62.3,-37.4,72.8,-18.7,72.3,-0.6C71.7,17.6,60.2,35.2,46.3,48.3C32.4,61.4,16.2,70,0.6,69.3C-14.9,68.7,-29.9,58.8,-43.2,45.3C-56.6,31.8,-68.3,14.9,-67.1,-1.5C-65.9,-17.9,-51.7,-33.7,-37,-47.2C-22.3,-60.7,-11.2,-71.8,3.5,-75.6C18.1,-79.3,36.2,-75.8,48.5,-61.1Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>
  )
}

export default Blob
