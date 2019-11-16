import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { Container } from "./layoutComponents"

const Nav = styled.div`
  background-color: #f76c6c;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
`

const NavHeader = styled.div`
  max-width: 1010px;
  padding: 10px 10px;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;
const NavLeft = styled.div`
  width: 33.333%;
  text-align: left;
`;
const NavCenter = styled.div`
  width: 33.333%;
  text-align: center;
`;
const Input = styled.input`
  font-size: 16px;
  border: solid 1px #dbdbdb;
  border-radius: 3px;
  color: #262626;
  padding: 7px 33px;
  border-radius: 3px;
  color: #999;
  cursor: text;
  font-size: 14px;
  font-weight: 300;
  text-align: center;
  background: #fafafa;
  &:active,
  &:focus {
    text-align: left;
  }
`;
const NavRight = styled.div`
  width: 33.333%;
  text-align: right;
  svg {
    margin-right: 20px;
  }
`;

const MenuLink = styled.a``;

const Header = ({ siteTitle, menuLinks, className }) => (
  <Nav>
    <NavHeader>
      <NavLeft>fourthBlog</NavLeft>

      <NavCenter>
        <Input type="text" placeholder="Search" />
      </NavCenter>

      <NavRight>
        <Link to="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
        </Link>
      </NavRight>
    </NavHeader>
  </Nav>
  // <header className={className}>
  //   <Container>
  //     <h1>
  //       <Link to="/">{siteTitle}</Link>
  //     </h1>
  //     <div>
  //         <nav>
  //           <ul style={{ display: "flex", flex: 1 }}>
  //             {menuLinks.map(link => (
  //               <li
  //                 key={link.name}
  //                 style={{
  //                   listStyleType: `none`,
  //                   padding: `1rem`,
  //                 }}
  //               >
  //                 <Link style={{ color: `white` }} to={link.link}>
  //                   {link.name}
  //                 </Link>
  //               </li>
  //             ))}
  //           </ul>
  //         </nav>
  //       </div>
  //   </Container>
  // </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

// const StyledHeader = styled(Header)`
//   color: var(--white);
//   background: var(--primary-color);
//   padding: 0.5rem 0;
//   margin-bottom: 1rem;
//   h1 {
//     margin: 0;
//   }
// `

export default Header
