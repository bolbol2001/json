import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/Generate" activeStyle>
                        GenerateQrCode
                    </NavLink>
                    <NavLink to="/scanner" activeStyle>
                        Scan QR Code
                    </NavLink>




                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;