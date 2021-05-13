import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
function Presentation() {
  const [users, setusers] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        setusers(response.data);
        // console.log(response.data)
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>userId</TableCell>
              <TableCell>id</TableCell>
              <TableCell>title</TableCell>
              <TableCell>body</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow>
                <TableCell>{user.userId}</TableCell>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.title}</TableCell>
                <TableCell>{user.body}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <ul>
        {
users.map((post)=>(
  <li>{post.id}</li>
))
        }
      </ul> */}
    </div>
  );
}

export default Presentation;
