

function Login() {
  return (

   <div className=" flex-row ">
      <input className="border-2" type="text" placeholder="UserName" />
      <br></br>
      <input className="border-2" type="password" placeholder="Password" />
      <br></br>
      <button className="border-2  bg-slate-800 text-white">
        <a href="/Login">Login</a>
      </button>
    </div>
  )
}

export default Login