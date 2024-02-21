import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import AdminMenu from "../../components/Layout/AdminMenu";
import { useAuth } from "../../context/auth";
import moment from "moment";
import { Select, Card, Row, Col } from "antd";
import Layout2 from "../../components/Layout/Layout2";
const { Option } = Select;

const AdminOrders = () => {
  const [status, setStatus] = useState([
    "Not Process",
    "Processing",
    "Shipped",
    "Delivered",
    "Cancel",
  ]);
  const [changeStatus, setCHangeStatus] = useState("");
  const [orders, setOrders] = useState([]);
  const [auth, setAuth] = useAuth();
  const [timeRange, setTimeRange] = useState("All"); // Default time range is all orders

  const getOrders = async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/api/auth/all-orders");
      // Sort orders by date from present to past
      const sortedOrders = data.sort((a, b) => moment(b.createAt).valueOf() - moment(a.createAt).valueOf());
      setOrders(sortedOrders);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (auth?.token) getOrders();
  }, [auth?.token]);

  const handleChange = async (orderId, value) => {
    try {
      const { data } = await axios.put(`http://localhost:8080/api/auth/order-status/${orderId}`, {
        status: value,
      });
      getOrders();
    } catch (error) {
      console.log(error);
    }
  };

  const countByStatus = (status) => {
    return orders.filter(order => order.status === status).length;
  };

  const filteredOrders = orders.filter(order => {
    if (timeRange === "All") {
      return true; // Display all orders
    } else if (timeRange === "LastWeek") {
      const rangeStart = moment().subtract(1, "week").startOf("day");
      return moment(order.createdAt) >= rangeStart;
    } else if (timeRange === "Last2Months") {
      const rangeStart = moment().subtract(2, "months").startOf("day");
      return moment(order.createdAt) >= rangeStart;
    } else if (timeRange === "Last2Days") {
      const rangeStart = moment().subtract(2, "days").startOf("day");
      return moment(order.createdAt) >= rangeStart;
    }
  });

  return (
    <Layout2 title={"All Orders Data"}>
      <div className="container-fluid p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9" style={{minHeight:'90vh'}}>
            <br/>
            {/* <h1 className="text-center w-80 p-3">Orders</h1> */}
            <Row gutter={16}>
              <Col span={6}>
                <Card title={<span style={{ color: 'white' }}>Total Orders</span>} style={{border: '2px dashed red',backgroundColor:'darkblue' ,color:'white'}}>
                  {filteredOrders.length}
                </Card>
              </Col>
              <Col span={6}>
                <Card title={<span style={{ color: 'white' }}>Not processed</span>} style={{border: '2px dashed red',backgroundColor:'darkblue' ,color:'white'}} >
                  {countByStatus("Not Process")}
                </Card>
              </Col>
              <Col span={6}>
                <Card title={<span style={{ color: 'white' }}>Shipped</span>} style={{border: '2px dashed red',backgroundColor:'darkblue' ,color:'white'}}>
                  {countByStatus("Shipped")}
                </Card>
              </Col>
              <Col span={6}>
                <Card title={<span style={{ color: 'white' }}>Delivered</span>} style={{border: '2px dashed red',backgroundColor:'darkblue' ,color:'white'}}>
                  {countByStatus("Delivered")}
                </Card>
              </Col>
            </Row>
            <br/>
            <br/>
            <Select
              defaultValue="All"
              style={{ width: 200, marginBottom: 20 }}
              onChange={(value) => setTimeRange(value)}
            >
              <Option value="All">All</Option>
              <Option value="LastWeek">Last Week</Option>
              <Option value="Last2Months">Last 2 Months</Option>
              <Option value="Last2Days">Last 2 Days</Option> {/* Added option for last 2 days */}
            </Select>
            {filteredOrders.length === 0 ? (
              <div className="text-center">
                <h1>No orders from {timeRange === "LastWeek" ? "last week" : timeRange === "Last2Months" ? "last 2 months" : "last 2 days"}.</h1>
              </div>
            ) : (
              filteredOrders.map((o, i) => (
                <div key={i} className="border shadow mb-4">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Status</th>
                        <th scope="col">Buyer</th>
                        <th scope="col">Date</th>
                        <th scope="col">Quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{i + 1}</td>
                        <td>
                          <Select
                            bordered={false}
                            onChange={(value) => handleChange(o._id, value)}
                            defaultValue={o?.status}
                          >
                            {status.map((s, i) => (
                              <Option key={i} value={s}>
                                {s}
                              </Option>
                            ))}
                          </Select>
                        </td>
                        <td>{o?.buyer?.name}</td>
                        <td>{o?.createdAt}</td>
                        <td>{o?.products?.length}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="container">
                    {o?.products?.map((p, j) => (
                      <div className="row mb-2 p-3 card flex-row" key={j}>
                        <div className="col-md-4">
                          <img
                            src={`http://localhost:8080/api/product/medicine-photo/${p._id}`}
                            className="card-img-top"
                            alt={p.name}
                            width="150px"
                            height={"250px"}
                          />
                        </div>
                        <div className="col-md-8">
                          <p>{p.name}</p>
                          <p>{p.description.substring(0, 30)}</p>
                          <p>Price : {p.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </Layout2>
  );
};

export default AdminOrders;
