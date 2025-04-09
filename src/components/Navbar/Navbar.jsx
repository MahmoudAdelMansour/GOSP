import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "../../index.css";
import "./navbar.css"
import {
    AdjustmentsHorizontalIcon,
    ArrowDownIcon,
    BellIcon,
    MoonIcon,
    UserCircleIcon
} from "@heroicons/react/16/solid/index.js";
import logo from "../../assets/logo.png"
import {ArrowDownCircleIcon} from "@heroicons/react/16/solid/index.js";


export default function CustomNavbar() {

    return (
        <nav className="ds-navbar">
            <div className="ds-nav-container">
                <div className="left-nav-side">
                    <div className="ds-logo-container">
                        <a href="#" className="ds-logo">
                            <img src={logo} alt="DeepScholar Logo" />
                        </a>
                    </div>
                    <ul className="ds-nav-links" id="navLinks">
                        <li><a href="#" className="ds-nav-link">Home</a></li>
                        <li><a href="#" className="ds-nav-link">Scholarship</a></li>
                        <li><a href="#" className="ds-nav-link">Opportunities</a></li>
                        <li className="ds-dropdown">
                            <div className="ds-dropdown-toggle ds-nav-link">
                                <span>Countries</span>
                                <ArrowDownCircleIcon className="ds-inline-icon"/>
                            </div>
                            <ul className="ds-dropdown-menu d-none">
                                <li><a href="#">United States</a></li>
                                <li><a href="#">Canada</a></li>
                                <li><a href="#">United Kingdom</a></li>
                                <li><a href="#">Australia</a></li>
                                <li><a href="#">Germany</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="right-nav-side">
                    <div className="ds-sign-icons" id="profileIcon">
                        <ul className="ds-profile-icon-list">
                            <li>
                                <a href="#" className="ds-profile-icon-link">
                                    <BellIcon className="ds-icon"  />
                                </a>
                            </li>

                            <li>
                                <a href="#" className="ds-profile-icon-link">
                                    <AdjustmentsHorizontalIcon className="ds-icon"  />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="ds-profile-icon-link">
                                    <MoonIcon className="ds-icon"  />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="ds-profile-icon-link">
                                    <UserCircleIcon className="ds-icon" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>


            </div>
        </nav>

    )

}