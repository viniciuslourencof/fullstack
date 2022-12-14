import { db } from "../db.js";

export const getJogadores = (_, res) => {
  const q = "SELECT * FROM jogador";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addJogador = (req, res) => {
  const q =
    "INSERT INTO jogador(`nome`, `equipe_idequipe`) VALUES(?)";

  const values = [
    req.body.nome,
    req.body.equipe_idequipe    
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Jogador criado com sucesso.");
  });
};

export const updateJogador = (req, res) => {
  const q =
    "UPDATE jogador SET `nome` = ?, `equipe_idequipe` = ? WHERE `id` = ?";

  const values = [
    req.body.nome,
    req.body.equipe_idequipe    
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Jogador atualizado com sucesso.");
  });
};

export const deleteJogador = (req, res) => {
  const q = "DELETE FROM jogador WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Jogador deletado com sucesso.");
  });
};
