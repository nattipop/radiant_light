import { useEffect, useRef } from "react";

const ColorWidget = () => {
  const containerRef = useRef();

  useEffect(() => {
    window.cloudinary.galleryWidget({
      container: containerRef.current,
      cloudName: "dawteptkh",
      mediaAssets: [{ tag: "colors" }],
      aspectRatio: "9:12",
      color: "#f2e6d2"
    }).render()
  }, [])

  return (
    <div id="color-container" ref={containerRef}></div>
  )
}

export default ColorWidget;