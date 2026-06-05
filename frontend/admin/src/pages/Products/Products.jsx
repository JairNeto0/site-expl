import { useState } from "react";

import {
  Typography,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";

const initialProduct = {
  nome: "",
  marca: "",
  preco: "",
  estoque: "",
};

export default function Products() {
  const [products, setProducts] = useState([
    {
      id: 1,
      nome: "Monster Ultra",
      marca: "Monster",
      preco: 12.9,
      estoque: 50,
    },
    {
      id: 2,
      nome: "Red Bull Original",
      marca: "Red Bull",
      preco: 14.9,
      estoque: 35,
    },
    {
      id: 3,
      nome: "TNT Energy",
      marca: "TNT",
      preco: 9.9,
      estoque: 80,
    },
    {
      id: 4,
      nome: "Fusion Tradicional",
      marca: "Fusion",
      preco: 8.9,
      estoque: 100,
    },
  ]);
  const [open, setOpen] = useState(false);
  const [editingProductId, setEditingProductId] = useState(null);
  const [novoProduto, setNovoProduto] = useState(initialProduct);
  const [formError, setFormError] = useState("");

  const totalEstoque = products.reduce(
    (total, product) => total + product.estoque,
    0
  );

  const handleOpenNew = () => {
    setEditingProductId(null);
    setNovoProduto(initialProduct);
    setFormError("");
    setOpen(true);
  };

  const handleEdit = (product) => {
    setEditingProductId(product.id);
    setNovoProduto({
      nome: product.nome,
      marca: product.marca,
      preco: String(product.preco),
      estoque: String(product.estoque),
    });
    setFormError("");
    setOpen(true);
  };

  const handleDelete = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  const handleChange = (field) => (event) => {
    setNovoProduto({
      ...novoProduto,
      [field]: event.target.value,
    });
  };

  const handleClose = () => {
    setEditingProductId(null);
    setNovoProduto(initialProduct);
    setFormError("");
    setOpen(false);
  };

  const handleSave = () => {
    const nome = novoProduto.nome.trim();
    const marca = novoProduto.marca.trim();
    const precoText = novoProduto.preco.trim();
    const estoqueText = novoProduto.estoque.trim();
    const preco = Number(precoText);
    const estoque = Number(estoqueText);

    if (
      !nome ||
      !marca ||
      !precoText ||
      !estoqueText ||
      Number.isNaN(preco) ||
      Number.isNaN(estoque) ||
      preco <= 0 ||
      estoque < 0
    ) {
      setFormError("Preencha nome, marca, preço e estoque corretamente.");
      return;
    }

    const produto = {
      id:
        editingProductId ??
        Math.max(0, ...products.map((product) => product.id)) + 1,
      nome,
      marca,
      preco,
      estoque,
    };

    if (editingProductId) {
      setProducts(
        products.map((product) =>
          product.id === editingProductId ? produto : product
        )
      );
    } else {
      setProducts([...products, produto]);
    }

    setEditingProductId(null);
    setNovoProduto(initialProduct);
    setFormError("");
    setOpen(false);
  };

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Produtos
      </Typography>

      <Button variant="contained" sx={{ mb: 3 }} onClick={handleOpenNew}>
        Novo Energético
      </Button>

      <TableContainer component={Paper} elevation={4}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Produto</TableCell>
              <TableCell>Marca</TableCell>
              <TableCell>Preço</TableCell>
              <TableCell>Estoque</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.id}</TableCell>

                <TableCell>{product.nome}</TableCell>

                <TableCell>{product.marca}</TableCell>

                <TableCell>R$ {product.preco.toFixed(2)}</TableCell>

                <TableCell>{product.estoque}</TableCell>

                <TableCell>
                  <Stack direction="row" spacing={1}>
                    <Button
                      size="small"
                      variant="outlined"
                      onClick={() => handleEdit(product)}
                    >
                      Editar
                    </Button>

                    <Button
                      size="small"
                      color="error"
                      variant="contained"
                      onClick={() => handleDelete(product.id)}
                    >
                      Excluir
                    </Button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Paper
        sx={{
          mt: 4,
          p: 3,
          borderRadius: 3,
        }}
      >
        <Typography variant="h5" gutterBottom>
          Resumo de Estoque
        </Typography>

        <Typography>
          Atualmente existem {products.length} energéticos cadastrados no
          sistema, totalizando {totalEstoque} unidades disponíveis em estoque.
        </Typography>
      </Paper>

      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>
          {editingProductId ? "Editar Energético" : "Novo Energético"}
        </DialogTitle>

        <DialogContent>
          {formError && (
            <Typography color="error" variant="body2" sx={{ mb: 1 }}>
              {formError}
            </Typography>
          )}

          <TextField
            margin="dense"
            label="Nome"
            fullWidth
            value={novoProduto.nome}
            onChange={handleChange("nome")}
          />

          <TextField
            margin="dense"
            label="Marca"
            fullWidth
            value={novoProduto.marca}
            onChange={handleChange("marca")}
          />

          <TextField
            margin="dense"
            label="Preço"
            type="number"
            fullWidth
            value={novoProduto.preco}
            onChange={handleChange("preco")}
          />

          <TextField
            margin="dense"
            label="Estoque"
            type="number"
            fullWidth
            value={novoProduto.estoque}
            onChange={handleChange("estoque")}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>

          <Button variant="contained" onClick={handleSave}>
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
