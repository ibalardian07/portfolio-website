import { Outlet } from "react-router-dom"
import { NavLink } from "react-router-dom"
import UserImg from '../assets/images/users/user-1.png'

export default function LayoutOne() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="navbar navbar-expand-lg navbar-top mt-4">
                            <div className="container-fluid">
                                <a className="navbar-brand">Ibalardian</a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                    <i className="fa-solid fa-bars text-pw-primary"></i>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                    <div className="navbar-nav ms-auto">
                                        <NavLink to="/" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>About</NavLink>
                                        <NavLink to="/resume" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>Resume</NavLink>
                                        <NavLink to="/achievement" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>Achievement</NavLink>
                                        <NavLink to="/certificate" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>Certificate</NavLink>
                                        <NavLink to="/projects" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>Projects</NavLink>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 mt-4">
                        <div className="card card-info">
                            <div className="card-body">
                                <div className="info">
                                    <div className="d-flex align-items-center justify-content-center mb-4">
                                        <img src={UserImg} alt="M Ardian Iqbal" className="user-img" />
                                    </div>
                                    <h5 className="text-name text-center mb-0">M Ardian Iqbal</h5>
                                    <p className="text-title text-center mt-2 mb-0">
                                        Full-Stack Web Developer
                                    </p>
                                </div>
                                <div className="separator"></div>
                                <div className="sec-info">
                                    <div className="info-detail d-flex align-items-center mb-4">
                                        <div className="icon-box">
                                            <i className="fa-brands fa-linkedin"></i>
                                        </div>
                                        <div className="sec-info-detail ms-3">
                                            <p className="text-sec-info mb-0">LinkedIn</p>
                                            <a href="https://linkedin.com/in/ibalardian" target="_blank" className="link-sec-info">ibalardian</a>
                                        </div>
                                    </div>
                                    <div className="info-detail d-flex align-items-center mb-4">
                                        <div className="icon-box">
                                            <i className="fa-regular fa-envelope"></i>
                                        </div>
                                        <div className="sec-info-detail ms-3">
                                            <p className="text-sec-info mb-0">Email</p>
                                            <a href="mailto:m.ardianiqbal26@gmail.com" target="_blank" className="link-sec-info">m.ardianiqbal26@g...</a>
                                        </div>
                                    </div>
                                    <div className="info-detail d-flex align-items-center">
                                        <div className="icon-box">
                                            <i className="fa-brands fa-instagram"></i>
                                        </div>
                                        <div className="sec-info-detail ms-3">
                                            <p className="text-sec-info mb-0">INSTAGRAM</p>
                                            <a href="https://instagram.com/ibalardian_" target="_blank" className="link-sec-info">ibalardian_</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12 mt-4">
                        <div className="card card-sec-info">
                            <div className="card-body">
                                <Outlet />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-5 mb-5">
                    <p className="text-copyright">Crafted With <i className="fa-solid fa-heart text-danger"></i> By M Ardian Iqbal</p>
                </div>
            </div> 
        </>
    );
}