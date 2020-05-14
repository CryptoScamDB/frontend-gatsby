import styled from 'styled-components';

export const Container = styled.div`
  background: #0c3153;
  width: 100%;
  height: 100%;
  min-height: 20em;
`;

export const Description = styled.h3`
  padding-top: 2em;
  color: #ffd166;
  text-align: center;
  font-weight: 400;
  margin-bottom: 2em;
`;

export const OptionList = styled.ul`
  text-align: right;
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Option = styled.li`
  display: inline-block;
  list-style-position: inside;
  border-radius: 2px;
  border: 2px solid #fff;
  color: #fff;
  letter-spacing: 0.1px;
  line-height: 17px;
  text-align: center;
  margin-left: 2em;
  padding: 1em 1em 1em 1em;

  &:hover {
    cursor: pointer;
    background: rgb(245, 197, 97);
    border: 2px solid rgb(245, 197, 97);
    color: #000;
  }
`;

export const SubText = styled.p`
  color: #fff;
  text-align: left;
  padding-left: 25%;
  width: 50%;
`;

export const InputError = styled.div`
  color: #ce3a44;
`;

export const SubTextLink = styled.p`
  color: #fff;
  text-align: center;

  a {
    text-decoration: underline;
    text-decoration-style: dotted;
    color: #fff;
  }
`;

export const TextareaMoreAddresses = styled.textarea`
  border-radius: 8px 0 0 8px;
  background-color: transparent;
  color: #fff;
  padding: 1em;
  margin-bottom: 2em;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputLabel = styled.label`
  border-radius: 8px 0 0 8px;
  background-color: #007999;
  color: #fff;
  border: 1px solid #fff;
  font-weight: 400;
  padding: 0.75em;
  height: 17.778px;
`;

export const InputField = styled.input`
  padding: 0.75em;
  border: 0;
  font-size: 16px;
  color: #fff;
  background: transparent;
  border: 1px solid #fff;
`;
