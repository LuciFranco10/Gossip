import React from 'react';
import * as C from './styles';
import SidebarHeader from './../SidebarHeader/index';
import SidebarChats from './../SidebarChats/index';
import LogoutIcon from '@mui/icons-material/Logout'; // Importa o ícone
import { auth } from './../../services/firebase'; // Certifique-se de importar corretamente o auth do Firebase

const Sidebar = ({ setUserChat, userchat }) => {

  const handleLogout = async () => {
    try {
      await auth.signOut();
      console.log('Usuário deslogado com sucesso');
      // Aqui você pode redirecionar para a página de login, se necessário
    } catch (error) {
      console.error('Erro ao deslogar:', error);
    }
  };

  return (
    <C.Container>
      <SidebarHeader setUserChat={setUserChat} />
      <SidebarChats setUserChat={setUserChat} userchat={userchat} />
      <C.LogoutButton onClick={handleLogout}>
        <LogoutIcon style={{ color: '#013a63', fontSize: 35 }} />  {/* Ícone com cor roxa */}
      </C.LogoutButton>
    </C.Container>
  );
};

export default Sidebar;



