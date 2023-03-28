import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Sidebar = () => {
  const location = useLocation();
  let pathname = location.pathname;
  return (
    <div>
      <div className="sidebar" id="sidebar">
        <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul className="sidebar-vertical">
              <li className="menu-title">
                <span>Main</span>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="la la-dashboard" /> <span>Dashboard</span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a className="active" href="/">
                      Admin Dashboard
                    </a>
                  </li>
                  <li>
                    <a href="employee-dashboard">Employee Dashboard</a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="la la-cube" /> <span> Apps</span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="chat.html">Chat</a>
                  </li>
                  <li className="submenu">
                    <a href="#">
                      <span> Calls</span> <span className="menu-arrow" />
                    </a>
                    <ul style={{ display: "none" }}>
                      <li>
                        <a href="voice-call.html">Voice Call</a>
                      </li>
                      <li>
                        <a href="video-call.html">Video Call</a>
                      </li>
                      <li>
                        <a href="outgoing-call.html">Outgoing Call</a>
                      </li>
                      <li>
                        <a href="incoming-call.html">Incoming Call</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="events.html">Calendar</a>
                  </li>
                  <li>
                    <a href="contacts.html">Contacts</a>
                  </li>
                  <li>
                    <a href="inbox.html">Email</a>
                  </li>
                  <li>
                    <a href="file-manager.html">File Manager</a>
                  </li>
                </ul>
              </li>
              <li className="menu-title">
                <span>Employees</span>
              </li>
              <li className="submenu">
                <a href="#" className="noti-dot">
                  <i className="la la-user" /> <span> Employees</span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="employees">All Employees</a>
                  </li>
                  <li>
                    <a href="holidays.html">Holidays</a>
                  </li>
                  <li>
                    <a href="leaves.html">
                      Leaves (Admin){" "}
                      <span className="badge rounded-pill bg-primary float-end">
                        1
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="leaves-employee.html">Leaves (Employee)</a>
                  </li>
                  <li>
                    <a href="leave-settings.html">Leave Settings</a>
                  </li>
                  <li>
                    <a href="attendance.html">Attendance (Admin)</a>
                  </li>
                  <li>
                    <a href="attendance-employee.html">Attendance (Employee)</a>
                  </li>
                  <li>
                    <a href="departments.html">Departments</a>
                  </li>
                  <li>
                    <a href="designations.html">Designations</a>
                  </li>
                  <li>
                    <a href="timesheet.html">Timesheet</a>
                  </li>
                  <li>
                    <a href="shift-scheduling.html">Shift &amp; Schedule</a>
                  </li>
                  <li>
                    <a href="overtime.html">Overtime</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="clients.html">
                  <i className="la la-users" /> <span>Clients</span>
                </a>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="la la-rocket" /> <span> Projects</span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="projects.html">Projects</a>
                  </li>
                  <li>
                    <a href="tasks.html">Tasks</a>
                  </li>
                  <li>
                    <a href="task-board.html">Task Board</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="leads.html">
                  <i className="la la-user-secret" /> <span>Leads</span>
                </a>
              </li>
              <li>
                <a href="tickets.html">
                  <i className="la la-ticket" /> <span>Tickets</span>
                </a>
              </li>
              <li className="menu-title">
                <span>HR</span>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="la la-files-o" /> <span> Sales </span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="estimates.html">Estimates</a>
                  </li>
                  <li>
                    <a href="invoices.html">Invoices</a>
                  </li>
                  <li>
                    <a href="payments.html">Payments</a>
                  </li>
                  <li>
                    <a href="expenses.html">Expenses</a>
                  </li>
                  <li>
                    <a href="provident-fund.html">Provident Fund</a>
                  </li>
                  <li>
                    <a href="taxes.html">Taxes</a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="la la-files-o" /> <span> Accounting </span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="categories.html">Categories</a>
                  </li>
                  <li>
                    <a href="budgets.html">Budgets</a>
                  </li>
                  <li>
                    <a href="budget-expenses.html">Budget Expenses</a>
                  </li>
                  <li>
                    <a href="budget-revenues.html">Budget Revenues</a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="la la-money" /> <span> Payroll </span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="salary.html"> Employee Salary </a>
                  </li>
                  <li>
                    <a href="salary-view.html"> Payslip </a>
                  </li>
                  <li>
                    <a href="payroll-items.html"> Payroll Items </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="policies.html">
                  <i className="la la-file-pdf-o" /> <span>Policies</span>
                </a>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="la la-pie-chart" /> <span> Reports </span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="expense-reports.html"> Expense Report </a>
                  </li>
                  <li>
                    <a href="invoice-reports.html"> Invoice Report </a>
                  </li>
                  <li>
                    <a href="payments-reports.html"> Payments Report </a>
                  </li>
                  <li>
                    <a href="project-reports.html"> Project Report </a>
                  </li>
                  <li>
                    <a href="task-reports.html"> Task Report </a>
                  </li>
                  <li>
                    <a href="user-reports.html"> User Report </a>
                  </li>
                  <li>
                    <a href="employee-reports.html"> Employee Report </a>
                  </li>
                  <li>
                    <a href="payslip-reports.html"> Payslip Report </a>
                  </li>
                  <li>
                    <a href="attendance-reports.html"> Attendance Report </a>
                  </li>
                  <li>
                    <a href="leave-reports.html"> Leave Report </a>
                  </li>
                  <li>
                    <a href="daily-reports.html"> Daily Report </a>
                  </li>
                </ul>
              </li>
              <li className="menu-title">
                <span>Performance</span>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="la la-graduation-cap" />{" "}
                  <span> Performance </span> <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="performance-indicator.html">
                      {" "}
                      Performance Indicator{" "}
                    </a>
                  </li>
                  <li>
                    <a href="performance.html"> Performance Review </a>
                  </li>
                  <li>
                    <a href="performance-appraisal.html">
                      {" "}
                      Performance Appraisal{" "}
                    </a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="la la-crosshairs" /> <span> Goals </span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="goal-tracking.html"> Goal List </a>
                  </li>
                  <li>
                    <a href="goal-type.html"> Goal Type </a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="la la-edit" /> <span> Training </span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="training.html"> Training List </a>
                  </li>
                  <li>
                    <a href="trainers.html"> Trainers</a>
                  </li>
                  <li>
                    <a href="training-type.html"> Training Type </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="promotion.html">
                  <i className="la la-bullhorn" /> <span>Promotion</span>
                </a>
              </li>
              <li>
                <a href="resignation.html">
                  <i className="la la-external-link-square" />{" "}
                  <span>Resignation</span>
                </a>
              </li>
              <li>
                <a href="termination.html">
                  <i className="la la-times-circle" /> <span>Termination</span>
                </a>
              </li>
              <li className="menu-title">
                <span>Administration</span>
              </li>
              <li>
                <a href="assets.html">
                  <i className="la la-object-ungroup" /> <span>Assets</span>
                </a>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="la la-briefcase" /> <span> Jobs </span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="user-dashboard.html"> User Dasboard </a>
                  </li>
                  <li>
                    <a href="jobs-dashboard.html"> Jobs Dasboard </a>
                  </li>
                  <li>
                    <a href="jobs.html"> Manage Jobs </a>
                  </li>
                  <li>
                    <a href="manage-resumes.html"> Manage Resumes </a>
                  </li>
                  <li>
                    <a href="shortlist-candidates.html">
                      {" "}
                      Shortlist Candidates{" "}
                    </a>
                  </li>
                  <li>
                    <a href="interview-questions.html"> Interview Questions </a>
                  </li>
                  <li>
                    <a href="offer_approvals.html"> Offer Approvals </a>
                  </li>
                  <li>
                    <a href="experiance-level.html"> Experience Level </a>
                  </li>
                  <li>
                    <a href="candidates.html"> Candidates List </a>
                  </li>
                  <li>
                    <a href="schedule-timing.html"> Schedule timing </a>
                  </li>
                  <li>
                    <a href="apptitude-result.html"> Aptitude Results </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="knowledgebase.html">
                  <i className="la la-question" /> <span>Knowledgebase</span>
                </a>
              </li>
              <li>
                <a href="activities.html">
                  <i className="la la-bell" /> <span>Activities</span>
                </a>
              </li>
              <li>
                <a href="users.html">
                  <i className="la la-user-plus" /> <span>Users</span>
                </a>
              </li>
              <li>
                <a href="settings.html">
                  <i className="la la-cog" /> <span>Settings</span>
                </a>
              </li>
              <li className="menu-title">
                <span>Pages</span>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="la la-user" /> <span> Profile </span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="profile.html"> Employee Profile </a>
                  </li>
                  <li>
                    <a href="client-profile.html"> Client Profile </a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="la la-key" /> <span> Authentication </span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="index.html"> Login </a>
                  </li>
                  <li>
                    <a href="register.html"> Register </a>
                  </li>
                  <li>
                    <a href="forgot-password.html"> Forgot Password </a>
                  </li>
                  <li>
                    <a href="otp.html"> OTP </a>
                  </li>
                  <li>
                    <a href="lock-screen.html"> Lock Screen </a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="la la-exclamation-triangle" />{" "}
                  <span> Error Pages </span> <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="error-404.html">404 Error </a>
                  </li>
                  <li>
                    <a href="error-500.html">500 Error </a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="la la-hand-o-up" /> <span> Subscriptions </span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="subscriptions.html"> Subscriptions (Admin) </a>
                  </li>
                  <li>
                    <a href="subscriptions-company.html">
                      {" "}
                      Subscriptions (Company){" "}
                    </a>
                  </li>
                  <li>
                    <a href="subscribed-companies.html">
                      {" "}
                      Subscribed Companies
                    </a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="la la-columns" /> <span> Pages </span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="search.html"> Search </a>
                  </li>
                  <li>
                    <a href="faq.html"> FAQ </a>
                  </li>
                  <li>
                    <a href="terms.html"> Terms </a>
                  </li>
                  <li>
                    <a href="privacy-policy.html"> Privacy Policy </a>
                  </li>
                  <li>
                    <a href="blank-page.html"> Blank Page </a>
                  </li>
                </ul>
              </li>
              <li className="menu-title">
                <span>UI Interface</span>
              </li>
              <li>
                <a href="components.html">
                  <i className="la la-puzzle-piece" /> <span>Components</span>
                </a>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="la la-object-group" /> <span> Forms </span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="form-basic-inputs.html">Basic Inputs </a>
                  </li>
                  <li>
                    <a href="form-input-groups.html">Input Groups </a>
                  </li>
                  <li>
                    <a href="form-horizontal.html">Horizontal Form </a>
                  </li>
                  <li>
                    <a href="form-vertical.html"> Vertical Form </a>
                  </li>
                  <li>
                    <a href="form-mask.html"> Form Mask </a>
                  </li>
                  <li>
                    <a href="form-validation.html"> Form Validation </a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="la la-table" /> <span> Tables </span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="tables-basic.html">Basic Tables </a>
                  </li>
                  <li>
                    <a href="data-tables.html">Data Table </a>
                  </li>
                </ul>
              </li>
              <li className="menu-title">
                <span>Extras</span>
              </li>
              <li>
                <a href="#">
                  <i className="la la-file-text" /> <span>Documentation</span>
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">
                  <i className="la la-info" /> <span>Change Log</span>{" "}
                  <span className="badge badge-primary ms-auto">v3.4</span>
                </a>
              </li>
              <li className="submenu">
                <a href="javascript:void(0);">
                  <i className="la la-share-alt" /> <span>Multi Level</span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li className="submenu">
                    <a href="javascript:void(0);">
                      {" "}
                      <span>Level 1</span> <span className="menu-arrow" />
                    </a>
                    <ul style={{ display: "none" }}>
                      <li>
                        <a href="javascript:void(0);">
                          <span>Level 2</span>
                        </a>
                      </li>
                      <li className="submenu">
                        <a href="javascript:void(0);">
                          {" "}
                          <span> Level 2</span> <span className="menu-arrow" />
                        </a>
                        <ul style={{ display: "none" }}>
                          <li>
                            <a href="javascript:void(0);">Level 3</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">Level 3</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          {" "}
                          <span>Level 2</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="javascript:void(0);">
                      {" "}
                      <span>Level 1</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
