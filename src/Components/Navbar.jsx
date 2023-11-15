import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchUser } from '../Features/userDetailsSlice'


const Navbar = () => {
    const allusers = useSelector((state) => state.app.users);
    const dispatch = useDispatch();
  
    const [searchData, setSearchData] = useState("");
  
    useEffect(() => {
      dispatch(searchUser(searchData));
    }, [searchData]);

    return (
        <div>
            <nav className="navbar navbar-expand-lg" style={{background:'#162a54'}}>
                <div className="container-fluid">
                <img
                src="https://i.postimg.cc/Nj8FM0Qf/Purple-Music-icon-on-transparent-background-PNG.png"
                width="50"
                height="50"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
                    <h4 className="navbar-brand text-white" style={{ textShadow:'revert-layer'}} >
                    <b><i><span>M</span>elophile</i> </b></h4>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link text-white" >
                                    Home
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/read" className="nav-link text-white" >
                                    Applicants({allusers.length})
                                </Link>
                            </li>
                        </ul>
                        <input
                            className="form-control me-2 w-50"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            value={searchData}
                            onChange={(e)=>setSearchData(e.target.value)}
                        />
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar