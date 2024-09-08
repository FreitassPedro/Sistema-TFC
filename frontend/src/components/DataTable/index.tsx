import axios from 'axios';
import { useEffect, useState } from 'react';


const DataTable = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('https://api.example.com/data')
      .then(response => {
        setData(response.data);
      });
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Column 1</th>
          <th>Column 2</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.column1}</td>
            <td>{item.column2}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};