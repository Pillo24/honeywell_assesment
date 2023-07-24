import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { Modal } from './Modal/Modal'

export const HoneywellTest = () => {

  const [modal, setModal] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userName: '',
      email: '',
      password: '',
      confirm_password: '',
    }
  })

  const dataWatch = watch();

  const onSubmit = (data) => {
    console.log(dataWatch);
    setModal(true)
  }

  return (
    <div>
      <h1 className='text-center py-3'>HoneyWellTest: <br/>Jose Luis Gomez Montalvan</h1>
      {
        modal ?

            <Modal
              data={dataWatch}
              setModal={setModal}
            />

          :
          <form onSubmit={handleSubmit(onSubmit)} className='container p-5' >
          <div className="mb-3">
            <div className="mb-3">
              <label htmlFor="userName" className="form-label text-info">User Name</label>
              <input type="text" className="form-control" id="userName" placeholder="Your User Name"
              {...register("userName", {
                required: {
                  value: true,
                  message: 'User Name is required.',
                },
                pattern: {
                  value: /^(\d|\w)+$/,
                  message: 'Avoid blank spaces or special characters'
                }
              })}
              />
            </div>
            <div className="alert alert-danger p-0" role="alert">
              { errors.userName?.message}
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label text-info">Email</label>
              <input type="email" className="form-control" id="Email" placeholder="Your Email"
              {...register("email", {
                required: {
                  value: true,
                  message: 'Email is required.',
                },
                pattern: {
                  value: /(.|\s)*\S(.|\s)*/,
                  message: 'Avoid blank spaces'
                },
                validate: {
                  dotCom: value => {
                    return(
                      value.endsWith(".com") || "Incorrect email format"
                    )
                  }
                }
              })}
              />
            </div>
            <div className="alert alert-danger p-0" role="alert">
              { errors.email?.message}
            </div>
            <div className="mb-3">
              <label htmlFor="Password" className="form-label text-info">Password</label>
              <input type="password" className="form-control" id="Password" placeholder="Your Password"
              {...register("password", {
                required: {
                  value: true,
                  message: 'Password is required.',
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message: "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:"
                }
                })}
                />
            </div>
            <div className="alert alert-danger p-0" role="alert">
              { errors.password?.message}
            </div>
            <div className="mb-3">
              <label htmlFor="Confirm Password" className="form-label text-info">Confirm Password</label>
              <input type="password" className="form-control" id="Confirm Password" placeholder="Your Confirm Password"
              {...register("confirm_password", {
                required: {
                  value: true,
                  message: 'Confirm Password is required.',
                },
                validate: (value) => {
                  if (watch('password') != value) {
                    return "Your passwords do no match";
                  }
                },
                })}
                />
            </div>
            <div className="alert alert-danger p-0" role="alert">
              { errors.confirm_password?.message}
            </div>
          </div>
          <input type="submit" className="mt-5 w-100 btn btn-info" value="Submit"/>
        </form>
      }
    </div>
  )
}
