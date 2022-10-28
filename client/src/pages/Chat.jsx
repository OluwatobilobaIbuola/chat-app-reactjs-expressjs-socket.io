import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import styled from "styled-components";
import { ChatContainer } from "../Components/chatContainer/ChatContainer";
import { Contacts } from "../Components/contacts/contacts";
import { Welcome } from "../Components/Welcome";
import { getAllUsers } from "../services/apis/userApis";
import { getUser } from "../utils/helper";
import { base } from "../services/api_constant";

export const Chat = () => {
  const navigate = useNavigate();
  const socket = useRef();
  const [contacts, setContacts] = useState([]);
  const [currentChat, setCurrentChat] = useState(undefined);
  const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(() => {
    const user = getUser();
    if (!user) {
      navigate("/login");
    } else {
      setCurrentUser(user);
    }
  }, []);

  useEffect(() => {
    if (currentUser) {
      socket.current = io(base);
      socket.current.emit("add-user", currentUser._id);
    }
  }, [currentUser]);

  useEffect(() => {
    const getAllUsersCaller = async () => {
      if (currentUser) {
        if (currentUser?.isImageSet) {
          const { data } = await getAllUsers(currentUser._id);
          setContacts(data);
        } else {
          navigate("/setAvatar");
        }
      }
    };
    getAllUsersCaller();
  }, [currentUser]);
  const handleChatChange = (chat) => {
    setCurrentChat(chat);
  };
  return (
    <>
      <Container>
        <div className="container">
          <Contacts contacts={contacts} changeChat={handleChatChange} />
          {currentChat === undefined ? (
            <Welcome />
          ) : (
            <ChatContainer currentChat={currentChat} socket={socket} />
          )}
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  .container {
    height: 85vh;
    width: 85vw;
    background-color: #00000076;
    display: grid;
    grid-template-columns: 25% 75%;
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      grid-template-columns: 35% 65%;
    }
  }
`;
