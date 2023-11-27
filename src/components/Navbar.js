
import { useUser } from './UserContext';
import Logout from './Logout';
import '../style/Navbar.css'
export default function Navbar() {
   const { user } = useUser();
   return (
      <>
         <header>
            <div class="container">
               <input type="checkbox" name="check" id="check" />
               <div class="logo-container">
                  <h3 class="logo">FreeLancer</h3>
               </div>
               <div class="nav-btn">
                  <div class="nav-links">
                     <ul className="ulist">
                        <li class="nav-link" style={{ "--i": ".6s" }}>
                           <a href="/">Home</a>
                        </li>
                     
                        <li class="nav-link" style={{ "--i": "1.1s" }}>
                           <a href="/find">Find a FreeLancer</a>

                        </li>
                     
                     </ul>
                  </div>
                  {user ? (
                     
                    <ul>
                         <li class="nav-link" style={{"--i": ".85s"}}>
              <a href="#">Profile<i class="fas fa-caret-down"></i></a>
              <div class="dropdown">
                <ul>
                  <li class="dropdown-link">
                    <a href="#">Hello, {user.username}</a>
                  </li>
                
                    <li class="dropdown-link" style={{ "--i": "1.8s" }}>
                      <Logout></Logout>
                     
                  </li>
                  
                 
                  <div class="arrow"></div>
                </ul>
              </div>
            </li>
                    </ul>
                     
                           
                   
                     
                  ) : (
                     <div class="log-sign" style={{ "--i": "1.8s" }}>
                        <a href="/login" className="btn transparent">Log in</a>
                     </div>
                  )}

               </div>
               <div class="hamburger-menu-container">
                  <div class="hamburger-menu">
                     <div></div>
                  </div>
               </div>
            </div>
         </header>
      </>
   )
}