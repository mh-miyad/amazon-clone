import { Button, Dropdown, Navbar } from "flowbite-react";
import React from "react";
import { NavLink } from "react-router-dom";

const NavbarComponent = ({ handleButtonClick }) => {
  return (
    <div>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="https://flowbite.com/">
         
          <span className="self-center text-3xl  whitespace-nowrap  font-semibold dark:text-white">
            Ama<span className="text-yellow-400">z</span>on
          </span>
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
              <Dropdown.Item onClick={() => handleButtonClick("all")}>
                All
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleButtonClick("cloth")}>
                Cloth
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleButtonClick("men")}>
                Men
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleButtonClick("bottle")}>
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
