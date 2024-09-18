import React from "react";
import * as C from "./styles";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebase";

const Message = ({ user, message }) => {
  const [userLoggedIn] = useAuthState(auth);

  // Define as cores baseadas no tipo de mensagem
  const isMyMessage = userLoggedIn?.email === user;
  const messageColor = isMyMessage ? 'black' : 'white'; // Cor da fonte: preto para mensagens enviadas, branco para mensagens recebidas
  const backgroundColor = isMyMessage ? '#eaeaea' : '#a48df7'; // Cor de fundo: cinza para mensagens enviadas, roxo para mensagens recebidas
  const dateColor = isMyMessage ? 'black' : 'white'; // Cor da data: preto para mensagens enviadas, branco para mensagens recebidas

  return (
    <C.Container>
      <C.Line className={isMyMessage ? "me" : "them"}>
        <C.Content bgColor={backgroundColor}>
          <C.Message color={messageColor}>{message.message}</C.Message>
          <C.MessageDate color={dateColor}>
            {new Date(message?.timestamp).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit'
            })}
          </C.MessageDate>
        </C.Content>
      </C.Line>
    </C.Container>
  );
};

export default Message;

