import React, { useState } from "react";
import logo from "../../public/assets/img/logo.png";
import { useDispatch } from 'react-redux';
import { signUp } from "../actions/AuthAction";

function Auth() {
  const [isSignUp, setisSignUp] = useState(true);
  const [isConfirm,setisConfirm]=useState(true);
  const [data, setData] = useState({
    username: "",
    firstname: "",
    lastname: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  
  
  

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex items-center p-4 rounded-lg">
        <img src={logo} alt="" className="w-28 mx-2" />
        <div className="p-4">
          <p className="font-bold text-3xl mb-4">Social Media</p>
          <p>Explore the ideas throughout the world</p>
        </div>
      </div>
      <div>
        {isSignUp ? (
          <LogIN setisSignUp={setisSignUp} handleChange={handleChange} />
        ) : (
          <SignUP setisSignUp={setisSignUp} handleChange={handleChange}isConfirm={isConfirm} data={data} setisConfirm={setisConfirm}/>
        )}
      </div>
    </div>
  );
}

function SignUP({ setisSignUp, handleChange, isConfirm, data,setisConfirm }) {
  const dispatch=useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.password !== data.confirmpassword) {
     
      setisConfirm(false);
    } else {
      dispatch(signUp(data));
      setisConfirm(true);
      // Proceed with form submission logic here
      console.log("Form submitted successfully", data);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-orange-500 mb-6">
          Sign Up
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="flex gap-4 mb-4">
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              onChange={handleChange}
              className="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              onChange={handleChange}
              className="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <div className="flex gap-4 mb-4">
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              className="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <input
              type="password"
              name="confirmpassword"
              placeholder="Confirm Password"
              onChange={handleChange} // Ensure `handleChange` updates `data.confirmpassword`
              className="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <span className={isConfirm ? "hidden" : "text-red-700"}>
            ** Confirm Password did not match. **
          </span>
          <div
            className="my-2 cursor-pointer"
            onClick={() => setisSignUp(true)}
          >
            Already have an account
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white font-bold py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

function LogIN({ setisSignUp, handleChange }) {
  return (
    <div className="min-h-screen flex items-center justify-center max-w-md">
      <form>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          className="w-full px-4 my-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full px-4 my-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <span
          className="my-4 cursor-pointer"
          onClick={() => setisSignUp(false)}
        >
          New User Registration!
        </span>
        <button
          type="submit"
          className="w-full my-4 bg-orange-500 text-white font-bold py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
        >
          Log In
        </button>
      </form>
    </div>
  );
}

export default Auth;
