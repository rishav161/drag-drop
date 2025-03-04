import { useDrop } from "react-dnd";
import { useDragDrop } from "../context/DragDropContext";

const DropZone = () => {
  const { elements, setElements, setSelectedElement } = useDragDrop();

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "ELEMENT",
    drop: (item) => {
      setElements((prevElements) => [...prevElements, { ...item, id: Date.now() }]);
    },
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),
  }));

  // Function to remove an element
  const handleRemove = (id) => {
    setElements((prevElements) => prevElements.filter((el) => el.id !== id));
  };

  return (
    <div
      ref={drop}
      style={{
        minHeight: "300px",
        border: "2px dashed gray",
        padding: "1rem",
        background: isOver ? "#e3f2fd" : "#fff",
      }}
    >
      {elements.map((el) => (
        <div
          key={el.id}
          style={{
            padding: "8px",
            border: "1px solid black",
            background: "#ddd",
            marginBottom: "5px",
            cursor: "pointer",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span onClick={() => setSelectedElement(el)}>{el.type}</span>
          <button
            onClick={() => handleRemove(el.id)}
            style={{
              marginLeft: "10px",
              padding: "4px 8px",
              background: "white",
              color: "white",
              border: "none",
              cursor: "pointer",
              borderRadius: "4px",
            }}
          >
            ❌
          </button>
        </div>
      ))}
    </div>
  );
};

export default DropZone;
