
import { Outlet, Link } from "react-router-dom";
export default function App() {
  return (
    <div>
              <h3>Header</h3>
        <nav>
            <ul>
              <li>
                  <Link to="/Page1">Page1</Link>
              </li>
              <li>
                  <Link to="/Page2">Page2</Link>
              </li>
              <li>
                  <Link to="/Page3">Page3</Link>
              </li>
              <li>
                  <Link to="/Page4">Page4</Link>
              </li>
              <li>
                  <Link to="/Page5">Page5</Link>
              </li>
            </ul>
        </nav>
        <Outlet />
    </div>
  );
}
