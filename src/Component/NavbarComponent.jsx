import { Button, Dropdown, Navbar } from "flowbite-react";
import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo.svg";

const NavbarComponent = () => {
  return (
    <div>
      <Navbar fluid={true} rounded={true} className="bg-black text-white">
        <Navbar.Brand href="/">
          <img src={Logo} className="mr-3 h-6 sm:h-9" alt="Amazon Logo" />
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button>Log in</Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link active={true}>
            <NavLink to={"/"}>Shops</NavLink>
          </Navbar.Link>
          <Navbar.Link>
            <Dropdown label="Category" inline={true}>
              <Dropdown.Item >
                All
              </Dropdown.Item>
              <Dropdown.Item >
                Cloth
              </Dropdown.Item>
              <Dropdown.Item >
                Men
              </Dropdown.Item>
              <Dropdown.Item >
                Bottle
              </Dropdown.Item>
            </Dropdown>
          </Navbar.Link>
          <Navbar.Link>
            <NavLink to={"/inventory"}>Inventory</NavLink>
          </Navbar.Link>
          <Navbar.Link>About Us</Navbar.Link>
          <Navbar.Link>
            <NavLink to={"/contact"}>Contact</NavLink>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
