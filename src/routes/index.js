import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ClientLayout from "../components/ClientLayout";
import Home from "../views/home"
import AboutUs from "../views/about-us";
import Blog from "../views/blog"
import ContactUs from "../views/contact-us";
import Work from "../views/work"
import { useEffect , useState } from "react";
import ConnectWithUs from "../views/connect-with-us";
import PrivacyPolicy from "../views/privacy-policy"
import Blog1 from "../views/blog-1";
import Blog2 from "../views/blog-2";
import Blog3 from "../views/blog-3";
import Blog4 from "../views/blog-4";
import Blog5 from "../views/blog-5";


const MyRouter = () => {

  
  return (
    <BrowserRouter >
      <Routes>
        <Route
          path="/"
          element={
            <ClientLayout
              head={{ title: "Home", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <Home />
            </ClientLayout>
          }
        />
           <Route
          path="/about-us"
          element={
            <ClientLayout
              head={{ title: "About Us", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <AboutUs />
            </ClientLayout>
          }
        />

<Route
          path="/privacy-policy"
          element={
            <ClientLayout
              head={{ title: "Privacy Policy", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <PrivacyPolicy />
            </ClientLayout>
          }
        />

<Route
          path="/connect-with-us"
          element={
            <ClientLayout
              head={{ title: "About Us", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <ConnectWithUs />
            </ClientLayout>
          }
        />
          <Route
          path="/blog"
          element={
            <ClientLayout
              head={{ title: "Blog", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <Blog/>
            </ClientLayout>
          }
        />
         <Route
          path="/blog/1"
          element={
            <ClientLayout
              head={{ title: "Blog", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <Blog1/>
            </ClientLayout>
          }
        />

<Route
          path="/blog/2"
          element={
            <ClientLayout
              head={{ title: "Blog", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <Blog2/>
            </ClientLayout>
          }
        />

<Route
          path="/blog/3"
          element={
            <ClientLayout
              head={{ title: "Blog", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <Blog3/>
            </ClientLayout>
          }
        />

<Route
          path="/blog/4"
          element={
            <ClientLayout
              head={{ title: "Blog", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <Blog4/>
            </ClientLayout>
          }
        />

<Route
          path="/blog/5"
          element={
            <ClientLayout
              head={{ title: "Blog", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <Blog5/>
            </ClientLayout>
          }
        />
           <Route
          path="/work"
          element={
            <ClientLayout
              head={{ title: "Work", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <Work/>
            </ClientLayout>
          }
        />
           <Route
          path="/contact-us"
          element={
            <ClientLayout
              head={{ title: "Contact Us", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <ContactUs />
            </ClientLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
export default MyRouter;
