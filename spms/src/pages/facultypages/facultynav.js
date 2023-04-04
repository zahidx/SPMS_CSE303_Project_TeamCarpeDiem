import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/facultycss/facultynav.css';
import { RiDashboardLine } from 'react-icons/ri';
import { DiGoogleAnalytics } from 'react-icons/di';
import { GoGitCompare } from 'react-icons/go';
import { GiAchievement } from 'react-icons/gi';
import { FaQuestion } from 'react-icons/fa';
import { FaUserGraduate } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import {FaBook} from 'react-icons/fa';
import {BiLogOut} from 'react-icons/bi';

function Facultynav() {

  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };
  const [isPloAnalysisOpen, setIsPloAnalysis] = useState(false);
  const [isPloComparisonOpen, setIsPloComparison] = useState(false);
  const [isCoPoAchievementsOpen, setIsCoPoAchievements] = useState(false);
  const [isQuestionBankOpen, setIsQuestionBank] = useState(false);
  const [isCourseOutlinesOpen, setIsCourseOutlines] = useState(false);
  const [isStudentPerformanceOpen, setIsStudentPerformance] = useState(false);
  const [isNewFeaturesOpen, setIsNewFeatures] = useState(false);

  const handleMouseLeave = (setIsClose) => {
    setIsClose(false);
  };
  const handleMouseEnter = (setIsOpen) => {
    setIsOpen(true);
  };


  return (
    <>
      <div className="myheader">
        <h1>Hello MR.X </h1>
      </div>
      <div className="nav-container">
        <button className="nav-toggle" aria-label="Toggle navigation" onClick={handleNavToggle}>
          <span className="nav-toggle-icon"></span>
        </button>
        <nav className={`nav ${isNavOpen ? 'nav-open' : ''}`}>
          <ul>
            <li>
              <h3>
                <RiDashboardLine/>
                <span><Link to="/faculty/dashboard">Dashboard</Link></span>
              </h3>
            </li>
            <li onMouseEnter={()=>handleMouseEnter(setIsPloAnalysis)} onMouseLeave={()=>handleMouseLeave(setIsPloAnalysis)}>
              <h3>
              <DiGoogleAnalytics/>
                <span>Expected PLO Analysis</span>
              </h3>
              {isPloAnalysisOpen && (
                <ul className="dropdown">
                  <li>
                    <Link to="/faculty/plo-analysis-course">Course Wise</Link>
                    <Link to="/faculty/plo-analysis-student">Student Wise</Link>
                    <Link to="/faculty/plo-analysis-program">Program Wise</Link>
                    <Link to="/faculty/plo-analysis-department">Department Wise</Link>
                    <Link to="/faculty/plo-analysis-school">School Wise</Link>
                  </li>
                </ul>
              )
              }
            </li>
            <li onMouseEnter={()=>handleMouseEnter(setIsPloComparison)} onMouseLeave={()=>handleMouseLeave(setIsPloComparison)}>
              
              <h3>
                <GoGitCompare/> 
                <span>PLO Comparison</span></h3> 
              {isPloComparisonOpen && (
                <ul className="dropdown">
                  <li>
                    <Link to="/faculty/plo-comparison-course">Course Wise</Link>
                    <Link to="/faculty/plo-comparison-student">Student Wise</Link>
                  </li>
                </ul>
              )
              }


            </li>
            <li onMouseEnter={
              ()=>handleMouseEnter(setIsCoPoAchievements)} onMouseLeave={()=>handleMouseLeave(setIsCoPoAchievements)
            }>
              <h3>
                <GiAchievement/>
                <span>CO-PO Achievements</span>
                </h3>
              {isCoPoAchievementsOpen && (
                <ul className="dropdown">
                  <li>
                    <Link to="/faculty/co-po-achievements-course">Course Wise</Link>
                    <Link to="/faculty/co-po-achievements-student">Student Wise</Link>
                    <Link to="/faculty/co-po-achievements-program">Program Wise</Link>
                    <Link to="/faculty/co-po-achievements-department">Department Wise</Link>
                  </li>
                </ul>
              )
              }

            </li>
            <li onMouseEnter={()=>handleMouseEnter(setIsQuestionBank)} onMouseLeave={()=>handleMouseLeave(setIsQuestionBank)}>
              <h3>
                <FaQuestion/>
                <span>Question Bank</span>
              </h3>
              {isQuestionBankOpen && (
                <ul className="dropdown">
                  <li>
                    <Link to="/faculty/question-bank-add">Add Question</Link>
                    <Link to="/faculty/question-bank-view">View Question</Link>
                  </li>
                </ul>
              )
              }

            </li>
            <li onMouseEnter={()=>handleMouseEnter(setIsCourseOutlines)} onMouseLeave={()=>handleMouseLeave(setIsCourseOutlines)}>
              <h3>
                <FaBook/>
                <span>Course Outlines</span>
              </h3>
              {isCourseOutlinesOpen && (
                <ul className="dropdown">
                  <li>
                    <Link to="/faculty/course-outlines-add">Add Course Outlines</Link>
                    <Link to="/faculty/course-outlines-view">View Course Outlines</Link>
                    </li>
                    </ul>
                    )
                    }
            </li>
            <li onMouseEnter={()=>handleMouseEnter(setIsStudentPerformance)} onMouseLeave={()=>handleMouseLeave(setIsStudentPerformance)}>
              <h3>
                <FaUserGraduate/>
                <span>Student Performance</span>
              </h3>
              {isStudentPerformanceOpen && (
                <ul className="dropdown">
                  <li>
                    <Link to="/faculty/student-performance-course">Course Wise</Link>
                    <Link to="/faculty/student-performance-program">Program Wise</Link>
                    <Link to="/faculty/student-performance-department">Department Wise</Link>
                    <Link to="/faculty/student-performance-school">School Wise</Link>
                    <Link to="/faculty/student-performance-instructor">Instructor Wise</Link>
                  </li>
                </ul>
              )
              }
            </li>
            <li onMouseEnter={()=>handleMouseEnter(setIsNewFeatures)} onMouseLeave={()=>handleMouseLeave(setIsNewFeatures)}>
              <h3>
                <FaPlus/>
                <span>New Features</span>
              </h3>
              {isNewFeaturesOpen && (
                <ul className="dropdown">
                  <li>
                    <Link to="/faculty/new-features-grade">Add Grade</Link>
                    <Link to="/faculty/new-features-co-percentage">View Co Percentage</Link>
                    </li>
                    </ul>
                    )
                    }
            </li>
            <li className="logout">
              <h3>
                <BiLogOut/>
                <span><Link to="/">Logout</Link></span>
              </h3>
            </li>
          </ul>
          
        </nav>
        <div>
            <Link id="myfooter" to="/">Logout</Link>
          </div>
      </div>
    </>
  );
}
export default Facultynav;
