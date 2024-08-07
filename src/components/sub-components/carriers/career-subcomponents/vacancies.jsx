import React from 'react';
import { useParams, Link } from 'react-router-dom';
import vacanciesData from '../../../../data/data.json';



export const Vacancies = () => {
  const { jobDomain } = useParams();
  const filteredJobs = vacanciesData.vacancies.filter((job) => job.domain === (jobDomain));

  

  return (
    <div id='vacancies'>
        <div className='vacancies-header'>
            <h1>Roles in {jobDomain}</h1>
          </div>
          <div className='vacancies-body'>
            <div className="job-container">                       
              {filteredJobs.map((job) => (
                <div key={job.domain} className="job-card">
                  <h4>{job.title}</h4>
                  <p>{job.description}</p>
                  <Link to={`/job/${jobDomain}/${job.id}`}>Apply now</Link>
                </div>
              ))}
            </div>
            </div>
            <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2024 Strategyz Inc.
              All Rights Reserved
          </p>
        </div>
      </div>
        </div>
    
  );
};

