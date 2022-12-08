import { Routes, Route } from 'react-router-dom'
import CreateUser from './components/CreateUser'
import EditExercise from './components/EditExercise'
import ExerciseList from './components/ExcerciseList'
import CreateExercise from './components/CreateExercise'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<ExerciseList />}></Route>
          <Route path="/edit/:id" element={<EditExercise />}></Route>
          <Route path="/create" element={<CreateExercise />}></Route>
          <Route path="/user" element={<CreateUser />}></Route>
        </Routes>
      </div>
    </>
  )
}
