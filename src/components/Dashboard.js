import '../style/Dashboard.css'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const TestAxios = () => {
  const [data, setData] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/profile');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const updateItem = (id, updatedData) => {
    // Set the selected item ID to be used in UpdatePage
    setSelectedItemId(id);
  };

  const deleteItem = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3000/profile/${id}`);
      console.log('Item deleted:', response.data);
      fetchData();
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <div>
      
      <div className="box-1">
        <div className="table-1">
          <div className="row-1 header">
            <div className="cell-1">SNo</div>
            <div className="cell-1">Name</div>
            <div className="cell-1">Qualification</div>
            <div className="cell-1">Experience</div>
            
            <div className="cell-1">Delete</div>
          </div>

          {data.map((item, index) => (
            <div className="row-1" key={item.id}>
              <div className="cell-1" data-title="SNo">{item.id}</div>
              <div className="cell-1" data-title="Name">{item.name}</div>
              <div className="cell-1" data-title="Qualification"> {item.qualification} </div>
              <div className="cell-1" data-title="Experience">{item.experience} Years</div>
            
            
              <div className="cell-1" data-title="">
              <button className='del-btn' onClick={() => deleteItem(item.id)}>Delete Person</button>
              </div>
            </div>
          ))}
        </div>
      </div>
   
    </div>
  );
};

export default TestAxios;
