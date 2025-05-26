import image from './assets/image.jpg';
import { useState, useEffect } from 'react';
//usestate hook ,useeffect hook,re-rendering, conditional rendering ,cleanup,dependancy array
// dependancy array : tells React when to run the side effect logic






function App() {
  return (
    <>
      <PostComponent /> 
     
     
    </>
  );
}

 
function PostComponent() {
  const [status, setStatus] = useState("Checking...");
  const [followersCount, setFollowersCount] = useState(30);
  const username = 'KORMA';
  const [time, setSeconds] = useState(0);
  const [posts, setPosts] = useState([]);
    
 
  const todos =[{     // list of todo
  id :2 ,  title : "go to gym",
   done : true
   
  },
{
  id :1 ,title : "study for an hour",
  done : false
}]

 
   
 const todoscompo = todos.map(todo => <Todo  // render todo
   key = {todo.id}  title= {todo.title} done ={todo.done} 
  />
 )


  // Increment time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Check server status
  useEffect(() => {
    const checkServer = async () => {
      try {
        const res = await fetch("http://localhost:5173", { method: 'GET' });
        setStatus(res.ok ? "Active now" : "Offline");
      } catch (error) {
        setStatus("Offline");
      }
    };

    checkServer();
    const interval = setInterval(checkServer, 10000);
    return () => clearInterval(interval);
  }, []);

  // Increment followers every 20 minutes
  useEffect(() => {
    const followerInterval = setInterval(() => {
      setFollowersCount(prev => prev + 1);
    }, 20 * 60 * 1000);
    return () => clearInterval(followerInterval); // cleanup after unmount of followerInterval
  }, []);

  function addPost() {
    const newPost = {
      id: Date.now(),
      content: "This is a new post!",
      timestamp: time
    };
    setPosts(prev => [newPost, ...prev]);
  }

  function Card({ children }){     // creating an black bg card where card is static but content inside card is dynamic

  return (
     
    <div style={{backgroundColor : 'white', borderRadius : 10, display:'flex',alignItems :'center', padding :40, boxShadow : '2px 2px 5px  rgba(0,0,0,0.9'}}>
{children}
        
    </div>

  )
  
  }


  function Todo({title , done}){  //list and keys

    return (
       
      <div>
        
        {title} - {done? 'done!' : "not done"}
    
      </div>
       
     )

  }




  return (
    <div style={{ backgroundColor: "#566573", height: "100vh", padding: 40, display: 'flex', gap: 20, alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <ProfileComponent
          image={image}
          followerscount={followersCount}
          status={status}
          myname={username}
        />
        <button
          onClick={addPost}
          style={{
            backgroundColor: '#2980b9',
            color: 'white',
            border: 'none',
            borderRadius: 6,
            padding: '8px 12px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Create Post
        </button>
      </div>
      <Post myname={username} time={time} posts={posts} />
       <Card> 
       <div>hi there</div>
        </Card>
     {todoscompo}


    </div>
  );
}

function ProfileComponent({ image, followerscount, status, myname }) {
  return (
    <div
      style={{
        width: 250,
        borderRadius: 15,
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        padding: 15,
        display: 'flex',
        alignItems: 'center',
        gap: 15,
        backgroundColor: '#d0d3d4',
        marginBottom: 20,
      }}
    >
      <img
        src={image}
        alt="Profile"
        style={{
          width: 50,
          height: 50,
          borderRadius: '50%',
          objectFit: 'cover',
        }}
      />
      <div>
        <b style={{ fontSize: 16, color: 'black' }}>{myname}</b>
        <div style={{ fontSize: 13, color: '#555' }}>{followerscount} followers</div>
        <div style={{ display: 'flex', alignItems: 'center', marginTop: 4 }}>
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              backgroundColor: status === "Active now" ? 'green' : 'gray',
              display: 'inline-block',
              marginRight: 6,
            }}
          ></span>
          <span style={{ fontSize: 12, color: status === "Active now" ? 'green' : 'gray' }}>
            {status}
          </span>
        </div>
      </div>
    </div>
  );
}

function formatTime(seconds) {
  if (seconds < 5) return `just now`;
  if (seconds < 60) return `${seconds} sec${seconds > 1 ? 's' : ''} ago`;
  const mins = Math.floor(seconds / 60);
  if (mins < 60) return `${mins} min${mins > 1 ? 's' : ''} ago`;
  const hours = Math.floor(mins / 60);
  return `${hours} hour${hours > 1 ? 's' : ''} ago`;
}

function Post({ myname, time, posts }) {
  const [visible, setVisble] = useState(true);
  const toggle = () => setVisble(!visible);

  return (
    <div
      style={{
        padding: 20,
        color: 'white',
        backgroundColor: '#34495e',
        borderRadius: 10,
        width: 300,
        height: 450,
        overflowY: 'auto',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
        <img
          src={image}
          alt="profile"
          style={{ width: 50, height: 50, borderRadius: '50%', objectFit: 'cover' }}
        />
        <div style={{ marginLeft: 10 }}>
          <b>{myname}</b>
          <div style={{ fontSize: 12, color: '#ccc' }}><b>Posted</b> {formatTime(time)}</div>
        </div>
      </div>

      <h3>hello fam</h3>
      <p>This content is now properly on the grey background.</p>

      <button onClick={toggle}>toggle</button>
      {visible && <p>hy there</p>}

      <hr style={{ margin: '10px 0', borderColor: '#999' }} />

      <h4>Posts</h4>
      {posts.length === 0 && <p style={{ color: '#aaa' }}>No posts yet</p>}
      {posts.map(post => (
        <div key={post.id} style={{ background: '#2c3e50', padding: 10, borderRadius: 8, marginBottom: 10 }}>
          <p>{post.content}</p>
          <small style={{ color: '#bbb' }}>{formatTime(time - post.timestamp)}</small>
        </div>
      ))}
    </div>
  );

  
}

// 8.childrens : allow you to pass elements or componets to the other components







export default App;
