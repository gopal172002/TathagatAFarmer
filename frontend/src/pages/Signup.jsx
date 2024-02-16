import React from 'react';
import Signup from "../components/Signup/Signup.jsx"
import Headers from "../components/Layout/Header.jsx"
import Footer from "../components/Layout/Footer.jsx"
import Bestdeals from "../components/Route/BestDeals/BestDeals.jsx"
// Define a simple React component
const SignupPagePage = () => {
  return (
    <div>
    <Headers activeheading={1}/>
      <Signup/>
      <Footer/>
      <Bestdeals/>
    </div>
  );
};
export default SignupPagePage;