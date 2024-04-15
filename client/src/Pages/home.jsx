import "./home.css"

export const Home = () => {
    return(
        <>
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" crossOrigin="anonymous"></link>
        
    <h1>Digitalized Voting System</h1>
    <div className="container mt-5">
    <h1>Login</h1>
    <form id="loginForm">
      <div className="form-group">
        <label htmlFor="voter-id"><h3>Voter ID</h3></label>
        <input type="text" className="form-control" id="voter-id" name="voter-id" placeholder="Voter id"/>
      </div>
      {/* <div className="form-group">
        <label htmlFor="password"><h3>OTP</h3></label>
        <input type="password" className="form-control" id="password" name="password" placeholder="OTP-6-Digit"/>
      </div> */}
      <div className="container">
        <div className="row">
          {/* <div className="col-6">
            <button type="button" className="btn btn-primary btn-block" id="sendOTPBtn"><b>Send OTP</b></button>
          </div> */}
          <div className="col-6">
            <button type="submit" className="btn btn-primary btn-block"><b>Submit</b></button>
          </div>
        </div>
      </div>
    </form>
  </div>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js"></script>
        </>
    )

}