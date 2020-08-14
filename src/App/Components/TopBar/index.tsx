import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function TopBar() {
  const [activePage, setActivePage] = useState('');

  useEffect(() => {
    if (window.location.pathname.includes("repos")) {
      setActivePage("repos");
    } else {
      setActivePage("home");
    }
  }, []);

  return (
    <StyledDiv>
      <div className="Title">
        LinuxList
        <small>- My list of Linux applications and repositories.</small>
      </div>

      <div className="Menu">
        <div onClick={() => setActivePage("home")}>
          <Link to="/" className={activePage === "home" ? "Active" : ""}>
            Applications
          </Link>
        </div>
        <div onClick={() => setActivePage("repos")}>
          <Link to="/repos" className={activePage === "repos" ? "Active" : ""}>
            Repositories
          </Link>
        </div>
      </div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  padding: 10px 20px;
  border-bottom: 1px solid #e4e4e4;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.05);
  background-color: #fafafa;

  .Title {
    flex: 1;
  }

  small {
    margin-left: 5px;
    color: #666;
  }

  .Menu {
    display: flex;

    div {
      margin-left: 20px;
    }

    a {
      text-decoration: none;
      color: inherit;

      &:hover,
      &.Active {
        font-weight: 500;
      }
    }
  }
`;
