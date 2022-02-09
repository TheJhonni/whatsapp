import {
  ChatRounded,
  MoreVertRounded,
  SearchRounded,
} from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import styled from "styled-components";
import * as EmailValidator from "email-validator";

function Sidebar() {
  const createChat = () => {
    const input = prompt(
      "Please enter an email adress for the user you wish to chat with"
    );
    if (!input) return null;
    if (EmailValidator.validate(input)) {
      //   we need to add the chat into the DB CHAT COLLECTIONS thanks to Email Validator
    }
  };

  return (
    <Container>
      <Header>
        <UserAvatar />

        <IconsContainer>
          <IconButton>
            <ChatRounded />
          </IconButton>
          <IconButton>
            <MoreVertRounded />
          </IconButton>
        </IconsContainer>
      </Header>

      <Search>
        <SearchRounded />
        <SearchInput placeholder="Search in chats" />
      </Search>

      <SidebarButton onClick={createChat}>Start a new chat!</SidebarButton>

      {/* LIST OF CHATS (COMPONENT WITH PROPS) */}
    </Container>
  );
}

export default Sidebar;

const Container = styled.div``;

const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  border-radius: 2px;
`;

const SearchInput = styled.input`
  outline-width: 0;
  border: none;
  flex: 1;
`;

const SidebarButton = styled(IconButton)`
  width: 100%;
  &&& {
    border-top: 1px solid whitesmoke;
    border-bottom: 1px solid whitesmoke;
  }
`;

const Header = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 80px;
  border-bottom: 1px solid whitesmoke;
`;

const UserAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

const IconsContainer = styled.div``;
