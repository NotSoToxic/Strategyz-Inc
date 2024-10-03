import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/landingpage/navigation.jsx";
import { Header } from "./components/landingpage/header.jsx";
import { About } from "./components/landingpage/about.jsx";
import { Contact } from "./components/landingpage/contact.jsx";
import { Buisnesstransformation } from "./components/sub-components/services/consulting/buisnesstransformation.jsx";
import { Consulting } from "./components/sub-components/services/consulting/consulting.jsx";
import { Augmentation } from "./components/sub-components/services/consulting/augmentation.jsx";
import { Ats } from "./components/sub-components/services/software/ats.jsx";
import { Hrms } from "./components/sub-components/services/software/hrms.jsx";
import { Vms } from "./components/sub-components/services/software/vms.jsx";
import { Careers } from "./components/sub-components/carriers/careers.jsx";
import {Applicationform} from "./components/sub-components/carriers/career-subcomponents/application-form.jsx";
// import {ClientForm} from "./components/sub-components/carriers/career-form/client-form.jsx"
import { Locations } from "./components/sub-components/contact/locations.jsx";
import { Info } from "./components/sub-components/contact/info.jsx";
import { Strategyzinfo } from "./components/sub-components/about/strategyzinfo.jsx";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { Analytics } from '@vercel/analytics/react';
import { Vacancies } from "./components/sub-components/carriers/career-subcomponents/vacancies.jsx";
import { JobDescription } from "./components/sub-components/carriers/career-subcomponents/jobDescription.jsx";
import { Hackathon } from "./components/sub-components/learning/hackathon.jsx";
import { Careerplus } from "./components/sub-components/learning/Career+.jsx";
import { Courses } from "./components/sub-components/learning/courses.jsx";
import { Internship } from "./components/sub-components/learning/internships.jsx";

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

          {/* About Page */}
          <Route path="/strategyzinfo" element={<Strategyzinfo/>} />
          
          {/* Services Section */}
          {/* Consulting Pages */}
          <Route path="/buisnesstransformation" element={<Buisnesstransformation />} />
          <Route path="/consulting" element={<Consulting />} />
          <Route path="/augmentation" element={<Augmentation />} />

          {/* Software pages */}
          <Route path="/ats" element={<Ats />}/>
          <Route path="/hrms" element={<Hrms />}/>
          <Route path="/vms" element={<Vms />}/>

          {/* Learning Section */}
          <Route path="/hackathon" element={<Hackathon/>}/>
          <Route path="/careerplus" element={<Careerplus/>}/>
          <Route path="/courses" element={<Courses/>}/>
          <Route path="/internships" element={<Internship/>}/>

          {/* Careers Section  */}
          
          <Route path="/careers" element={<Careers/>} />
          <Route path="/Application-form" element={<Applicationform/>} />
          <Route path="/job/:jobDomain" element={<Vacancies/>} /> 
          <Route path="/job/:jobDomain/:jobId" element={<JobDescription/>} />
          
          {/* Contact  Section */}
          <Route path="/locations" element={<Locations />} />
          <Route path="/info" element={<Info/>} />
        </Routes>
        <Analytics />
      </Router>
    </div>
  );
};

export default App;
