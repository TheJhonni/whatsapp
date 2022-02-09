import { ChatRounded } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import styled from "styled-components";

function Sidebar() {
  return (
    <Container>
      <Header>
        <UserAvatar />

        <IconsContainer>
          <ChatRounded />
        </IconsContainer>
      </Header>
    </Container>
  );
}

export default Sidebar;

const Container = styled.div``;

const Header = styled.div``;

const UserAvatar = styled(Avatar)`
  margin: 10px;
`;

const IconsContainer = styled.div``;
