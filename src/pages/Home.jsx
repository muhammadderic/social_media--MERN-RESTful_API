// import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import "../styles/home.page.css";

function Home() {
  return (
    <>
      {/* <Topbar /> */}
      <div className="homeContainer">
        <Sidebar />
        <Feed />
      </div>
    </>
  )
}

export default Home;