import React from "react";

const Employees = () => {
  return (
    <div>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row align-items-center">
              <div className="col">
                <h3 className="page-title">Employee</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="admin-dashboard.html">Dashboard</a>
                  </li>
                  <li className="breadcrumb-item active">Employee</li>
                </ul>
              </div>
              <div className="col-auto float-end ms-auto">
                <a
                  href="#"
                  className="btn add-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#add_employee">
                  <i className="fa fa-plus" /> Add Employee
                </a>
                <div className="view-icons">
                  <a
                    href="employees.html"
                    className="grid-view btn btn-link active">
                    <i className="fa fa-th" />
                  </a>
                  <a
                    href="employees-list.html"
                    className="list-view btn btn-link">
                    <i className="fa fa-bars" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row filter-row">
            <div className="col-sm-6 col-md-3">
              <div className="form-group form-focus">
                <input type="text" className="form-control floating" />
                <label className="focus-label">Employee ID</label>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="form-group form-focus">
                <input type="text" className="form-control floating" />
                <label className="focus-label">Employee Name</label>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="form-group form-focus select-focus">
                <select className="select floating">
                  <option>Select Designation</option>
                  <option>Web Developer</option>
                  <option>Web Designer</option>
                  <option>Android Developer</option>
                  <option>Ios Developer</option>
                </select>
                <label className="focus-label">Designation</label>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="d-grid">
                <a href="#" className="btn btn-success w-100">
                  {" "}
                  Search{" "}
                </a>
              </div>
            </div>
          </div>
          <div className="row staff-grid-row">
            <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
              <div className="profile-widget">
                <div className="profile-img">
                  <a href="profile.html" className="avatar">
                    <img src="assets/images/avatar-02.jpg" alt />
                  </a>
                </div>
                <div className="dropdown profile-action">
                  <a
                    href="#"
                    className="action-icon dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <i className="material-icons">more_vert</i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a
                      className="dropdown-item"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_employee">
                      <i className="fa fa-pencil m-r-5" /> Edit
                    </a>
                    <a
                      className="dropdown-item"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_employee">
                      <i className="fa fa-trash-o m-r-5" /> Delete
                    </a>
                  </div>
                </div>
                <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                  <a href="profile.html">John Doe</a>
                </h4>
                <div className="small text-muted">Web Designer</div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
              <div className="profile-widget">
                <div className="profile-img">
                  <a href="profile.html" className="avatar">
                    <img src="assets/images/avatar-09.jpg" alt />
                  </a>
                </div>
                <div className="dropdown profile-action">
                  <a
                    href="#"
                    className="action-icon dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <i className="material-icons">more_vert</i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a
                      className="dropdown-item"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_employee">
                      <i className="fa fa-pencil m-r-5" /> Edit
                    </a>
                    <a
                      className="dropdown-item"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_employee">
                      <i className="fa fa-trash-o m-r-5" /> Delete
                    </a>
                  </div>
                </div>
                <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                  <a href="profile.html">Richard Miles</a>
                </h4>
                <div className="small text-muted">Web Developer</div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
              <div className="profile-widget">
                <div className="profile-img">
                  <a href="profile.html" className="avatar">
                    <img src="assets/images/avatar-10.jpg" alt />
                  </a>
                </div>
                <div className="dropdown profile-action">
                  <a
                    href="#"
                    className="action-icon dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <i className="material-icons">more_vert</i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a
                      className="dropdown-item"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_employee">
                      <i className="fa fa-pencil m-r-5" /> Edit
                    </a>
                    <a
                      className="dropdown-item"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_employee">
                      <i className="fa fa-trash-o m-r-5" /> Delete
                    </a>
                  </div>
                </div>
                <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                  <a href="profile.html">John Smith</a>
                </h4>
                <div className="small text-muted">Android Developer</div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
              <div className="profile-widget">
                <div className="profile-img">
                  <a href="profile.html" className="avatar">
                    <img src="assets/images/avatar-05.jpg" alt />
                  </a>
                </div>
                <div className="dropdown profile-action">
                  <a
                    href="#"
                    className="action-icon dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <i className="material-icons">more_vert</i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a
                      className="dropdown-item"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_employee">
                      <i className="fa fa-pencil m-r-5" /> Edit
                    </a>
                    <a
                      className="dropdown-item"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_employee">
                      <i className="fa fa-trash-o m-r-5" /> Delete
                    </a>
                  </div>
                </div>
                <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                  <a href="profile.html">Mike Litorus</a>
                </h4>
                <div className="small text-muted">IOS Developer</div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
              <div className="profile-widget">
                <div className="profile-img">
                  <a href="profile.html" className="avatar">
                    <img src="assets/images/avatar-11.jpg" alt />
                  </a>
                </div>
                <div className="dropdown profile-action">
                  <a
                    href="#"
                    className="action-icon dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <i className="material-icons">more_vert</i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a
                      className="dropdown-item"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_employee">
                      <i className="fa fa-pencil m-r-5" /> Edit
                    </a>
                    <a
                      className="dropdown-item"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_employee">
                      <i className="fa fa-trash-o m-r-5" /> Delete
                    </a>
                  </div>
                </div>
                <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                  <a href="profile.html">Wilmer Deluna</a>
                </h4>
                <div className="small text-muted">Team Leader</div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
              <div className="profile-widget">
                <div className="profile-img">
                  <a href="profile.html" className="avatar">
                    <img src="assets/images/avatar-12.jpg" alt />
                  </a>
                </div>
                <div className="dropdown profile-action">
                  <a
                    href="#"
                    className="action-icon dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <i className="material-icons">more_vert</i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a
                      className="dropdown-item"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_employee">
                      <i className="fa fa-pencil m-r-5" /> Edit
                    </a>
                    <a
                      className="dropdown-item"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_employee">
                      <i className="fa fa-trash-o m-r-5" /> Delete
                    </a>
                  </div>
                </div>
                <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                  <a href="profile.html">Jeffrey Warden</a>
                </h4>
                <div className="small text-muted">Web Developer</div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
              <div className="profile-widget">
                <div className="profile-img">
                  <a href="profile.html" className="avatar">
                    <img src="assets/images/avatar-13.jpg" alt />
                  </a>
                </div>
                <div className="dropdown profile-action">
                  <a
                    href="#"
                    className="action-icon dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <i className="material-icons">more_vert</i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a
                      className="dropdown-item"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_employee">
                      <i className="fa fa-pencil m-r-5" /> Edit
                    </a>
                    <a
                      className="dropdown-item"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_employee">
                      <i className="fa fa-trash-o m-r-5" /> Delete
                    </a>
                  </div>
                </div>
                <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                  <a href="profile.html">Bernardo Galaviz</a>
                </h4>
                <div className="small text-muted">Web Developer</div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
              <div className="profile-widget">
                <div className="profile-img">
                  <a href="profile.html" className="avatar">
                    <img src="assets/images/avatar-01.jpg" alt />
                  </a>
                </div>
                <div className="dropdown profile-action">
                  <a
                    href="#"
                    className="action-icon dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <i className="material-icons">more_vert</i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a
                      className="dropdown-item"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_employee">
                      <i className="fa fa-pencil m-r-5" /> Edit
                    </a>
                    <a
                      className="dropdown-item"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_employee">
                      <i className="fa fa-trash-o m-r-5" /> Delete
                    </a>
                  </div>
                </div>
                <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                  <a href="profile.html">Lesley Grauer</a>
                </h4>
                <div className="small text-muted">Team Leader</div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
              <div className="profile-widget">
                <div className="profile-img">
                  <a href="profile.html" className="avatar">
                    <img src="assets/images/avatar-16.jpg" alt />
                  </a>
                </div>
                <div className="dropdown profile-action">
                  <a
                    href="#"
                    className="action-icon dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <i className="material-icons">more_vert</i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a
                      className="dropdown-item"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_employee">
                      <i className="fa fa-pencil m-r-5" /> Edit
                    </a>
                    <a
                      className="dropdown-item"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_employee">
                      <i className="fa fa-trash-o m-r-5" /> Delete
                    </a>
                  </div>
                </div>
                <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                  <a href="profile.html">Jeffery Lalor</a>
                </h4>
                <div className="small text-muted">Team Leader</div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
              <div className="profile-widget">
                <div className="profile-img">
                  <a href="profile.html" className="avatar">
                    <img src="assets/images/avatar-04.jpg" alt />
                  </a>
                </div>
                <div className="dropdown profile-action">
                  <a
                    href="#"
                    className="action-icon dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <i className="material-icons">more_vert</i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a
                      className="dropdown-item"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_employee">
                      <i className="fa fa-pencil m-r-5" /> Edit
                    </a>
                    <a
                      className="dropdown-item"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_employee">
                      <i className="fa fa-trash-o m-r-5" /> Delete
                    </a>
                  </div>
                </div>
                <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                  <a href="profile.html">Loren Gatlin</a>
                </h4>
                <div className="small text-muted">Android Developer</div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
              <div className="profile-widget">
                <div className="profile-img">
                  <a href="profile.html" className="avatar">
                    <img src="assets/images/avatar-03.jpg" alt />
                  </a>
                </div>
                <div className="dropdown profile-action">
                  <a
                    href="#"
                    className="action-icon dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <i className="material-icons">more_vert</i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a
                      className="dropdown-item"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_employee">
                      <i className="fa fa-pencil m-r-5" /> Edit
                    </a>
                    <a
                      className="dropdown-item"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_employee">
                      <i className="fa fa-trash-o m-r-5" /> Delete
                    </a>
                  </div>
                </div>
                <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                  <a href="profile.html">Tarah Shropshire</a>
                </h4>
                <div className="small text-muted">Android Developer</div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
              <div className="profile-widget">
                <div className="profile-img">
                  <a href="profile.html" className="avatar">
                    <img src="assets/images/avatar-08.jpg" alt />
                  </a>
                </div>
                <div className="dropdown profile-action">
                  <a
                    href="#"
                    className="action-icon dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <i className="material-icons">more_vert</i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a
                      className="dropdown-item"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_employee">
                      <i className="fa fa-pencil m-r-5" /> Edit
                    </a>
                    <a
                      className="dropdown-item"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_employee">
                      <i className="fa fa-trash-o m-r-5" /> Delete
                    </a>
                  </div>
                </div>
                <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                  <a href="profile.html">Catherine Manseau</a>
                </h4>
                <div className="small text-muted">Android Developer</div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="add_employee"
          className="modal custom-modal fade"
          role="dialog">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Employee</h5>
                <button
                  type="button"
                  className="close"
                  data-bs-dismiss="modal"
                  aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="col-form-label">
                          First Name <span className="text-danger">*</span>
                        </label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="col-form-label">Last Name</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="col-form-label">
                          Username <span className="text-danger">*</span>
                        </label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="col-form-label">
                          Email <span className="text-danger">*</span>
                        </label>
                        <input className="form-control" type="email" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="col-form-label">Password</label>
                        <input className="form-control" type="password" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="col-form-label">
                          Confirm Password
                        </label>
                        <input className="form-control" type="password" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="col-form-label">
                          Employee ID <span className="text-danger">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="col-form-label">
                          Joining Date <span className="text-danger">*</span>
                        </label>
                        <div className="cal-icon">
                          <input
                            className="form-control datetimepicker"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="col-form-label">Phone </label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="col-form-label">Company</label>
                        <select className="select">
                          <option value>Global Technologies</option>
                          <option value={1}>Delta Infotech</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>
                          Department <span className="text-danger">*</span>
                        </label>
                        <select className="select">
                          <option>Select Department</option>
                          <option>Web Development</option>
                          <option>IT Management</option>
                          <option>Marketing</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>
                          Designation <span className="text-danger">*</span>
                        </label>
                        <select className="select">
                          <option>Select Designation</option>
                          <option>Web Designer</option>
                          <option>Web Developer</option>
                          <option>Android Developer</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="table-responsive m-t-15">
                    <table className="table table-striped custom-table">
                      <thead>
                        <tr>
                          <th>Module Permission</th>
                          <th className="text-center">Read</th>
                          <th className="text-center">Write</th>
                          <th className="text-center">Create</th>
                          <th className="text-center">Delete</th>
                          <th className="text-center">Import</th>
                          <th className="text-center">Export</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Holidays</td>
                          <td className="text-center">
                            <input defaultChecked type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                        </tr>
                        <tr>
                          <td>Leaves</td>
                          <td className="text-center">
                            <input defaultChecked type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input defaultChecked type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input defaultChecked type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                        </tr>
                        <tr>
                          <td>Clients</td>
                          <td className="text-center">
                            <input defaultChecked type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input defaultChecked type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input defaultChecked type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                        </tr>
                        <tr>
                          <td>Projects</td>
                          <td className="text-center">
                            <input defaultChecked type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                        </tr>
                        <tr>
                          <td>Tasks</td>
                          <td className="text-center">
                            <input defaultChecked type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input defaultChecked type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input defaultChecked type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input defaultChecked type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                        </tr>
                        <tr>
                          <td>Chats</td>
                          <td className="text-center">
                            <input defaultChecked type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input defaultChecked type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input defaultChecked type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input defaultChecked type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                        </tr>
                        <tr>
                          <td>Assets</td>
                          <td className="text-center">
                            <input defaultChecked type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input defaultChecked type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input defaultChecked type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input defaultChecked type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                        </tr>
                        <tr>
                          <td>Timing Sheets</td>
                          <td className="text-center">
                            <input defaultChecked type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input defaultChecked type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input defaultChecked type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input defaultChecked type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="submit-section">
                    <button className="btn btn-primary submit-btn">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div
          id="edit_employee"
          className="modal custom-modal fade"
          role="dialog">
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Employee</h5>
                <button
                  type="button"
                  className="close"
                  data-bs-dismiss="modal"
                  aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="col-form-label">
                          First Name <span className="text-danger">*</span>
                        </label>
                        <input
                          className="form-control"
                          defaultValue="John"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="col-form-label">Last Name</label>
                        <input
                          className="form-control"
                          defaultValue="Doe"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="col-form-label">
                          Username <span className="text-danger">*</span>
                        </label>
                        <input
                          className="form-control"
                          defaultValue="johndoe"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="col-form-label">
                          Email <span className="text-danger">*</span>
                        </label>
                        <input
                          className="form-control"
                          defaultValue="johndoe@example.com"
                          type="email"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="col-form-label">Password</label>
                        <input
                          className="form-control"
                          defaultValue="johndoe"
                          type="password"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="col-form-label">
                          Confirm Password
                        </label>
                        <input
                          className="form-control"
                          defaultValue="johndoe"
                          type="password"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="col-form-label">
                          Employee ID <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          defaultValue="FT-0001"
                          readOnly
                          className="form-control floating"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="col-form-label">
                          Joining Date <span className="text-danger">*</span>
                        </label>
                        <div className="cal-icon">
                          <input
                            className="form-control datetimepicker"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="col-form-label">Phone </label>
                        <input
                          className="form-control"
                          defaultValue={9876543210}
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="col-form-label">Company</label>
                        <select className="select">
                          <option>Global Technologies</option>
                          <option>Delta Infotech</option>
                          <option selected>International Software Inc</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>
                          Department <span className="text-danger">*</span>
                        </label>
                        <select className="select">
                          <option>Select Department</option>
                          <option>Web Development</option>
                          <option>IT Management</option>
                          <option>Marketing</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>
                          Designation <span className="text-danger">*</span>
                        </label>
                        <select className="select">
                          <option>Select Designation</option>
                          <option>Web Designer</option>
                          <option>Web Developer</option>
                          <option>Android Developer</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="table-responsive m-t-15">
                    <table className="table table-striped custom-table">
                      <thead>
                        <tr>
                          <th>Module Permission</th>
                          <th className="text-center">Read</th>
                          <th className="text-center">Write</th>
                          <th className="text-center">Create</th>
                          <th className="text-center">Delete</th>
                          <th className="text-center">Import</th>
                          <th className="text-center">Export</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Holidays</td>
                          <td className="text-center">
                            <input defaultChecked type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                        </tr>
                        <tr>
                          <td>Leaves</td>
                          <td className="text-center">
                            <input defaultChecked type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input defaultChecked type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input defaultChecked type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                        </tr>
                        <tr>
                          <td>Clients</td>
                          <td className="text-center">
                            <input defaultChecked type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input defaultChecked type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input defaultChecked type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                        </tr>
                        <tr>
                          <td>Projects</td>
                          <td className="text-center">
                            <input defaultChecked type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                        </tr>
                        <tr>
                          <td>Tasks</td>
                          <td className="text-center">
                            <input defaultChecked type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input defaultChecked type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input defaultChecked type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input defaultChecked type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                        </tr>
                        <tr>
                          <td>Chats</td>
                          <td className="text-center">
                            <input defaultChecked type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input defaultChecked type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input defaultChecked type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input defaultChecked type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                        </tr>
                        <tr>
                          <td>Assets</td>
                          <td className="text-center">
                            <input defaultChecked type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input defaultChecked type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input defaultChecked type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input defaultChecked type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                        </tr>
                        <tr>
                          <td>Timing Sheets</td>
                          <td className="text-center">
                            <input defaultChecked type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input defaultChecked type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input defaultChecked type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input defaultChecked type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="submit-section">
                    <button className="btn btn-primary submit-btn">Save</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal custom-modal fade"
          id="delete_employee"
          role="dialog">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <div className="form-header">
                  <h3>Delete Employee</h3>
                  <p>Are you sure want to delete?</p>
                </div>
                <div className="modal-btn delete-action">
                  <div className="row">
                    <div className="col-6">
                      <a
                        href="javascript:void(0);"
                        className="btn btn-primary continue-btn">
                        Delete
                      </a>
                    </div>
                    <div className="col-6">
                      <a
                        href="javascript:void(0);"
                        data-bs-dismiss="modal"
                        className="btn btn-primary cancel-btn">
                        Cancel
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employees;
