import bcrypt from "bcryptjs"

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "doe@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Beth Harmon",
    email: "harmon@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
]

export default users
