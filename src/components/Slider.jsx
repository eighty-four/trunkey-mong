const Slider = () => {
  return (
    <>
      <input
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime}
            onChange={onChange}
            className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer mt-4"
        />
    </>
  )
}

export default Slider
