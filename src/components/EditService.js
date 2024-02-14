import { useNavigate, useParams } from "react-router";
import "../styles/EditPhoto.css";
import { useEffect, useState } from "react";
import axios from "axios";

const EditService = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState();
  const [newTitle, setNewTitle] = useState();
  const [newDesc, setNewDesc] = useState();
  const [newPictureUrl, setNewPictureUrl] = useState();
  const [newPrice, setNewPrice] = useState();
  const [newCategory, setNewCategory] = useState();
  const [displayOrder, setDisplayOrder] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    fetchService()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchService = async () => {
    try {
      const response = await axios.get(`https://radiant-light-server-b649d90c9bb7.herokuapp.com/service-by-id/${serviceId}`);

      setService(response.data);
      setNewDesc(response.data.description);
      setNewTitle(response.data.title);
      setNewPictureUrl(response.data.picture_url);
      setNewPrice(response.data.price);
      setNewCategory(response.data.category);
      setDisplayOrder(response.data.order);
    } catch(err) {
      console.log(err)
    }
  };

  const formSubmit = async (e) => {
    e.preventDefault()
    const newValues = {
      title: newTitle,
      description: newDesc,
      picture_url: newPictureUrl,
      price: newPrice,
      category: newCategory,
      order: displayOrder
    }

    console.log(newValues)

    try {
      const response = await axios.put(`https://radiant-light-server-b649d90c9bb7.herokuapp.com/services/${serviceId}`, newValues);

      console.log(response.data)
      navigate("/admin-private/services");
    } catch(err) {
      console.log(err);
    }
  }

  return service ? (
    <div className="container" id="edit-photo">
    <button id="back-button" className="button-style" onClick={() => navigate("/admin-private/services")}>Back</button>
    <div className="row">
      <form id="photo-form" className="col">
        <h3>Edit Service</h3>
        <input onChange={e => setNewTitle(e.target.value)} id="title-input" className="form-inputs" title="title" placeholder="Title" defaultValue={service.title} type=""/>
        <textarea onChange={e => setNewDesc(e.target.value)} id="description-input" className="form-inputs" title="description" placeholder="Description" type="text" defaultValue={service.description}/>
        <p className="current-price">Category:</p>
        <select onChange={e => {
          setNewCategory(e.target.value)
        }} id="category-select" className="form-inputs">
          <option defaultValue>{service.category}</option>
          <option value="Colors">Colors</option>
          <option value="Special-Occasions">Special-Occasions</option>
          <option value="Cuts">Cuts</option>
          <option value="Extras">Extras</option>
        </select>
        <input onChange={e => setNewPictureUrl(e.target.value)} id="url-input" className="form-inputs" title="url" placeholder="Picture Url" type="url" defaultValue={service.picture_url}/>
        <p className="current-price">Current Price: {service.price}</p>
        <input onChange={e => setNewPrice(e.target.value)} id="price-input" className="form-inputs" title="price" placeholder="$ Price" type="text"/>
        <p className="current-price">Select a display order (1 being top of the list)</p>
        <select onChange={e => {
          setDisplayOrder(e.target.value)
        }} id="category-select" className="form-inputs">
          <option defaultValue>{service.order}</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <button onClick={formSubmit} className="button-style">Submit</button>
      </form>
    </div>
  </div>
  ) : (
    <div>No Service Found</div>
  )
};

export default EditService;