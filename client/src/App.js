import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Characters from "./pages/Character/Characters";
import AddCharacter from "./pages/Character/AddCharacter";
import UpdateCharacter from "./pages/Character/UpdateCharacter";
import Quests from "./pages/Quest/Quests";
import AddQuest from "./pages/Quest/AddQuest";
import UpdateQuest from "./pages/Quest/UpdateQuest";
import Index from "./pages/index";
import "./style.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index/>}/>
          <Route path="/characters" element={<Characters/>}/>
          <Route path="/addCharacter" element={<AddCharacter/>}/>
          <Route path="/updateCharacter/:character_id" element={<UpdateCharacter/>}/>
          <Route path="/quests" element={<Quests/>}/>
          <Route path="/addQuest" element={<AddQuest/>}/>
          <Route path="/updateQuest/:quest_id" element={<UpdateQuest/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
