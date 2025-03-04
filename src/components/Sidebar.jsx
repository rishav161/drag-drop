import DraggableElement from "./DraggableElement";
import styled from "styled-components";

const SidebarContainer = styled.div`
  width: 250px;
  background: #002244;
  padding: 20px;
  color: white;
  border-radius: 10px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
  border-bottom: 2px solid white;
  padding-bottom: 5px;
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Title>Elements</Title>
      <DraggableElement type="Text" />
      <DraggableElement type="Image" />
      <DraggableElement type="Button" />
    </SidebarContainer>
  );
};

export default Sidebar;
