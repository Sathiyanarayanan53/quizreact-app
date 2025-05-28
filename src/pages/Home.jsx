import React from 'react'
import { useNavigate } from 'react-router-dom'
const Home = ({ user, setUser }) => {
  const navigator=useNavigate();
  const handleSubmit=()=>{
      navigator('/quiz');
  }
  return (
    <div>
      <h1>Welcome to Quiz competation..!</h1>
      <form onSubmit={handleSubmit}>
        <section>
          <label htmlFor="name">Name: </label>
          <input type="text" id='name' name='name' 
          required value={user}
          onChange={(e) => {
            const {value} = e.target;
            setUser(value);
          }} />
          </section>
          <br />
          <button type="submit"
            disabled={user.length === 0}  >Sumbit</button>
      </form>
    </div>
  );
};

export default Home