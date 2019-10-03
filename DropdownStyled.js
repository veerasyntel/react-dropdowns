import styled from "styled-components";

export const DropdownStyled = styled.div`
  .dropdown_select {
    position: relative; 
    display: flex;
    justify-content: center;
    font-size: 16px;
    font-wight: bold;
    color: black;
    padding: 0.6em 1.4em 0.5em 0.8em;
    max-width: 100%;
    box-sizing: border-box;
    margin: 0;
    border: thin solid rgb(0, 0, 0, 0.3);
    box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.4);
    border-radius: 0.3rem;
    background-color: white;
    overflow: auto;
    height: 40px;
  }  
  .dropdown_option {
    max-width: 100%;
    height: 1px;
    overflow-y: auto;
  }
`;
