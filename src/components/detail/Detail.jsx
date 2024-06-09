import { auth } from '../../lib/firebase'
import './detail.css'

const Detail = () => {
  return (
    <div className='detail'>
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h3>Jane Doe</h3>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy % help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className="photo">
            <div className="photoItem">
              <div className="photoDetail">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTndv6bzJC5d4dI4mI0KCk5_Q9U-j0T0SdniQ&s" alt="" />
              <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTndv6bzJC5d4dI4mI0KCk5_Q9U-j0T0SdniQ&s" alt="" />
              <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTndv6bzJC5d4dI4mI0KCk5_Q9U-j0T0SdniQ&s" alt="" />
              <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTndv6bzJC5d4dI4mI0KCk5_Q9U-j0T0SdniQ&s" alt="" />
              <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="" />
            </div>            
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button>Block User</button>
        <button className='logout' onClick={()=>auth.signOut()}>Log out</button>
      </div>
    </div>
  )
}

export default Detail