

const LoginPage = () => {
    return (
        <div className=" min-h-screen bg-base-200 pt-40">
        <div className=" flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left"> 
          </div>
          <div className=" shrink-0 w-full max-w-md mx-auto shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" required />
               
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p>New Here? <span>Create a New Account</span></p>
          </div>
        </div>
      </div>
    );
};

export default LoginPage;