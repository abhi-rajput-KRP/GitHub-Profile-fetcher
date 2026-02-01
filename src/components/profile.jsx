import { useState, useEffect } from "react";

const Profile = () => {
  const [data, setData] = useState({});
  const user = sessionStorage.getItem("username");
  if (!user) {
    window.location.href = '/login';
  }

  fetch(`https://api.github.com/users/${user}`)
    .then(response => response.json())
    .then(data => setData(data))
    .catch(error => alert('Error fetching GitHub profile:', error));
  return (
    <div className="bg-black min-h-screen flex items-center justify-center flex-col gap-4 p-6">
      <div className="bg-gradient-to-br from-zinc-900 via-black to-purple-900/20 p-6 rounded-lg shadow-lg flex flex-col items-center gap-1">
        <h2 className="text-white text-3xl font-bold">Github Profile</h2>
        <img src={data.avatar_url} alt="avatar" className="w-50 rounded-full" />
        <p className="text-white font-semibold">Name : {data.name}</p>
        <p className="text-white font-semibold">User Name : {data.login}</p>
        <p className="text-white font-semibold">{data.bio ? `Bio : ${data.bio}` : "Bio : Not Available"}</p>
        <p className="text-white font-semibold">Followers : {data.followers}</p>
        <button style={{backgroundColor:'#190559',cursor:'pointer'}} className="w-100 text-white py-2 px-4 rounded-lg mt-2" onClick={() => {
          sessionStorage.removeItem("username");
          window.location.href = '/';
        }}>Logout</button>
      </div>
    </div>
  );
}

export default Profile;