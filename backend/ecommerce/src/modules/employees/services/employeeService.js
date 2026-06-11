import * as repository from "../repositories/employeeRepository.js";
import { validateEmployee } from "../schemas/employeeSchema.js";

function createEmployee(data) {
  validateEmployee(data);

  const newEmployee = {
    id: Date.now(),
    name: data.name,
    role: data.role || "default"
  };

  return repository.create(newEmployee);
}

function getEmployees() {
  return repository.findAll();
}

function getEmployeeById(id) {
  return repository.findById(id);
}

export {
  createEmployee,
  getEmployees,
  getEmployeeById
};