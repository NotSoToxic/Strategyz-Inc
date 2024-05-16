import React from 'react';
import { useParams } from 'react-router-dom';
import vacanciesData from '../../../../data/data.json';
import { Link } from 'react-router-dom';

export const Vacancies = () => {
  const { jobDomain } = useParams();
  const filteredJobs = vacanciesData.vacancies.filter((job) => job.domain === (jobDomain));

  

  return (
    <div id='vacancies'>
        <div className='vacancies-header'>
            <h2>Roles in {jobDomain}</h2>
            <div className="job-container">                       
              {filteredJobs.map((job) => (
                <div key={job.domain} className="job-card">
                  <h4>{job.title}</h4>
                  <p>{job.description}</p>
                  <Link to={`/job/${jobDomain}/${job.title}`}>Apply now</Link>
                </div>
              ))}
            </div>
        </div>
    </div>
  );
};

