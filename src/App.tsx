import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/profile/Profile";

export default function App() {
  return (
    <div className="app">
      <Header />
      <div className="app_content">
        <Navbar />
        <Profile />
      </div>
    </div>
  );
}
