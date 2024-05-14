import React from 'react';
import { useParams } from 'react-router-dom';
import vacanciesData from '../../../../data/data.json'

export const JobDescription = () => {
  const { jobTitle } = useParams();
  const job = vacanciesData.vacancies.find((job) => job.title === (jobTitle));

  if (!job) {
    return <div>Job not found</div>;
  }

  return (
    <div id='jobdescription'>
        <div className='description-header'>
            <h2>{job.title}</h2>
            
        </div>
        <p>{job.description}</p>
    </div>
  );
};