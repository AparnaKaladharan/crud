import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, showUser } from '../Features/userDetailsSlice';
import CustomModal from './CustomModal';
import { Link } from 'react-router-dom';

const Read = () => {
    const dispatch = useDispatch();

    const [id, setId] = useState();

    const [radioData, setRadioData] = useState("");

    const [showPopup, setShowPopup] = useState(false);

    const { users, loading, searchData } = useSelector((state) => state.app);

    useEffect(() => {
        dispatch(showUser());
    }, []);

    if (loading) {
        return <h2>Loading</h2>;
    }

    return (
        <div>
            {showPopup && (
                <CustomModal
                    id={id}
                    showPopup={showPopup}
                    setShowPopup={setShowPopup}
                />
            )}
            <h2>All Data</h2>

            <input
                class="form-check-input"
                name="gender"
                checked={radioData === ""}
                type="radio"
                onChange={(e) => setRadioData("")}
            />
            <label class="form-check-label">All </label>
            <input
                class="form-check-input"
                name="gender"
                checked={radioData === "Male"}
                value="Male"
                type="radio"
                onChange={(e) => setRadioData(e.target.value)}
            />
            <label class="form-check-label"> Male </label>
            <input
                class="form-check-input"
                name="gender"
                value="Female"
                checked={radioData === "Female"}
                type="radio"
                onChange={(e) => setRadioData(e.target.value)}
            />
            <label class="form-check-label"> Female</label>


            <div>
                {users &&
                    users.filter((ele) => {
                        if (searchData.length === 0) {
                            return ele;
                        } else {
                            return ele.name
                                .toLowerCase()
                                .includes(searchData.toLowerCase());
                        }
                    })

                    .filter((ele) => {
                        if (radioData === "Male") {
                          return ele.gender === radioData;
                        } else if (radioData === "Female") {
                          return ele.gender === radioData;
                        } else return ele;
                      })

                        .map((ele) => (
                            <div key={ele.id} style={{background:'#4e6596',color:'black' }} className="card w-25 mx-auto my-2" >
                                <div className="card-body">
                                    <h5 className="card-title">{ele.name}</h5>
                                    <h6 className="card-subtitle mb-2 text-body-black text-muted">
                                        {ele.email}</h6>
                                    <p className="card-text">{ele.gender}</p>

                                    <button
                                        className="card-link"
                                        onClick={() => [setId(ele.id), setShowPopup(true)]}>
                                        View
                                    </button>

                                    <Link to={`/edit/${ele.id}`} style={{color:'blue'}} className="card-link">
                                        Edit
                                    </Link>

                                    <Link onClick={() => dispatch(deleteUser(ele.id))}
                                    style={{color:'blue'}}
                                        className="card-link">
                                        Delete
                                    </Link>
                                </div>
                            </div>
                        ))}
            </div>
        </div>
    )
};

export default Read