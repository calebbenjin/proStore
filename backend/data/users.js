import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'john@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
  },
  {
    name: 'John Deo',
    email: 'john@example.com',
    password: bcrypt.hashSync('123456', 10)
  },
  {
    name: 'John Deo',
    email: 'john@example.com',
    password: bcrypt.hashSync('123456', 10)
  },
]

export default users