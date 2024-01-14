const ROLE = {
  ADMIN: "admin",
  BASIC: "basic",
};

module.exports = {
  ROLE: ROLE,
  users: [
    { id: 1, name: "Samir", role: ROLE.ADMIN },
    { id: 2, name: "Amir", role: ROLE.BASIC },
    { id: 3, name: "Damir", role: ROLE.BASIC },
  ],
  projects: [
    { id: 1, name: "Samir's project", userId: 1 },
    { id: 2, name: "Amir's project", userId: 2 },
    { id: 3, name: "Damir's project", userId: 3 },
  ],
};
