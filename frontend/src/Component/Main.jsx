import React from 'react';
import { Link } from 'react-router-dom';


export default function Main() {
  return (
    <div className="dark-theme">
      <div className="container-scroller">
        {/* Navbar */}
        <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
          <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
            <Link className="navbar-brand brand-logo" to="/" style={{ color: 'yellow' }}>
  <span className="text-warning">FitTrack</span>Pro
</Link>


          </div>
          <div className="navbar-menu-wrapper d-flex align-items-stretch">
            <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
              <span className="mdi mdi-menu"></span>
            </button>
            <div className="search-field d-none d-xl-block">
              <form className="d-flex align-items-center h-100" action="#">
                <div className="input-group">
                  <div className="input-group-prepend bg-transparent">
                    <i className="input-group-text border-0 mdi mdi-magnify"></i>
                  </div>
                  <input type="text" className="form-control bg-transparent border-0" placeholder="Search workouts or food..."/>
                </div>
              </form>
            </div>
            <ul className="navbar-nav navbar-nav-right">
              <li className="nav-item nav-profile dropdown">
            <Link className="nav-link dropdown-toggle" id="profileDropdown" to="#" data-toggle="dropdown" aria-expanded="false">
  
</Link>

                <div className="dropdown-menu navbar-dropdown dropdown-menu-right p-0 border-0 font-size-sm" aria-labelledby="profileDropdown">
                  <div className="p-3 text-center bg-primary">
                    <img className="img-avatar img-avatar48 img-avatar-thumb" src="assets/images/faces/face28.png" alt=""/>
                  </div>
                  <div className="p-2">
                    <h5 className="dropdown-header text-uppercase pl-2">User Options</h5>
                    <Link className="dropdown-item py-1 d-flex align-items-center justify-content-between" to="/profile">
                      <span>Profile</span>
                      <i className="mdi mdi-account-outline ml-1"></i>
                    </Link>
                    <Link className="dropdown-item py-1 d-flex align-items-center justify-content-between" to="/settings">
                      <span>Settings</span>
                      <i className="mdi mdi-settings"></i>
                    </Link>
                    <div className="dropdown-divider"></div>
                    <Link className="dropdown-item py-1 d-flex align-items-center justify-content-between" to="/logout">
                      <span>Log Out</span>
                      <i className="mdi mdi-logout ml-1"></i>
                    </Link>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/notifications">
                  <i className="mdi mdi-bell-outline"></i>
                  <span className="count-symbol bg-danger"></span>
                </Link>
              </li>
              <li className="nav-item d-none d-lg-flex align-items-center ml-3">
  <Link to="/login" className="btn btn-dark mr-2">Login</Link>
  <Link to="/reg" className="btn btn-success">Register</Link>
</li>
            </ul>
            <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
              <span className="mdi mdi-menu"></span>
            </button>
          </div>
        </nav>

        {/* Sidebar */}
        <div className="container-fluid page-body-wrapper">
          <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <ul className="nav">
              <li className="nav-item nav-category">Main</li>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">
                  <span className="icon-bg"><i className="mdi mdi-chart-areaspline menu-icon"></i></span>
                  <span className="menu-title">Dashboard</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/work">
                  <span className="icon-bg"><i className="mdi mdi-dumbbell menu-icon"></i></span>
                  <span className="menu-title">Workouts</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/food">
                  <span className="icon-bg"><i className="mdi mdi-nutrition menu-icon"></i></span>
                  <span className="menu-title">Nutrition</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pro">
                  <span className="icon-bg"><i className="mdi mdi-chart-line menu-icon"></i></span>
                  <span className="menu-title">Progress</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/goals">
                  <span className="icon-bg"><i className="mdi mdi-flag-checkered menu-icon"></i></span>
                  <span className="menu-title">Goals</span>
                </Link>
              </li>
              
              <li className="nav-item nav-category mt-3">Community</li>
              <li className="nav-item">
                <Link className="nav-link" to="/community">
                  <span className="icon-bg"><i className="mdi mdi-account-group menu-icon"></i></span>
                  <span className="menu-title">Community</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/challenges">
                  <span className="icon-bg"><i className="mdi mdi-trophy-award menu-icon"></i></span>
                  <span className="menu-title">Challenges</span>
                </Link>
              </li>
              
              <li className="nav-item sidebar-user-actions mt-4">
                <div className="sidebar-user-menu">
                  <Link to="/settings" className="nav-link"><i className="mdi mdi-settings menu-icon"></i>
                    <span className="menu-title">Settings</span>
                  </Link>
                </div>
              </li>
              <li className="nav-item sidebar-user-actions">
                <div className="sidebar-user-menu">
                  <Link to="/support" className="nav-link"><i className="mdi mdi-help-circle menu-icon"></i>
                    <span className="menu-title">Support</span>
                  </Link>
                </div>
              </li>
              <li className="nav-item sidebar-user-actions">
                <div className="sidebar-user-menu">
                  <Link to="/logout" className="nav-link"><i className="mdi mdi-logout menu-icon"></i>
                    <span className="menu-title">Log Out</span>
                  </Link>
                </div>
              </li>
            </ul>
          </nav>
          
          {/* Main Content */}
          <div className="main-panel">
            <div className="content-wrapper">
              {/* Welcome Banner */}
              <div className="row">
                <div className="col-12">
                  <div className="welcome-banner p-4 bg-dark-gradient rounded">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <h2 className="text-dark">Welcome back, Fitness Enthusiast!</h2>
                        <p className="text-dark">Track your fitness journey and achieve your goals</p>
                      </div>
                      <div>
                        <Link to="/work" className="btn btn-warning mr-2">
                          <i className="mdi mdi-plus"></i> Add Workout
                        </Link>
                        <Link to="/food" className="btn btn-warning">
                          <i className="mdi mdi-food"></i> Log Meal
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Stats Overview */}
              <div className="row mt-4">
                <div className="col-xl-3 col-lg-6 col-sm-6 grid-margin stretch-card">
                  <div className="card bg-dark">
                    <div className="card-body text-center">
                      <h5 className="mb-2 text-light font-weight-normal">Today's Calories</h5>
                      <h2 className="mb-4 text-white font-weight-bold">1,850</h2>
                      <div className="dashboard-progress dashboard-progress-1 d-flex align-items-center justify-content-center item-parent">
                        <i className="mdi mdi-fire icon-md absolute-center text-primary"></i>
                      </div>
                      <p className="mt-4 mb-0 text-muted">Remaining</p>
                      <h3 className="mb-0 font-weight-bold mt-2 text-white">450</h3>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-sm-6 grid-margin stretch-card">
                  <div className="card bg-dark">
                    <div className="card-body text-center">
                      <h5 className="mb-2 text-light font-weight-normal">Workouts This Week</h5>
                      <h2 className="mb-4 text-white font-weight-bold">4</h2>
                      <div className="dashboard-progress dashboard-progress-2 d-flex align-items-center justify-content-center item-parent">
                        <i className="mdi mdi-dumbbell icon-md absolute-center text-success"></i>
                      </div>
                      <p className="mt-4 mb-0 text-muted">Last workout</p>
                      <h3 className="mb-0 font-weight-bold mt-2 text-white">2 days ago</h3>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-sm-6 grid-margin stretch-card">
                  <div className="card bg-dark">
                    <div className="card-body text-center">
                      <h5 className="mb-2 text-light font-weight-normal">Current Weight</h5>
                      <h2 className="mb-4 text-white font-weight-bold">78.5 kg</h2>
                      <div className="dashboard-progress dashboard-progress-3 d-flex align-items-center justify-content-center item-parent">
                        <i className="mdi mdi-scale-bathroom icon-md absolute-center text-info"></i>
                      </div>
                      <p className="mt-4 mb-0 text-muted">Change this month</p>
                      <h3 className="mb-0 font-weight-bold mt-2 text-white">-1.2 kg</h3>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-sm-6 grid-margin stretch-card">
                  <div className="card bg-dark">
                    <div className="card-body text-center">
                      <h5 className="mb-2 text-light font-weight-normal">Water Intake</h5>
                      <h2 className="mb-4 text-white font-weight-bold">2.1 L</h2>
                      <div className="dashboard-progress dashboard-progress-4 d-flex align-items-center justify-content-center item-parent">
                        <i className="mdi mdi-cup-water icon-md absolute-center text-warning"></i>
                      </div>
                      <p className="mt-4 mb-0 text-muted">Daily goal</p>
                      <h3 className="mb-0 font-weight-bold mt-2 text-white">2.5 L</h3>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Recent Activity */}
              <div className="row">
                <div className="col-12 grid-margin">
                  <div className="card bg-dark">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <h4 className="card-title text-white">Recent Activity</h4>
                        <Link to="/activity" className="btn btn-sm btn-outline-light">View All</Link>
                      </div>
                      <div className="table-responsive">
                        <table className="table table-dark">
                          <thead>
                            <tr>
                              <th>Date</th>
                              <th>Activity</th>
                              <th>Type</th>
                              <th>Details</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Today, 08:30 AM</td>
                              <td>Morning Run</td>
                              <td><span className="badge badge-primary">Cardio</span></td>
                              <td>5.2 km in 28:15</td>
                            </tr>
                            <tr>
                              <td>Yesterday, 07:15 PM</td>
                              <td>Chest & Triceps</td>
                              <td><span className="badge badge-success">Strength</span></td>
                              <td>12 exercises, 45 min</td>
                            </tr>
                            <tr>
                              <td>Yesterday, 12:30 PM</td>
                              <td>Lunch</td>
                              <td><span className="badge badge-info">Nutrition</span></td>
                              <td>Grilled chicken, rice, veggies - 650 kcal</td>
                            </tr>
                            <tr>
                              <td>2 days ago, 06:45 AM</td>
                              <td>Yoga Session</td>
                              <td><span className="badge badge-warning">Flexibility</span></td>
                              <td>30 min morning flow</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Workout and Nutrition Progress */}
              <div className="row">
                <div className="col-md-6 grid-margin stretch-card">
                  <div className="card bg-dark">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <h4 className="card-title text-white">Weekly Workouts</h4>
                        <div className="dropdown">
                          <button className="btn btn-sm btn-outline-light dropdown-toggle" type="button" id="workoutDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            This Week
                          </button>
                          <div className="dropdown-menu" aria-labelledby="workoutDropdown">
                            <Link className="dropdown-item" to="#">This Week</Link>
                            <Link className="dropdown-item" to="#">Last Week</Link>
                            <Link className="dropdown-item" to="#">This Month</Link>
                          </div>
                        </div>
                      </div>
                      <canvas id="workout-chart" height="200"></canvas>
                      <div className="mt-4">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <div className="text-muted">Workout Completion</div>
                          <div className="text-success">80%</div>
                        </div>
                        <div className="progress progress-md">
                          <div className="progress-bar bg-success" role="progressbar" style={{width: '80%'}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 grid-margin stretch-card">
                  <div className="card bg-dark">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <h4 className="card-title text-white">Nutrition Breakdown</h4>
                        <div className="dropdown">
                          <button className="btn btn-sm btn-outline-light dropdown-toggle" type="button" id="nutritionDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Today
                          </button>
                          <div className="dropdown-menu" aria-labelledby="nutritionDropdown">
                            <Link className="dropdown-item" to="#">Today</Link>
                            <Link className="dropdown-item" to="#">Yesterday</Link>
                            <Link className="dropdown-item" to="#">This Week</Link>
                          </div>
                        </div>
                      </div>
                      <canvas id="nutrition-chart" height="200"></canvas>
                      <div className="mt-4">
                        <div className="row text-center">
                          <div className="col-4 border-right">
                            <h4 className="text-white font-weight-bold">1,850</h4>
                            <small className="text-muted">Calories</small>
                          </div>
                          <div className="col-4 border-right">
                            <h4 className="text-white font-weight-bold">145g</h4>
                            <small className="text-muted">Protein</small>
                          </div>
                          <div className="col-4">
                            <h4 className="text-white font-weight-bold">210g</h4>
                            <small className="text-muted">Carbs</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Quick Actions */}
              <div className="row">
                <div className="col-12">
                  <div className="card bg-dark">
                    <div className="card-body">
                      <h4 className="card-title text-white mb-4">Quick Actions</h4>
                      <div className="row">
                        <div className="col-md-3 col-6 mb-4">
                          <Link to="/work" className="btn btn-block btn-outline-primary py-3">
                            <i className="mdi mdi-dumbbell icon-lg"></i>
                            <span className="d-block mt-2">Add Workout</span>
                          </Link>
                        </div>
                        <div className="col-md-3 col-6 mb-4">
                          <Link to="/food" className="btn btn-block btn-outline-success py-3">
                            <i className="mdi mdi-food icon-lg"></i>
                            <span className="d-block mt-2">Log Meal</span>
                          </Link>
                        </div>
                        <div className="col-md-3 col-6 mb-4">
                          <Link to="/measurements" className="btn btn-block btn-outline-info py-3">
                            <i className="mdi mdi-ruler icon-lg"></i>
                            <span className="d-block mt-2">Add Measurements</span>
                          </Link>
                        </div>
                        <div className="col-md-3 col-6 mb-4">
                          <Link to="/goals" className="btn btn-block btn-outline-warning py-3">
                            <i className="mdi mdi-flag-checkered icon-lg"></i>
                            <span className="d-block mt-2">Set Goal</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Footer */}
      <footer className="footer bg-dark py-3">
  <div className="container">
    <div className="d-sm-flex justify-content-center justify-content-sm-between">
      <span className="text-light d-block text-center text-sm-left d-sm-inline-block">
        © FitTrackPro 2025
      </span>
      <span className="float-none float-sm-right d-block mt-2 mt-sm-0 text-center">
        <Link to="/terms" className="text-light mx-2">Terms</Link>
        <Link to="/privacy" className="text-light mx-2">Privacy</Link>
        <Link to="/contact" className="text-light mx-2">Contact</Link>
      </span>
    </div>
  </div>
</footer>

          </div>
        </div>
      </div>
    </div>
  );
}