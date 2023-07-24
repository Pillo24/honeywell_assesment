import React from 'react'

export const Modal = ({data, setModal}) => {
  const { userName, email, password, confirm_password,} =data;
  return (
    <div className="card text-white my-3 container">
      <div className="card-body">
        <h4 className="card-title text-center text-info mb-5">VALUES</h4>
        <h4 className="card-title">User Name: {userName}</h4>
        <h4 className="card-title">Email: {email}</h4>
        <h4 className="card-title">Password: {password}</h4>
        <h4 className="card-title">Confirm Password: {confirm_password}</h4>
        <div className="d-grid gap-2 m-5">
          <button className="btn btn-lg btn-danger" type="button"
            onClick={()=>setModal(false)}
          >Close</button>
        </div>
      </div>
    </div>
  )
}
