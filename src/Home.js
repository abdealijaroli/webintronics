function Home() {
   return (
      <div className="home">
         <header>
            <div className="header-content">
               <span>Support : +91 - 9090909090</span>
               <span style={{ color: 'red' }}>Book a FREE Test Ride Now </span>
               <span className="header-nav">
                  <p>Contact</p>
                  <p>Career</p>
                  <p>Media</p><img src="assets/down-arrow.svg" className="down-arrow"></img>
               </span>
            </div>
         </header>
         <div className="navbar">
            <div className="navbar-content">
               <img src="assets/logo.svg"></img>
               <div className="nav-opt">
                  <span className="hover">About</span>
                  <span className="hover">Locate Store</span>
                  <span>Scooters</span><img style={{ width: '10px', margin: '1px 0 0 2px' }} src="assets/down-arrow.svg"></img>
                  <span>Purchase Assistance</span><img style={{ width: '10px', margin: '1px 0 0 2px' }} src="assets/down-arrow.svg"></img>
                  <span className="btn">Dealership</span>
               </div>
            </div>
         </div>
         <div className="row">
            <div className="col-1">

            </div>
            <div className="col-2">

            </div>
         </div>
      </div>
   );
}

export default Home;
