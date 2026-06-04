import * as repository from "../repositories/overtimeRepository.js";

function registerOvertime(data) {
  if (!data.employeeId) {
    throw new Error("ID do funcionário é obrigatório");
  }

  if (!data.hours || data.hours <= 0) {
    throw new Error("Quantidade de horas inválida");
  }

  const overtime = {
    id: Date.now(),
    employeeId: Number(data.employeeId),
    date: data.date,
    hours: Number(data.hours)
  };

  return repository.create(overtime);
}

function getAllOvertimes() {
  return repository.findAll();
}

function getEmployeeOvertimes(employeeId) {
  return repository.findByEmployeeId(
    Number(employeeId)
  );
}

export {
  registerOvertime,
  getAllOvertimes,
  getEmployeeOvertimes
};