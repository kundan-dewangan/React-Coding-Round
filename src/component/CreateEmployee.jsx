import React from 'react'

import { Table } from 'react-bootstrap'
export default function CreateEmployee({ allList, editHandle, deleteHandle }) {
    return (
        <div className="text-success h">
            <Table striped bordered hover className="table-responsive">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>DOB</th>
                        <th>Designation</th>
                        <th>Profile Photo</th>
                        <th>Experience</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {allList && allList.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.fNameHandler}</td>
                                <td>{item.lNameHandler}</td>
                                <td>{item.dobHandler}</td>
                                <td>{item.designationHandler}</td>
                                <td><img src={item.profileHandler}  width="60" height="60" alt="img"/></td>
                                <td>{item.experienceHandler}</td>
                                <td>  
                                    <button type="button" className="btn btn-secondary btn-lg text-right   mx-2 mb-5" onClick={() => editHandle(item)}>Edit Employee</button>
                                    <button type="button" className="btn btn-danger btn-lg text-right mx-2 mb-5" onClick={() => deleteHandle(item.id)}>Delete Employee</button>
                                </td>
                            </tr>

                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}
