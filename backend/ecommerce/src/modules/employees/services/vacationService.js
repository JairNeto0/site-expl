import * as repository from "../repositories/vacationRepository.js";

function scheduleVacation(data) {
  if (!data.employeeId) {
    throw new Error("ID do funcionário é obrigatório");
  }

  if (!data.startDate) {
    throw new Error("Data inicial é obrigatória");
  }

  if (!data.endDate) {
    throw new Error("Data final é obrigatória");
  }

  const vacation = {
    id: Date.now(),
    employeeId: Number(data.employeeId),
    startDate: data.startDate,
    endDate: data.endDate,
    status: "Agendada"
  };

  return repository.create(vacation);
}

function getAllVacations() {
  return repository.findAll();
}

function getEmployeeVacations(employeeId) {
  return repository.findByEmployeeId(
    Number(employeeId)
  );
}

export {
  scheduleVacation,
  getAllVacations,
  getEmployeeVacations
};