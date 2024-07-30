/* eslint-disable no-unused-vars */
import "../styles/AdminPhotos.css";
import UploadWeddingWidget from "./UploadWeddingWidget";
import UploadColorWidget from "./UploadColorWidget";
import { useRef, useEffect } from "react";

const AdminPhotos = () => {
  const colorContainerRef = useRef();
  const weddingContainerRef = useRef();

  useEffect(() => {
    window.cloudinary.galleryWidget({
      container: colorContainerRef.current,
      cloudName: "dawteptkh",
      mediaAssets: [{ tag: "colors" }],
      aspectRatio: "9:12",
    }).render()

    window.cloudinary.galleryWidget({
      container: weddingContainerRef.current,
      cloudName: "dawteptkh",
      mediaAssets: [{ tag: "weddings" }],
      aspectRatio: "9:12",
    }).render()
  }, [])
  
  return (
    <div id="admin-photos">
      <UploadWeddingWidget />
      <UploadColorWidget />
      <div id="show-pictures">
        <h3 style={{padding: "30px"}}>Weddings</h3>
        <div id="wedding-container" ref={weddingContainerRef}></div>
        <h3 style={{padding: "30px"}}>Colors</h3>
        <div id="color-container" ref={colorContainerRef}></div>
      </div>
    </div>
  )
};

export default AdminPhotos;