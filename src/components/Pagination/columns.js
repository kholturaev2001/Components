export default [
  { name: "id", label: "№", minWidth: 30 },
  { name: "fullName", label: "ФИО", minWidth: 170 },
  {
    name: "phone",
    label: "Номер телефона",
    minWidth: 170,
    align: "center",
    format: value => value.toLocaleString("en-US")
  },
  {
    name: "status",
    label: "Роли",
    minWidth: 140,
    alight: "center"
  }
];
