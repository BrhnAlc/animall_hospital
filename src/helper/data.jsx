export const appointmentData = [
  {
    id: 1,
    patient: "Boncuk",
    day: new Date().toISOString().slice(0, 10),
    consulted: true,
    doctor: "Dr. Zuzu",
  },
  {
    id: 2,
    patient: "Paspas",
    day: new Date().toISOString().slice(0, 10),
    consulted: false,
    doctor: "Dr. Kara ",
  },
  {
    id: 3,
    patient: "Minnoş",
    day: new Date().toISOString().slice(0, 10),
    consulted: true,
    doctor: "Dr. Panki",
  },
  {
    id: 4,
    patient: "Pati",
    day: new Date().toISOString().slice(0, 10),
    consulted: false,
    doctor: "Dr. Olric",
  },
]

export const doctorData = [
  {
    id: 1,
    name: "Dr.Olric",
    dep: "Cardiology",
    img: "./img/dr1.jpg",
  },
  {
    id: 2,
    name: "Dr.  Panki",
    dep: "Radiolgy",
    img: "./img/dr2.jpg",
  },
  {
    id: 3,
    name: "Dr. Kara",
    dep: "Orthopedy",
    img: "./img/dr3.jpg",
  },
  {
    id: 4,
    name: "Dr.Gandalf",
    dep: "Gastroentogoly",
    img: "./img/dr4.jpg",
  },
  {
    id: 5,
    name: "Dr.Zuzu",
    dep: "Surgery",
    img: "./img/dr9.jpg",
  },
  {
    id: 6,
    name: "Dr. Maço",
    dep: "Neurology",
    img: "./img/dr6.jpg",
  },
  {
    id: 7,
    name: "Dr.Tom",
    dep: "Pediatry",
    img: "./img/dr7.jpg",
  },
  {
    id: 8,
    name: "Dr. Schnabel Von Rom",
    dep: "Oncology",
    img: "./img/dr8.jpg",
  },
]
