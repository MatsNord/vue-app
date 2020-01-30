const fakeDatabase = {
  users: [
    {
      id: 1,
      name: "Nisse",
      address: "Nissebo"
    },
    {
      id: 2,
      name: "Assar",
      address: "Assarsund"
    }
  ]
};

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export const get = userId =>
  delay(500).then(() => fakeDatabase.users.filter(user => user.id === userId));

export const getAllUsers = () => delay(500).then(() => fakeDatabase.users);

// User must be of the format { id: <Number>, name: <String>, address: <String> }
export const addUser = user => {
  fakeDatabase.users.concat(user);
  return delay(500).then(() => user);
};
