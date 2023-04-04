import Facultynav from './facultynav';
import '../../styles/facultycss/faculty.css';

 export function Faculty() {
  return (
    <div>
      <Facultynav/>
      <div className="main-content">
        <h1>Faculty Page</h1>
        <p>Welcome to the faculty page!
        </p>
      </div>
    </div>
  );
}
