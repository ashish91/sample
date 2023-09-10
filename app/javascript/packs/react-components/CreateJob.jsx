import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import { Urls } from './urls';
import { postData, getData } from './api';

const CreateJob = props => {
  const  [title, setTitle] =  useState('');
  const  [value, setValue] =  useState('');
  const  [companies, setCompanies] =  useState([]);
  const options = [
    { label: 'The Godfather', id: 1 },
    { label: 'Pulp Fiction', id: 2 },
  ];

  useEffect(() => {
    const getCompanies = async() => {
      const result = await getData(Urls.companies.listUrl);
      setCompanies(result);
    }
    getCompanies();
  }, []);

  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const body = {
      title: title,
      company_id: value
    };
    postData(Urls.jobs.createUrl, body);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Input Value:
        <input  type="text"  value={title} onChange={onTitleChange} placeholder='Title' />
      </label>
      <div>
      <Autocomplete
        disablePortal
        autoHighlight
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        getOptionLabel={(option) => option.name}
        id="select-company"
        options={companies}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Select Company" />}
      />
      </div>

      <button type="submit">Post Job</button>
    </form>
  )
}


document.addEventListener('DOMContentLoaded', () => {
  console.log("Event loaded");
  ReactDOM.render(
    <CreateJob />,
    document.body.appendChild(document.createElement('div')),
  )
})
