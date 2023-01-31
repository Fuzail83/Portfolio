import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";

class Employees extends Component {
  state = {
    posts: [],
  };
  getPost = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    axios
      .get(url)
      .then((response) => {
        console.log(response);
        this.setState({
          posts: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.getPost();
  }

  render() {
    const { posts } = this.state;

    return (
      <div id="about">
        <div>
          <h2>Our Employees Data</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Last Name</th>
                {/* <th>Username</th> */}
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr>
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td>{post.body}</td>
                  {/* <td>{post.userId}</td> */}
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default Employees;
