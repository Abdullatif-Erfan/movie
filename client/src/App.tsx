import React, { Fragment, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/fonts/font-awesome.min.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Loader from "./components/loader/Loader";
import { NotFound } from "./pages/notFound/NotFound";

// for better performance we should do code splitting
const HomePage = lazy(() => import("./pages/home/Home"));
const DetailsPage = lazy(() => import("./pages/details/DetailsPage"));

const App = () => (
  <Router>
    <Fragment>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/details/:imdbID" element={<DetailsPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </Fragment>
  </Router>
);

export default App;
