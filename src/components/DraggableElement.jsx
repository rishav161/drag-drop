import { useDrag } from "react-dnd";
import styled from "styled-components";

const DragItem = styled.div`
  padding: 10px;
  background: #007bff;
  color: white;
  border-radius: 5px;
  cursor: grab;
  margin-bottom: 8px;
  text-align: center;
  font-weight: bold;
  transition: 0.2s;
  &:hover {
    background: #0056b3;
  }
`;

const DraggableElement = ({ type }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "ELEMENT",
    item: { type },
    collect: (monitor) => ({ isDragging: !!monitor.isDragging() }),
  }));

  return (
    <DragItem ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
      {type}
    </DragItem>
  );
};

export default DraggableElement;
