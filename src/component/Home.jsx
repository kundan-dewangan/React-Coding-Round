import React, { useState } from 'react'
import CreateEmployee from './CreateEmployee'
import { Modal, Button } from 'react-bootstrap'

export default function Home(props) {
    const [createModal, setCreateModal] = useState(false)
    const [fNameHandler, setFNameHandler] = useState('')
    const [lNameHandler, setLNameHandler] = useState('')
    const [dobHandler, setDobHandler] = useState('')
    const [designationHandler, setDesignationHandler] = useState('')
    const [profileHandler, setProfileHandler] = useState('')
    const [experienceHandler, setExperienceHandler] = useState('')
    const [updateFlag, setUpdateFlag] = useState(false)
    const [updateId, setUpdateId] = useState('')

    const [allList, setAllList] = useState([])

    const submitForm = () => {
        if (fNameHandler == "" ||
            lNameHandler == "" ||
            dobHandler == "" ||
            designationHandler == "" ||
            profileHandler == "" ||
            experienceHandler == "") return alert("Please insert all data")

        const allValue = {
            id: Math.random(),
            fNameHandler,
            lNameHandler,
            dobHandler,
            designationHandler,
            profileHandler,
            experienceHandler
        }
        setAllList(prev => ([...prev, allValue]))
        setFNameHandler('')
        setLNameHandler('')
        setDobHandler('')
        setDesignationHandler('')
        setProfileHandler('')
        setExperienceHandler('')
    }

    const editHandle = (data) => {
        setUpdateFlag(true);
        setUpdateId(data.id)
        setFNameHandler(data.fNameHandler)
        setLNameHandler(data.lNameHandler)
        setDobHandler(data.dobHandler)
        setDesignationHandler(data.designationHandler)
        setProfileHandler(data.profileHandler)
        setExperienceHandler(data.experienceHandler)
    }

    const updateForm = () => {
        if (fNameHandler == "" ||
            lNameHandler == "" ||
            dobHandler == "" ||
            designationHandler == "" ||
            profileHandler == "" ||
            experienceHandler == "") return alert("Please insert all data")

        const allValue = {
            id: Math.random(),
            fNameHandler,
            lNameHandler,
            dobHandler,
            designationHandler,
            profileHandler,
            experienceHandler
        }
        const filterData = allList.map(item => {
            if (item.id == updateId) {
                item.fNameHandler = fNameHandler;
                item.lNameHandler = lNameHandler;
                item.dobHandler = dobHandler;
                item.designationHandler = designationHandler
                item.profileHandler = profileHandler;
                item.experienceHandler = experienceHandler;
            }
            return item;
        })
        setAllList(filterData)
        setFNameHandler('')
        setLNameHandler('')
        setDobHandler('')
        setDesignationHandler('')
        setProfileHandler('')
        setExperienceHandler('')
    }

    const deleteHandle = (id) => {

       if(window.confirm("Are you sure! you want to delete this item?")) {
            const filterData = allList.filter(item => item.id != id);
            setAllList(filterData)
        }

       
    }


    return (
        <>
            <button type="button" className="btn btn-primary btn-lg text-right  mb-5" onClick={() => setCreateModal(true)}>Create Employee</button>
            <CreateEmployee allList={allList} editHandle={editHandle} deleteHandle={deleteHandle} />

            <form>
                <div className="row  mt-5">
                    <div className="col-md-6 mt-4">
                        <label> First Name</label>
                        <input type="text" className="form-control" name="fName" value={fNameHandler} onChange={(e) => setFNameHandler(e.target.value)} />
                    </div>
                    <div className="col-md-6 mt-4">
                        <label> Last Name</label>
                        <input type="text" className="form-control" name="fName" value={lNameHandler} onChange={(e) => setLNameHandler(e.target.value)} />
                    </div>
                    <div className="col-md-6 mt-4">
                        <label>DOB </label>
                        <input type="text" className="form-control" name="fName" value={dobHandler} onChange={(e) => setDobHandler(e.target.value)} />
                    </div>
                    <div className="col-md-6 mt-4">
                        <label>Designation </label>
                        <input type="text" className="form-control" name="fName" value={designationHandler} onChange={(e) => setDesignationHandler(e.target.value)} />
                    </div>
                    <div className="col-md-6 mt-4">
                        <label>Profile Photo </label>
                        <input type="text" className="form-control" name="fName" value={profileHandler} onChange={(e) => setProfileHandler(e.target.value)} />
                    </div>
                    <div className="col-md-6 mt-4">
                        <label>Experience </label>
                        <input type="text" className="form-control" name="fName" value={experienceHandler} onChange={(e) => setExperienceHandler(e.target.value)} />
                    </div>
                </div>
                <div className="col-md-6 mt-4">
                    {!updateFlag && <button type="button" className="btn btn-info btn-lg text-right pl-0" onClick={() => submitForm()}>Submit</button>}
                    {updateFlag && <button type="button" className="btn btn-info btn-lg text-right pl-0" onClick={() => updateForm()}>Update</button>}

                </div>
            </form>
        </>
    )
}
