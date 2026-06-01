function validateEmployee(data) {
  if (!data) {
    throw new Error("Dados não enviados");
  }

  if (!data.name || typeof data.name !== "string") {
    throw new Error("Nome é obrigatório e deve ser texto");
  }

  if (data.role && typeof data.role !== "string") {
    throw new Error("Cargo deve ser texto");
  }

  return true;
}

export {
  validateEmployee
};