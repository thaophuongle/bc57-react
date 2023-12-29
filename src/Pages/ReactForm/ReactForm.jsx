import React, { Component } from "react";
import ProductForm from "./ProductForm";

export default class ReactForm extends Component {
  state = {
    arrProduct: [
      {
        id: 1,
        name: "iphone14",
        price: 1000,
        img: "https://picsum.photos/id/1/200/200",
        type: "phone",
        description: "iphone 14",
      },
      {
        id: 2,
        name: "iphoneXS",
        price: 1000,
        img: "https://picsum.photos/id/2/200/200",
        type: "phone",
        description: "iphone XS",
      },
    ],

    productEdit: {
      id: "",
      name: "",
      price: "",
      img: "",
      type: "",
      description: "",},

  };

  addProduct = (newProduct) => {
    this.state.arrProduct.push({ ...newProduct });

    this.setState({
      arrProduct: this.state.arrProduct,
    });
  };

  deleteProduct = (idProduct) => {
    this.state.arrProduct = this.state.arrProduct.filter(
      (prod) => prod.id !== idProduct
    );

    this.setState({
      arrProduct: this.state.arrProduct,
    });
  };

  editProduct = (prodClick) => {
    this.setState({
      productEdit: prodClick
    })
  }

  updateProduct = (prodUpdate) => {
    //Tìm ra product có id = product update lấy ra thay đổi
    let prod = this.state.arrProduct.find(pro => pro.id === prodUpdate.id)

    if (prod) {
      //lấy ra các trường prod trong arrProduct gán = dữ liệu sau khi bấm nút update
      for(let key in prod) {

        prod[key] = prodUpdate[key]
      }
    }

    //gọi hàm setState để render lại giao diện
    this.setState({
      arrProduct: this.state.arrProduct
    })
  }

  render() {
    return (
      <div className="container">
        <h3>Product Management</h3>
        <ProductForm addProduct={this.addProduct} productEdit={this.state.productEdit} updateProduct={this.updateProduct}/>
        <table className="table mt-5">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Image URL</th>
              <th>Price</th>
              <th>Type</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.arrProduct.map((prod) => {
              return (
                <tr key={prod.id}>
                  <td>{prod.id}</td>
                  <td>{prod.name}</td>
                  <td>
                    <img src={prod.img} alt="..." width={70} height={70} />
                  </td>
                  <td>{prod.price}</td>
                  <td>{prod.type}</td>
                  <td>{prod.description}</td>
                  <td>
                    <button
                      onClick={() => {
                        this.deleteProduct(prod.id);
                      }}
                      className="btn btn-danger"
                    >
                      <i className="fa fa-close"></i>
                    </button>

                    <button
                      onClick={() => {
                        this.editProduct(prod);
                      }}
                      className="btn btn-primary mx-2"
                    >
                      <i className="fa fa-edit"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
