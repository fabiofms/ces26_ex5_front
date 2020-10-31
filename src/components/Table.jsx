import React, {useState} from 'react';

const Table = () => {
  const [customer, setCustomer] = useState()

  const onClickHandler = async () => {
    try {
      const response = await fetch('http://localhost:8081',
        {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json'
          }
        }
      );
      const responseData = await response.json();
      setCustomer(responseData.customers)
      if(!response.ok){
        console.log(responseData.error);
      }
    } catch(err) {
      console.log(err.message);
    }
  }
  return (<div>
      <button
        className='form-field btn' onClick={onClickHandler}>Get Data</button>
      {customer &&
        <table>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
          {customer.map((c, index) => {
            return (
              <tr key={index}>
                <td>{c.name}</td>
                <td>{c.age}</td>
              </tr>)
          })}
        </table>
      }
    </div>
  );
}

export default Table;
