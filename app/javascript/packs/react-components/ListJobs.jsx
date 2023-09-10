import React, { useState} from 'react'
import ReactDOM from 'react-dom'

const ListJobs = props => {
  const [jobs, setJobs] = useState([])

  return (
    <div></div>
  )
}


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <CreateJob />,
    document.body.appendChild(document.createElement('div')),
  )
})
