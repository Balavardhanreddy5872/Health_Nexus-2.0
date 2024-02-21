import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Layout2 from "../../components/Layout/Layout2";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Get all products
  const getAllProducts = async () => {
    try {
      let url = `http://localhost:8080/api/product/get-medicine`;
      // Apply filter if selected
      if (filter === "lastMonth") {
        url += "?filter=lastMonth";
      } else if (filter === "lastWeek") {
        url += "?filter=lastWeek";
      } else if (filter === "lastYear") {
        url += "?filter=lastYear";
      }
      const { data } = await axios.get(url);
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  useEffect(() => {
    getAllProducts();
  }, [filter]); // Re-fetch products when filter changes

  // Filter products based on search term
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout2>
      <div className="container-fluid p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1 className="text-center">All Products List</h1>
            <br/>
            <div className="mb-3 align-items-center">
              <div>
                <input
                  type="text"
                  className="form-control me-2"
                  placeholder="Search by product name....."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <br/>
              <br/>
              <div style={{width:'200px'}}>
                <select
                  className="form-select"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                >

                  <option value="all">All</option>
                  <option value="lastMonth">Last Month</option>
                  <option value="lastWeek">Last Week</option>
                  <option value="lastYear">Last Year</option>
                </select>
              </div>
            </div>
            <div className="d-flex flex-wrap" style={{ marginLeft: '10px' }}>
              {filteredProducts.map((p) => (
                <Link
                  key={p._id}
                  to={`/dashboard/admin/product/${p.slug}`}
                  className="product-link"
                >
                  <div className="card mb-3" style={{ width: "18rem", marginLeft: '50px', height: '75vh' }} >
                    <img
                      src={`http://localhost:8080/api/product/medicine-photo/${p._id}`}
                      className="card-img-top"
                      alt={p.name}
                      style={{ backgroundColor: "darkblue", color: 'whitesmoke' }}
                    />
                    <div className="card-body" style={{ backgroundColor: 'whitesmoke' }}>
                      <h5 className="card-title">{p.name}</h5>
                      <p className="card-text">{p.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout2>
  );
};

export default Products;
