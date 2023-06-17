import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState();
  const [values, setValues] = useState({});
  async function getUsers() {
    const response = await fetch('https://swapi.dev/api/people');
    const jsonData = await response.json();
    setUsers(jsonData.results);
    console.log(jsonData.results);
  }
  useEffect(() => {
    getUsers();
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setValues((values) => ({ ...values, [e.target.id]: e.target.value }));
  };
  const handleClick = (e) => {
    // <Link to="/planet" />;
    e.preventDefault();
    navigate('/planet');
  };
  return (
    <div className="flex-container">
      <form>
        <div className="flex">
          <label className="label-login" htmlFor="username">
            Name{' '}
          </label>
          <input
            id="username"
            type="text"
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <br />
        <div className="flex">
          <label className="label-password" htmlFor="password">
            Password{' '}
          </label>
          <input
            id="password"
            type="password"
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <br />
        <div>
          <Link to="/planet">
            <button>Submit</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
