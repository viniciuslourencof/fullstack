import { db } from "../db.js";

export const getEquipes = (_, res) => {
  const q = "SELECT * FROM equipe";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addEquipe = (req, res) => {
  const q =
    "INSERT INTO equipe(`nome`) VALUES(?)";

  const values = [
    req.body.nome,    
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Equipe criada com sucesso.");
  });
};

export const updateEquipe = (req, res) => {
  const q =
    "UPDATE equipe SET `nome` = ? WHERE `idequipe` = ?";

  const values = [
    req.body.nome       
  ]; 

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Equipe atualizada com sucesso.");
  });
};

export const deleteEquipe = (req, res) => {
  const q = "DELETE FROM equipe WHERE `idequipe` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Equipe deletada com sucesso.");
  });
};
