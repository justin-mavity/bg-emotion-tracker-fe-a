import React from 'react';
// import React, { useEffect, useState } from 'react';
import NavBar from '../../common/NavBar';
import styled from 'styled-components';
// import axios from 'axios';

const EmojiContainerCheckIn = props => {
  return (
    <>
      <NavBar />
      <StyledActivities>
        <div className="ActivityContainerBox">
          <h1>Check Event</h1>
        </div>
      </StyledActivities>
    </>
  );
};

export default EmojiContainerCheckIn;

const StyledActivities = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid black; */
  .ActivityContainerBox {
    border: 2px solid black;

    -webkit-box-shadow: 20px 16px 20px 10px #121f35;
    box-shadow: 20px 16px 20px 10px #121f35;
    padding: 130px 160px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 6%;
  }
`;
