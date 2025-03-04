import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DragDropProvider } from "./context/DragDropContext";
import Sidebar from "./components/Sidebar";
import DropZone from "./components/DropZone";
import PropertiesPanel from "./components/PropertiesPanel";


function App() {
  const [showProperties, setShowProperties] = useState(false);

  return (
    <DndProvider backend={HTML5Backend}>
      <DragDropProvider>
        <div className="app-container">
          <Sidebar />
          <div className="dropzone-container">
            <DropZone />
          </div>
          {/* Toggle button for properties panel on mobile */}
          <button 
            className="toggle-btn" 
            onClick={() => setShowProperties(!showProperties)}
          >
            {showProperties ? "Close Properties" : "Show Properties"}
          </button>
          {/* Conditional rendering for properties panel */}
          {showProperties && <PropertiesPanel />}
        </div>
      </DragDropProvider>
    </DndProvider>
  );
}

export default App;
