import { useEffect } from "react";

const PageNotFound = () => {
  useEffect(() => {
    document.title = "Radiant Light | Page Not Found";
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div>
      <h1 id="error-header">Oops! Page not found.</h1>
      <img src="https://media1.giphy.com/media/26n6WywJyh39n1pBu/giphy.gif" alt="" />
    </div>
  )
}

export default PageNotFound;