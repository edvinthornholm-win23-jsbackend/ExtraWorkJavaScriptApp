import Showcase from "./components/main/Showcase";
import DarkLight from "./components/main/DarkLight";
import Download from "./components/main/Download";
import Features from "./components/main/Features";
import Manage from "./components/main/Manage";
import Integrate from "./components/main/Integrate";
// import DontWant from "./components/main/DontWant";





export default function Home() {
  return (
    <main>
<Showcase/>
<Features/>
<DarkLight/>
<Download/>
<Manage/>
<Integrate/>
{/* <DontWant/> */}


    </main>
  );
}
