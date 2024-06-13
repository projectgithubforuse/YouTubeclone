import React from 'react'
import { useDispatch } from 'react-redux'
import { setCurrentUser } from '../../action/currentUser';
import { BiLogOut } from 'react-icons/bi';
import { GoogleLogout } from 'react-google-login';
import './Auth.css'
import { Link } from 'react-router-dom';
function Auth({User,setAuthBtn,setEditCreateChanelBtn}) {
    const dispatch=useDispatch();
    const onLogOutSuccess=()=>{
        dispatch(setCurrentUser(null));
        alert("log out succesfull");
    }
  return (
    <div className="Auth_container" onClick={()=>setAuthBtn(false)}>
        <div className="Auth_container2">
            <p className="User_Details">
                <div className="Chanel_logo_App">
                    <p className="fstChar_logo_App">
                        {
                            User?.result.name?(
                                <>
                            {User?.result.name.charAt(0).toUpperCase()}
                            </>)
                            :(<>
                            {User?.result.email.charAt(0).toUpperCase()}
                            </>)
                            
                        }
                    </p>
                </div>
                <div className="email_Auth">{User?.result.email}</div>
            </p>
            <div className="btns_Auth">
                {
                    User?.result.name?<>
                    {
                        <Link to={`/chanel/${User?.result._id}`} className='btn_Auth'>
                         Your Chanel
                     </Link>
                    }
                    </>:<>
                    <input type='submit' className='btn_Auth' value="Create Your Chanel"
                onClick={()=>setEditCreateChanelBtn(true)}/>
           
                    </>
                        
                }
              
           
            <div>
            <GoogleLogout
            clientId={"196422092723-ksl5hhdjs5khfor0jfqvmd8rptg0k355.apps.googleusercontent.com"}
            onLogoutSuccess={onLogOutSuccess}
            render={(renderProps)=>(
                <div onClick={renderProps.onClick} className="btn_Auth">
              <BiLogOut />
              Log out
            </div>
            )} 
            />
        </div>
      </div>
    </div>
    
    </div>
  )
}

export default Auth