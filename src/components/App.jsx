import { useState } from "react";
import { data } from "./data";

export default function App() {
  const [search, setSearch] = useState('')

  // filterd data before send for mapping
  const filterData = data.filter(item =>
    item.first_name.toLowerCase().includes(search.toLowerCase()))
    
  return (
    <>
    <input onChange={(e) => setSearch(e.target.value)}  type="text" className="form-control my-3 w-11/12 mx-auto" />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">email</th>
            <th scope="col">phone</th>
          </tr>
        </thead>
        <tbody>
          {filterData.map((item, index) => {
            return (
              <tr key={item.id}>
                <th scope="row">{index + 1}</th>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
