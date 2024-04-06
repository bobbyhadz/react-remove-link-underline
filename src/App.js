import './App.css';

import {BrowserRouter as Router, Link} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div>
        <Link style={{textDecoration: 'none'}} to="/">
          Home
        </Link>

        <br />

        <a
          style={{textDecoration: 'none'}}
          href="google.com"
          target="_blank"
        >
          Google.com
        </a>
      </div>
    </Router>
  );
}
