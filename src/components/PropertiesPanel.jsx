import { useState } from "react";
import { useDragDrop } from "../context/DragDropContext";

const PropertiesPanel = () => {
  const { elements, setElements, selectedElement, setSelectedElement } = useDragDrop();
  const [text, setText] = useState("");

  // Update the selected element's text
  const handleSave = () => {
    setElements(
      elements.map((el) => 
        el.id === selectedElement.id ? { ...el, type: text } : el
      )
    );
    setSelectedElement(null); // Close panel after saving
  };

  if (!selectedElement) return null; // Hide panel if no element is selected

  return (
    <div style={{ padding: "1rem", borderLeft: "2px solid gray", width: "250px", background: "#f8f9fa" }}>
      <h3>Edit Element</h3>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Enter text"
        style={{ padding: "8px", width: "100%", marginBottom: "10px" }}
      />
      <button onClick={handleSave} style={{ padding: "8px", background: "blue", color: "white", border: "none", cursor: "pointer" }}>
        Save
      </button>
    </div>
  );
};

export default PropertiesPanel;
