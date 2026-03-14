const admin = [
  {
    id: 1,
    email: "admin@me.com",
    password: "123"
  }
]

const employees = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "employee1@me.com",
    password: "123",
    tasks: [],
    taskNumbers: { active: 0, newTask: 0, completed: 0, failed: 0 }
  },
  {
    id: 2,
    name: "Anjali Verma",
    email: "employee2@me.com",
    password: "123",
    tasks: [],
    taskNumbers: { active: 0, newTask: 0, completed: 0, failed: 0 }
  },
  {
    id: 3,
    name: "Karan Patel",
    email: "employee3@me.com",
    password: "123",
    tasks: [],
    taskNumbers: { active: 0, newTask: 0, completed: 0, failed: 0 }
  },
  {
    id: 4,
    name: "Sneha Reddy",
    email: "employee4@me.com",
    password: "123",
    tasks: [],
    taskNumbers: { active: 0, newTask: 0, completed: 0, failed: 0 }
  },
  {
    id: 5,
    name: "Arjun Kumar",
    email: "employee5@me.com",
    password: "123",
    tasks: [],
    taskNumbers: { active: 0, newTask: 0, completed: 0, failed: 0 }
  }
]

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees))
  localStorage.setItem("admin", JSON.stringify(admin))
}

export const getLocalStorage = () => {

  const employees = JSON.parse(localStorage.getItem("employees"))
  const admin = JSON.parse(localStorage.getItem("admin"))

  return { employees, admin }

}