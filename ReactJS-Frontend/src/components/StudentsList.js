import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import studentService from '../services/student.service';

const StudentList = () => {

  const [students, setStudents] = useState([]);

  const init = () => {
    studentService.getAll()
      .then(response => {
        console.log('Printing employees data', response.data);
        setStudents(response.data);
      })
      .catch(error => {
        console.log('Something went wrong', error);
      }) 
  }

  useEffect(() => {
    init();
  }, []);

  const handleDelete = (sid) => {
    console.log('Printing sid', sid);
    studentService.remove(sid)
      .then(response => {
        console.log('student deleted successfully', response.data);
        init();
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }

  return (
    <div className="container">
      <h3>List of Students</h3>
      <hr/>
      <div>
        <Link to="/add" className="btn btn-primary mb-2">Add Student</Link>
        <table className="table table-bordered text-black table-hover text-center table-striped">
          <thead className="bg-primary">
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>College</th>
              <th>Department</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {
            students.map(student => (
              <tr key={student.sid}>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.gender}</td>
                <td>{student.college}</td>
                <td>{student.department}</td>
                <td>
                  <Link className="btn btn-info" to={`/students/edit/${student.sid}`}>Update</Link>
                  
                  <button className="btn btn-danger ml-2" onClick={() => {
                    handleDelete(student.sid);
                  }}>Delete</button>
                </td>
              </tr>
            ))
          }
          </tbody>
        </table>
        
      </div>
    </div>
  );
}

export default StudentList;