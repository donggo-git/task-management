import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from './pages/Auth/Login'
import SignUp from './pages/Auth/SignUp'
import Dashboard from './pages/Admin/Dashboard'
import ManageTask from './pages/Admin/ManageTask'
import CreateTask from './pages/Admin/CreateTask'
import ManageUser from './pages/Admin/ManageUser'
import UserDashBoard from './pages/User/UserDashboard'
import MyTask from './pages/User/MyTask'
import ViewTaskDetails from './pages/User/ViewTaskDetails'
import PrivateRoute from './routes/PrivateRoute'

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>

          <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
            <Route path="/admin/dashboard" element={<Dashboard />}></Route>
            <Route path="/admin/tasks" element={<ManageTask />}></Route>
            <Route path="/admin/create-task" element={<CreateTask />}></Route>
            <Route path="/admin/users" element={<ManageUser />}></Route>
          </Route>

          <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
            <Route path="/user/dashboard" element={<UserDashBoard />}></Route>
            <Route path="/user/tasks" element={<MyTask />}></Route>
            <Route path="/user/task-detail/:id" element={<ViewTaskDetails />}></Route>
          </Route>

        </Routes>
      </Router>

    </div>
  )
}

export default App
