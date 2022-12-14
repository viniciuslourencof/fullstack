import axios from "axios";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

const Label = styled.label``;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
`;

const FormJogador = ({ getJogadores, onEdit, setOnEdit }) => {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const jogadores = ref.current;

      jogadores.nome.value = onEdit.nome;      
      jogadores.equipe_idequipe.value = onEdit.equipe_idequipe;      
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const jogador = ref.current;

    if (
      !jogador.nome.value ||       
      !jogador.equipe_idequipe.value       
    ) {
      return toast.warn("Preencha todos os campos!");
    }

    if (onEdit) {
      await axios
        .put("http://localhost:8800/jogador/" + onEdit.idjogador, {
          nome: jogador.nome.value,          
          equipe_idequipe: jogador.nome.equipe_idequipe          
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));        
    } else {
      await axios
        .post("http://localhost:8800/jogador", {
          nome: jogador.nome.value,
          equipe_idequipe: jogador.nome.equipe_idequipe   
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

    jogador.nome.value = "";    
    jogador.nome.equipe_idequipe = "";    

    setOnEdit(null);
    getJogadores();
  };

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label>Nome</Label>
        <Input name="nome"/>
      </InputArea>     
      <InputArea>
        <Label>Equipe</Label>
        <Input name="equipe_idequipe"/>
      </InputArea>     
      <Button type="submit">SALVAR</Button>
    </FormContainer>
  );
};

export default FormJogador;
