// import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import "../styles/home.page.css";

function Home() {
  return (
    <>
      {/* <Topbar /> */}
      <div className="homeContainer">
        <Sidebar />
      </div>
    </>
  )
}

export default Home;