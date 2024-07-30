import "../styles/Portfolio.css";
import { useEffect, useRef } from "react";

const WeddingWidget = () => {
  const containerRef = useRef();

  useEffect(() => {
    window.cloudinary.galleryWidget({
      container: containerRef.current,
      cloudName: "dawteptkh",
      mediaAssets: [{ tag: "weddings" }],
      aspectRatio: "9:12"
    }).render()
  }, [])

  return (
    <div id="wedding-container" ref={containerRef}></div>
  )
}

export default WeddingWidget;