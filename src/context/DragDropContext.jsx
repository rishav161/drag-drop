import { createContext, useContext, useState } from "react";

const DragDropContext = createContext();

export const DragDropProvider = ({ children }) => {
  const [elements, setElements] = useState([]);
  const [selectedElement, setSelectedElement] = useState(null); // Store selected element

  return (
    <DragDropContext.Provider value={{ elements, setElements, selectedElement, setSelectedElement }}>
      {children}
    </DragDropContext.Provider>
  );
};

export const useDragDrop = () => useContext(DragDropContext);
