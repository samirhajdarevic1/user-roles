const ROLE = {
  ADMIN: "admin",
  BASIC: "basic",
};

module.exports = {
  ROLE: ROLE,
  users: [
    { id: 1, name: "Samir", role: ROLE.ADMIN },
    { id: 2, name: "Amir", role: ROLE.ADMIN },
    { id: 3, name: "Damir", role: ROLE.ADMIN },
  ],
  projects: [
    { id: 1, name: "Samir's project", userId: 1 },
    { id: 1, name: "Amir's project", userId: 2 },
    { id: 1, name: "Damir's project", userId: 2 },
  ],
};
