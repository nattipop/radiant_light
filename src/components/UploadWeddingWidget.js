import { useEffect, useRef } from "react"

const UploadWeddingWidget = () => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget({
      cloudName: "dawteptkh",
      uploadPreset: "ml_default",
      folder: "rlhd-weddings",
      tags: ["weddings"]
    }, (error, result) => {
      console.log(result)
      console.log(error)
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <button className="button-style upload-button" onClick={() => widgetRef.current.open()}>
      Upload to Weddings
    </button>
  )
}

export default UploadWeddingWidget;