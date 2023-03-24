import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../../styles/faculty.css'

export const Dashboard = () => {
    const location = useLocation()

  return (
    <div className="faculty-dashboard">
      <div className="faculty-nav">
      <h4>Faculty Navigation</h4>
      <Link to="/faculty/dashboard" className={location.pathname === '/faculty/dashboard' ? 'active' : ''}>Dashboard</Link>
      <Link to="/faculty/results" className={location.pathname === '/faculty/results' ? 'active' : ''}>Results</Link>
      <Link to="/faculty/courses" className={location.pathname === '/faculty/courses' ? 'active' : ''}>Courses</Link>
    </div>
      <div>
        <h1>Faculty Dashboard</h1>
        <p>Welcome to the faculty dashboard!</p>
        {/* Add the content of the faculty dashboard here */}
      </div>
    </div>
  )
}