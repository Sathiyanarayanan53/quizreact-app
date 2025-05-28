import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import Result from './pages/Result'
function App() {
  const [user, setUser] = useState(" ")
  const [score, setScore] = useState(0)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home setUser={setUser} user={user} />} />
          <Route path="/quiz" element={<Quiz setScore={setScore} />}  />
          <Route path="/result" element={<Result user={user} score={score}  />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
