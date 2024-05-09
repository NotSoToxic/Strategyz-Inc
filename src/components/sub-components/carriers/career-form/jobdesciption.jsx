import React from 'react';
import { useParams } from 'react-router-dom';
import jobData from '../../../../data/data.json'

export const JobDescription = () => {
  const { jobId } = useParams();
  const job = jobData.jobs.find((job) => job.id === parseInt(jobId));

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

