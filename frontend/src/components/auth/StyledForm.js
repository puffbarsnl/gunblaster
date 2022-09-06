import styled from "styled-components";

export const StyledForm = styled.form`
  max-width: 400px;
  width: 100%;
  margin: 2rem auto;
	padding: 20px;

  h2 {
    margin-bottom: 1rem;
  }

  button,
  input {
    height: 38px;
    width: 100%;
    padding: 7px;
		font-size: 16px;
    outline: none;
    border-radius: 5px;
    border: 1px solid rgb(220, 220, 220);
    margin-bottom: 1rem;

    &:focus {
      border: 1px solid #ef233c;
    }
  }

  button {
    cursor: pointer;

		background: #ef233c;
		color: white;
		font-weight: 700;

    &:focus {
      border: none;
    }
  }

  p {
    font-size: 14px;
    color: red;
  }
`;
