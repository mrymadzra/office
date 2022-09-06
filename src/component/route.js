import {Routes, Route} from 'react-router-dom';
import { Login } from './login';
import  Home  from './home';
import  Employee  from './employee';
import  Department  from './department';
import  AddEmployee  from './addemployee';
import  EditEmployee  from './editemployee';
import  AddDepartment  from './adddepartment';
import  EditDepartment  from './editdepartment';

const routes = (
    <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/employee" element={<Employee/>}></Route>
        <Route path="/addemployee" element={<AddEmployee/>}></Route>
        <Route path="/editemployee" element={<EditEmployee/>}></Route>
        <Route path="/department" element={<Department/>}></Route>
        <Route path="/adddepartment" element={<AddDepartment/>}></Route>
        <Route path="/editdepartment" element={<EditDepartment/>}></Route>
    </Routes>
)

export default routes