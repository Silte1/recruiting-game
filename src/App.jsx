import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  Outlet
} from "react-router-dom";

import { useState } from "react";
import { Contact, Game, Home, Project, Start, AboutMe } from "./pages/page";
import { EducationAndJobs, HobbyAndInterest, Reward, Skills } from "./component/gameComponent/game";
import Sidebar from "./component/sideBar/Sidebar";
//  import dark from "./images/dark_mode.svg"
// import light from "./images/light_mode.svg"


import './App.css';

function App () {

  const [showNextBtn, setShowNextBtn] = useState(false)
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />

        <Route path="/game" element={<Game />} />
        <Route path="/game/start" element={<Start />} />
        <Route path="/game/education&jobs" element={<EducationAndJobs showNextBtn={showNextBtn} setShowNextBtn={setShowNextBtn} />} />
        <Route path="/game/education&jobs/skills" element={<Skills showNextBtn={showNextBtn} setShowNextBtn={setShowNextBtn} />} />
        <Route path="/game/education&jobs/skills/hobbyAndInterest" element={<HobbyAndInterest showNextBtn={showNextBtn} setShowNextBtn={setShowNextBtn} />} />
        <Route path="/game/education&jobs/skills/hobbyAndInterest/reward" element={<Reward showNextBtn={showNextBtn} setShowNextBtn={setShowNextBtn} />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
        <Route path="/aboutMe" element={<AboutMe />} />

      </Route>
    )
  )
  // const [modeImgSource, setModeImgSource] = useState(light)
  console.log(router)
  return (
    <main >

      <RouterProvider router={router} />
    </main>
  );
}

const Root = () => {
  return (<div className="App">
    <aside className="side">
      <Sidebar />
    </aside>
    <section className="appBody">
      <Outlet />
    </section>

  </div>)
}

export default App;
