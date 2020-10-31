import React, {useState} from 'react'
import Alert from './Alert'

const Form = () => {
  const [error, setError] = useState()
  const [formData, setFormData] = useState({
    name: '',
    age: ''
  });
  const {name, age} = formData;

  const onSubmitHandle = async (e) => {
    e.preventDefault();
    setError();
    if(!Number(age)){
      setError('Age field must be a number');
    } else if(age <= 18) {
      setError('Age must be greater then 18');
    } else {
      const sendData = {name, age}
      setFormData({
        ...formData,
        name: '',
        age: ''
      })
      try {
        const response = await fetch('http://localhost:8081/register',
          {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(sendData)
          }
        );
        const responseData = await response.json();
        if(!response.ok){
          setError(responseData.error);
        }
      } catch(err) {
        setError(err.message);
      }
    }
  }
  const onChangeHandler = e => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  return (
    <div>
      <Alert error={error} />
      <form onSubmit={e => onSubmitHandle(e)}>
        <input
          className='form-field'
          type='text'
          name='name'
          value={name}
          placeholder="Name"
          onChange={e => onChangeHandler(e)} />
        <br />
        <input
          className='form-field'
          type='text'
          name='age'
          value={age}
          placeholder='Age'
          onChange={e => onChangeHandler(e)} />
        <br />
        <input
          className='form-field btn'
          type='submit'
          value='Register' />
      </form>
    </div>
  )
}

export default Form;
