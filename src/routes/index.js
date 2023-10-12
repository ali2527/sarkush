import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ClientLayout from "../components/ClientLayout";
import Home from "../views/home"
import AboutUs from "../views/about-us";
import Blog from "../views/blog"
import ContactUs from "../views/contact-us";


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
