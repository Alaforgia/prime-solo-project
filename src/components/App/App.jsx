import React, { useEffect } from "react";
import { HashRouter as Router, Navigate, Routes, Route } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

import AboutPage from "../AboutPage/AboutPage";
import UserPage from "../UserPage/UserPage";
import InfoPage from "../InfoPage/InfoPage";
import LandingPage from "../LandingPage/LandingPage";
import LoginPage from "../LoginPage/LoginPage";
import RegisterPage from "../RegisterPage/RegisterPage";
import PageNotFound from "../../Pages/PageNotFound";

import "./App.css";
import MyRecipes from "../MyRecipe";
import CreateRecipe from "../CreateRecipe";

function App() {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch({ type: "FETCH_USER" });
  }, [dispatch]);

  return (
    <Router>
      <div className="bg-[#f9f6f0] pt-20 lg:pt-[120px] pb-10 lg:pb-20 overflow-hidden">
        <div className="container px-4 relative">
          <Nav />
          <Routes>
            <Route path="/my-recipes" element={<MyRecipes />} />
            <Route index element={<MyRecipes />} />

            <Route path="/create-recipe" element={<CreateRecipe />} />

            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Route path="/" render={() => <Navigate to="/my-recipes" />} />

            {/* Visiting localhost:3000/about will show the about page.
            // shows AboutPage at all times (logged in or not) */}
            <Route exact path="/about" element={<AboutPage />} />

            {/* For protected routes, the view could show one of several things on the same route.
              Visiting localhost:3000/user will show the UserPage if the user is logged in.
              If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
              Even though it seems like they are different pages, the user is always on localhost:3000/user
              // logged in shows UserPage else shows LoginPage */}
            <Route exact path="/user" element={user.id ? <UserPage /> : <LoginPage />} />

            {/* // logged in shows InfoPage else shows LoginPage */}
            <Route exact path="/info" element={user.id ? <InfoPage /> : <LoginPage />} />

            {/* // If the user is already logged in,
            // redirect to the /user page 
            // Otherwise, show the login page*/}
            <Route exact path="/login" element={user.id ? <Navigate to="/user" /> : <LoginPage />} />

            {/* // If the user is already logged in,
            // redirect them to the /user page
            // Otherwise, show the registration page  */}
            <Route exact path="/registration" element={user.id ? <Navigate to="/user" /> : <RegisterPage />} />

            {/* // If the user is already logged in,
            // redirect them to the /user page
            // Otherwise, show the Landing page */}
            <Route exact path="/home" element={user.id ? <Navigate to="/user" /> : <LandingPage />} />

            {/* If none of the other routes matched, we will show a 404. */}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
