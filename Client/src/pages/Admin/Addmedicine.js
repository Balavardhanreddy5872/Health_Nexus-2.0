import React, { useState } from "react";
import AdminMenu from "./../../components/Layout/AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Layout2 from "../../components/Layout/Layout2";

const Addmedicine = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [seller, setseller] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [photo, setPhoto] = useState("");

  //create product function
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("seller", seller);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("quantity", quantity);
      productData.append("photo", photo);
      const { data } = await axios.post(`http://localhost:8080/api/product/add-medicine`,
        productData

      );
      if (data?.success) {
        toast.error(data?.message);
      } else {
        toast.success("Product Created Successfully");
        navigate("/admin");
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  return (
    <Layout2 title={"Dashboard - Create Product"}>
      <div className="container-fluid p-3" style={{backgroundColor:'whitesmoke'}}>
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9 d-flex justify-content-center align-items-center" style={{ minHeight: '90vh'}}>
            <div className="p-3" style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', borderRadius: '10px' ,backgroundColor:'darkblue',color:'whitesmoke',width : '40vw' }}>
              <h1 className="mb-4">Create Product</h1>
              <div className="m-1 w-72">
                <div className="mb-3">
                  <label className="btn btn-outline-secondary col-md-12" style={{color:'darkblue', backgroundColor:'whitesmoke'}}>
                    {photo ? photo.name : "Upload Photo"}
                    <input
                      type="file"
                      name="photo"
                      accept="image/*"
                      onChange={(e) => setPhoto(e.target.files[0])}
                      hidden
                    />
                  </label>
                </div>
                <div className="mb-3">
                  {photo && (
                    <div className="text-center">
                      <img
                        src={URL.createObjectURL(photo)}
                        alt="product_photo"
                        height={"200px"}
                        className="img img-responsive"
                      />
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    value={name}
                    placeholder="Name...."
                    className="form-control"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    value={seller}
                    placeholder="seller..."
                    className="form-control"
                    onChange={(e) => setseller(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    type="text"
                    value={description}
                    placeholder="description.."
                    className="form-control"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="number"
                    value={price}
                    placeholder="Price.."
                    className="form-control"
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="number"
                    value={quantity}
                    placeholder="quantity.."
                    className="form-control"
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </div>
                <br/>
                <div className="mb-3">
                  <button className="btn btn-primary" onClick={handleCreate} style={{backgroundColor:'skyblue' ,color:"black"}}>
                    CREATE PRODUCT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout2>
  );
}

export default Addmedicine;
