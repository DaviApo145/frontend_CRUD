import { useState } from 'react';
import './App.css';


const data = [
  { name: "Anom", age: 19, gender: "Male" },
  { name: "Megha", age: 19, gender: "Female" },
  { name: "Subham", age: 25, gender: "Male" },
];


function App() {
  const [students, setStudents] = useState(data);
  const [showForm, setShowForm] = useState(false);
  const [nome, setNome] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");


  function elimina(name: string) {
    setStudents(students.filter((student) => student.name !== name));
  }


  function modifica(name: string) {
    const s = students.find((student) => student.name === name);
    if (s) {
      setNome(s.name);
      setAge(s.age);
      setGender(s.gender);
      setShowForm(true);
    }
  }


  function add() {
    const newStudent = { name: nome, age: age, gender: gender };
    const updatedStudents = [...students, newStudent];
    setStudents(updatedStudents);
    setShowForm(false);
  }


  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.name}</td>
                <td>{val.age}</td>
                <td>{val.gender}</td>
                <td>
                  <button onClick={() => elimina(val.name)}>elimina</button>
                  <button onClick={() => modifica(val.name)}>modifica</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={() => setShowForm(true)}>inserisci</button>
      {showForm && (
        <form>
          <label>Name</label>
          <input
            type="text"
            name="name"
            onChange={(e) => setNome(e.target.value)}
            value={nome}
          />


          <label>Age</label>
          <input
            type="text"
            name="age"
            onChange={(e) => setAge(parseInt(e.target.value))}
            value={age}
          />


          <label>Gender</label>
          <select
            name="gender"
            onChange={(e) => setGender(e.target.value)}
            value={gender}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <button onClick={() => add()}>Salva</button>
        </form>
      )}
    </div>
  );
}


export default App;

