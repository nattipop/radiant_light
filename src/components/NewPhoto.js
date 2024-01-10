import "../styles/NewPhoto.css";

const NewPhoto = () => {
  return (
    <div className="container">
      <form id="photo-form">New photo
        <input id="title-input" title="title" placeholder="Title" type="text" />
        <input id="description-input" title="description" placeholder="Description" type="text" />
        <input id="url-input" title="url" placeholder="Url" type="url" />
        <p>Category</p>
        <input id="category-input" title="category" placeholder="Category" type="radio" />
        <input id="id-input" title="photo_id" placeholder="Id" type="text" />
      </form>
    </div>
  )
}

export default NewPhoto;