import React from 'react'
import { Formik } from 'formik'
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';



const Signup = () => {

  const navigate = useNavigate();

  





  const userSubmit = async (formdata, {resetForm}) => {

    
    // let OrgId = await addOrg();
    // formdata.organisation = OrgId;

    console.log(formdata)
    resetForm()

    const res = await fetch('http://localhost:5000/user/add', {
      method: 'POST',
      body: JSON.stringify(formdata),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    console.log(res.status);

    if (res.status === 200) {
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Signed Successfully'
      })
      navigate('/main/login');
    }

  }


  return (
    <div className='container my-5'>

      <div className="row">

        <div className="col-md-6">
          <img src="https://img.freepik.com/premium-vector/isometric-style-illustration-about-registration-app-login-website-online-game_529804-422.jpg" alt="" style={{ width: '100%' }} />
        </div>

        <div className="col-md-6">

          <div className="card">
            <div className="card-body">
              <h1 className="card-title text-center">CREATE ACCOUNT</h1>

              <Formik
                initialValues={{ name: "",  email: "", password: ""}}
                onSubmit={userSubmit}
              >
                {
                  ({ values, handleChange, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>

                      <label>Name</label>
                      <input required type="text" className='form-control mb-3' name="name" onChange={handleChange} value={values.name} />

                      <label>Email</label>
                      <input required type="email" className='form-control mb-3' name="email" onChange={handleChange} value={values.email} />

                      <label>Password</label>
                      <input required type="password" className='form-control mb-3' name="password" onChange={handleChange} value={values.password} />

                      {/* <label>Organisation</label>
                      <input required type="text" className='form-control mb-3' name="organisation" onChange={handleChange} value={values.organisation} /> */}

                      <button type="submit" className="btn btn-primary w-100 mb-3">Submit</button>
                    </form>
                  )
                }
              </Formik>

              <p className='text-center'>Already have account? <Link to='/main/signin'>SignIn</Link></p>


            </div>
          </div>


        </div>



      </div>

    </div>
  )
}

export default Signup