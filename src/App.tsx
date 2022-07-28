import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/profile/Profile";
import Messages from "./components/Messages/Messages";
import { BrowserRouter, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <div className="app_wrapper-content">
          <Navbar />
          <div className="app_content">
            <Route path="/profile" component={Profile} />
            <Route path="/messages" component={Messages} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
