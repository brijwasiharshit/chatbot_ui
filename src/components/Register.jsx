import React, { useRef, useState } from "react";
import SignupFormImage from "../assets/images/beyond.png";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "../assets/firebase";
import { doc, setDoc, getDoc } from "firebase/firestore"; // Import getDoc
import useValidateCredentials from "../assets/hooks/useValidateCredentials";
import { useNavigate } from "react-router";

const Register = ({ setFormType }) => {

  const [error, setError] = useState();
  const navigate = useNavigate();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name.current.value, email.current.value, password.current.value);
   
    try {
      // You should use the hook here to validate the credentials.
      const validate = useValidateCredentials({
        name: name.current.value,
        email: email.current.value,
        password: password.current.value
      });

      if (validate) {
        await createUserWithEmailAndPassword(auth, email.current.value, password.current.value);
        const user = auth.currentUser;

        console.log(user);
        if (user) {
          await setDoc(doc(db, "Users", user.uid), {
            name: name.current.value,
            email: user.email
          });
          console.log("User Signed up successfully");
          navigate("/body/company");
        }
      } else {
        setError("Invalid credentials");
      }
    } catch (err) {
      console.log(err);
      setError(err.message); // Change to err.message for better error display
    }
  };

  const gmailAuth = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
  
      console.log(user);
      console.log("User logged in with Gmail");
  
      const userRef = doc(db, "Users", user.uid);
      const userSnap = await getDoc(userRef);
  
      if (!userSnap.exists()) {
        await setDoc(userRef, {
          name: user.displayName || "Unknown User",
          email: user.email,
        });
        console.log("New Google user added to Firestore");
      }
  
      navigate("/body/company"); 
    } catch (error) {
      setError(error.message); // Fix error handling here
      console.error("Google sign-in error:", error);
    }
  };
  

  return (
    <section className="bg-gradient-to-br from-blue-400 to-purple-500 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row max-w-4xl overflow-hidden border-2 border-white">
        {/* Left Side - Signup Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="font-bold text-4xl text-[#002D74] mb-2">Sign Up</h2>
          <p className="text-sm text-gray-600 mb-8">Create an account to get started.</p>

          {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              ref={name}
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#002D74]"
              type="text"
              name="name"
              placeholder="Full Name"
            />
            <input
              ref={email}
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#002D74]"
              type="email"
              name="email"
              placeholder="Email"
            />
            <div className="relative">
              <input
                ref={password}
                className="p-3 rounded-lg border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-[#002D74]"
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>
            <button
              className="bg-[#002D74] text-white py-3 rounded-lg font-semibold hover:bg-[#206ab1] transition-all duration-300 hover:scale-105"
              type="submit"
            >
              Sign Up
            </button>
          </form>

          <div className="mt-6 flex items-center text-gray-400">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-4 text-sm">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <button onClick={gmailAuth} className="bg-white border border-gray-300 py-2 w-full rounded-lg mt-5 flex justify-center items-center text-sm hover:bg-gray-50 transition-all duration-300 hover:scale-105">
            <svg
              className="mr-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="25px"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              />
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              />
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              />
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              />
            </svg>
            Sign Up with Google
          </button>

          <div className="mt-6 text-sm text-gray-600 text-center">
            <p>Already have an account?</p>
            <button
              onClick={() => {
                setFormType(false);
              }}
              className="mt-2 bg-[#002D74] text-white py-2 px-6 rounded-lg font-semibold hover:bg-[#206ab1] transition-all duration-300 hover:scale-105"
            >
              Login
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 hidden md:block">
          <img className="w-full h-full " src={SignupFormImage} alt="Signup" />
        </div>
      </div>
    </section>
  );
};

export default Register;
