import { useState } from "react";
import Background from "./components/Background";
import PageOne from "./pages/Instructions";
import PageTwo from "./pages/game/Game";

const App = () => {
  const [currentPage, setCurrentPage] = useState("pageOne");

  const handlePageOneClick = () => {
    setCurrentPage("pageOne");
  };
  const handlePageTwoClick = () => {
    setCurrentPage("pageTwo");
  };
  return (
    <>
      <Background />
      <div>
        <button onClick={handlePageOneClick}>Start Game</button>
        <button onClick={handlePageTwoClick}>New Game</button>
        {currentPage === "pageOne" && <PageOne />}
        {currentPage === "pageTwo" && <PageTwo />}
      </div>
    </>
  );
};
export default App;
