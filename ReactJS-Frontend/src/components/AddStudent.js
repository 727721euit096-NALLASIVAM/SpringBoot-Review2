import React, { useState, useEffect } from "react";

import { Link, useNavigate, useParams } from "react-router-dom";
// import { useEffect } from "react/cjs/react.development";
import studentService from "../services/student.service";
import './AddStudent.css';

const AddStudent = () => {
    const[name, setName] = useState('');
    const[age, setAge] = useState('');
    const[gender, setGender] = useState('');
    const[college, setCollege] = useState('');
    const[department, setDepartment] = useState('');

    const navigate = useNavigate();
    const {sid} = useParams();

    const saveStudent = (e) => {
        e.preventDefault();
       
        const student = {name, age, gender, college, department, sid};
        if (sid) {
            //update
            studentService.update(student)
                .then(response => {
                    console.log('Student data updated successfully', response.data);
                    navigate.push('/');
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        } else {
            //create
            studentService.create(student)
            .then(response => {
                console.log("Student added successfully", response.data);
                navigate.push("/");
            })
            .catch(error => {
                console.log('something went wrong', error);
            })
        }
    }

    useEffect(() => {
        if (sid) {
            studentService.get(sid)
                .then(student => {
                    setName(student.data.name);
                    setAge(student.data.age);
                    setGender(student.data.gender);
                    setCollege(student.data.college);
                    setDepartment(student.data.department);
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        }
    }, [])
    return(
        <div className="container">
            <h3>Add Student</h3>
            <hr/>
            <form>
                <div className="form-group">
                <label for="name">Name</label>
                    <input
                        type="text"
                        className="form-control col-4"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter Name"
                    />

                </div>
                <label for="age">Age</label>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        placeholder="Enter Age"
                    />

                </div>
                <div className="form-group">
                <label for="gender">Gender</label>
                    <input
                        type="text"
                        className="form-control col-4"
                        id="gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        placeholder="Enter Gender"
                    />
                </div>
                <div >

                <div className="form-group">
                <label for="college">College</label>
                <input
                    type="text"
                    className="form-control col-4"
                    id="college"
                    value={college}
                    onChange={(e) => setCollege(e.target.value)}
                    placeholder="Enter College"
                />

            </div>

            <div className="form-group">
            <label for="department">Department</label>
            <input
                type="text"
                className="form-control col-4"
                id="department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                placeholder="Enter Department"
            />

        </div>


                    <button onClick={(e) => saveStudent(e)} className="btn btn-primary">Save</button>
                </div>
            </form>
            <hr/>
            <Link to="/">Back to List</Link>
        </div>
    )
}

export default AddStudent;