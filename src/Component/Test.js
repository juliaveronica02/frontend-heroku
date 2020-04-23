import React, { useState, useEffect } from "react";
import "./style.css";
import axios from "axios";
const Test = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/heroes/get").then((res) => {
      console.log(res.data.data);
      setData(res.data.data);
    });
  }, []);

  const showData = data.map((data, id) => {
    return (
      <tr key={id}>
        <td>{data._id}</td>
        <td>
          <img src={data.image} alt="" />
        </td>
        <td>{data.name}</td>
        <td>{data.born}</td>
        <td>{data.dead}</td>
        <td>{data.description}</td>
        <td>{data.establishment}</td>
      </tr>
    );
  });

  return (
    <div>
      <table
        className="table table-dark table-striped table-hover justify-content-center"
        style={{ width: "70%" }}
      >
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Born</th>
            <th scope="col">Dead</th>
            <th scope="col">Description</th>
            <th scope="col">Establishment</th>
          </tr>
        </thead>
        <tbody>{showData}</tbody>
      </table>
    </div>
  );
};

export default Test;

// import React, { Component } from 'react'
// import axios from 'axios'

// export default class componentName extends Component {
//     state = {
//         heroes:[]
//     }
//     componentDidMount(){
//         axios.get(`http://localhost:8000`)
//         .then(result =>{
//             const heroes = result.data;
//             this.setState({heroes})
//         })
//     }
//     render(){
//         return(
//             <ul>
//                 {this.state.heroes.map(heroes =><li>{heroes.name}</li>)}
//             </ul>
//         )
//     }
// }
