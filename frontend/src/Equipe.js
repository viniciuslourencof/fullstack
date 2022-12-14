import GlobalStyle from "./styles/global";
import styled from "styled-components";
import Form from "./components/FormEquipe";
import Grid from "./components/GridEquipe";
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

function Equipe() {

    const [equipes, setEquipes] = useState([]);
    const [onEdit, setOnEdit] = useState(null);
  
    const getEquipes = async () => {
      try {
        const res = await axios.get("http://localhost:8800/equipe");
        setEquipes(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
      } catch (error) {
        toast.error(error);
      }
    };
  
    useEffect(() => {
      getEquipes();
    }, [setEquipes]);

  return (
    <>
      <Container>
        <Title>Equipes</Title>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getEquipes={getEquipes} />
        <Grid setOnEdit={setOnEdit} equipes={equipes} setEquipes={setEquipes} />
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      <GlobalStyle />
    </>
  );
}

export default Equipe;
