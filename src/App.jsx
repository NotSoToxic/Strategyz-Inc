import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Buisnesstransformation } from "./components/sub-components/services/consulting/buisnesstransformation.jsx";
import { Consulting } from "./components/sub-components/services/consulting/consulting.jsx";
import { Augmentation } from "./components/sub-components/services/consulting/augmentation.jsx";
import { Ats } from "./components/sub-components/services/software/ats.jsx";
import { Hrms } from "./components/sub-components/services/software/hrms.jsx";
import { Vms } from "./components/sub-components/services/software/vms.jsx";
import { Careers } from "./components/sub-components/carriers/careers.jsx";
import {InternalForm} from "./components/sub-components/carriers/career-form/internal-form.jsx";
import {ClientForm} from "./components/sub-components/carriers/career-form/client-form.jsx"
import { Locations } from "./components/sub-components/contact/locations.jsx";
import { Info } from "./components/sub-components/contact/info.jsx";
import { Strategyzinfo } from "./components/sub-components/about/strategyzinfo.jsx";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { Analytics } from '@vercel/analytics/react';



export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Router>
        <Navigation />
        <Routes>
          {/* home page  */}
          <Route path="/" element={<>
            <Header data={landingPageData.Header} />
            <About data={landingPageData.About} />
            <Contact data={landingPageData.Contact} />
            {/* <Gallery data={landingPageData.Gallery} /> */}
          </>} />

            {/* Consulting Pages */}

          {/* Buisness Trasformation page  */}
          <Route path="/buisnesstransformation" element={<Buisnesstransformation />} />

          {/* Tech Consulting page  */}
          <Route path="/consulting" element={<Consulting />} />

          {/* Staff Augmentation page  */}
          <Route path="/augmentation" element={<Augmentation />} />

          {/* Software pages */}

          {/* ATS page  */}
          <Route path="/ats" element={<Ats />}/>

          {/* HRMS page  */}
          <Route path="/hrms" element={<Hrms />}/>

          {/* VMS page  */}
          <Route path="/vms" element={<Vms />}/>

          {/* Careers page  */}
          
          {/* <Route path="/careers" element={<Careers/>} /> */}

          {/*Internal Job form page*/}
          {/* <Route path="/internal-form" element={<InternalForm/>} /> */}
          
          {/*Client Job form page*/}
          {/* <Route path="/client-form" element = {<ClientForm/>} /> */}

          {/* Contact  Pages  */}
          {/* locations */}
          <Route path="/locations" element={<Locations />} />
          {/* contact us */}
          <Route path="/info" element={<Info/>} />

          <Route path="/strategyzinfo" element={<Strategyzinfo/>} />
        </Routes>
        <Analytics />
      </Router>
    </div>
  );
};

export default App;
