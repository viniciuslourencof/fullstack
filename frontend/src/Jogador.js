import GlobalStyle from "./styles/global";
import styled from "styled-components";
import Form from "./components/FormJogadores";
import Grid from "./components/GridJogadores";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";


const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2``;

function Jogador() {

    const [jogadores, setJogadores] = useState([]);
    const [onEdit, setOnEdit] = useState(null);
  
    const getJogadores = async () => {
      try {
        const res = await axios.get("http://localhost:8800/jogador");
        setJogadores(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
      } catch (error) {
        toast.error(error);
      }
    };
  
    useEffect(() => {
      getJogadores();
    }, [setJogadores]);

  return (
    <>
      <Container>
        <Title>Jogadores</Title>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getJogadores={getJogadores} />
        <Grid setOnEdit={setOnEdit} jogadores={jogadores} setJogares={setJogadores} />
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      <GlobalStyle />
    </>
  );
}

export default Jogador;
