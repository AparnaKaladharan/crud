import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createUser } from '../Features/userDetailsSlice';
import { useNavigate } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

const Create = () => {

    const [users, setUsers] = useState({});

    const navigate = useNavigate();

    const dispatch=useDispatch();

    const getUserData = (e) => {
        setUsers({ ...users, [e.target.name]: e.target.value });
    };

    const handleSubmit=(e)=>{ 
        e.preventDefault();
        console.log("users...", users);
        dispatch(createUser(users));
        navigate("/read");
    };


    return (    
        <div className='w-100'>
<Row>
        <Col className='mt-1'>
          <h1 className='ms-1 ps-5 mb-5 mt-5 text-primary' >
            Melophile's Contest
          </h1>
          <div className='mb-1 fs-4 ps-5'>
            <a className='text-light' style={{
              textDecoration: 'none', fontFamily: 'Dancing Script, cursive'
            }} href="">
            </a>
            <p className='mt-3 fs-5' style={{color:'white', textAlign:'justify'}}>
            <i>
                Melophile's musical contest for new talented singers those are looking for 
                their career in Singing. With an aim to promote Indian music at the grassroot level on
                 a national scale by identifying and recognizing the new and young talent. Melophile provides 
                 everyone a unique opportunity to display their singing talent and skills and to 
                  gain national recognition. If you wish to be a New emerging artist, singer, or musician, 
                  then participate in the Melophile's musical contest and lend your melodic voice to the world. 
               
            </i> </p>
          </div>
        </Col>
        <Col className='text-center'>
        <img style={{width:'400px'}} 
        src="https://i.postimg.cc/Tw6VWPz0/pngegg.png" alt="" />
        </Col>

      </Row>

      <br /><br />


<div className='mt-5' style={{width:'600px', marginLeft:'350px', borderRadius:'15px', textAlign:'left', background:'#162a54'}}>
               <br />
                <h2 className='my-2 ms-5 mt-5'>Fill The Data To Participate</h2>
                <form class='w-50 mx-auto my-5' onSubmit={handleSubmit}>
                    <div class="mb-3">
                        <label class="form-label">Name: </label>
                        <input type="text" name="name" class="form-control" onChange={getUserData} />
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Email: </label>
                        <input type="email" name="email" class="form-control" onChange={getUserData} />
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Age: </label>
                        <input type="number" name="age" class="form-control" onChange={getUserData} />
                    </div>

                    <div class="mb-3">
                        <h6>Gender: </h6>
                    <input 
                    name="gender" 
                    value="Male" 
                    onChange={getUserData} 
                    class="form-check-input" 
                    type="radio" 
                    />
                    <label class="form-check-label">
                        Male
                    </label>
                </div>
                <div class="mb-3">
                    <input name="gender" value="Female" onChange={getUserData} class="form-check-input" type="radio" checked />
                    <label class="form-check-label" >
                        Female
                    </label>
                </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                    
                </form>
                <br />
</div>
        </div>
    )
}

export default Create