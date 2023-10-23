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
import Items from "./pages/Item/Items";
import AddItem from "./pages/Item/AddItem";
import UpdateItem from "./pages/Item/UpdateItem";
import EquipmentPages from "./pages/EquipmentPage/EquipmentPages";
import AddEquipmentPage from "./pages/EquipmentPage/AddEquipmentPage";
import UpdateEquipmentPage from "./pages/EquipmentPage/UpdateEquipmentPage";
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

          <Route path="/items" element={<Items/>}/>
          <Route path="/addItem" element={<AddItem/>}/>
          <Route path="/updateItem/:item_id" element={<UpdateItem/>}/>

          <Route path="/equipmentPages" element={<EquipmentPages/>}/>
          <Route path="/addEquipmentPage" element={<AddEquipmentPage/>}/>
          <Route path="/updateEquipmentPage/:equipment_page_id" element={<UpdateEquipmentPage/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
