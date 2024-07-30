import { useEffect, useRef } from "react";

const UploadColorWidget = () => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget({
      cloudName: "dawteptkh",
      uploadPreset: "ml_default",
      folder: "rlhd-colors",
      tags: ["colors"]
    }, (error, result) => {
      console.log(error);
      console.log(result)
    })
  }, []);

  return (
    <button className="button-style upload-button" onClick={() => widgetRef.current.open()}>
      Upload to Colors
    </button>
  )
};

export default UploadColorWidget;