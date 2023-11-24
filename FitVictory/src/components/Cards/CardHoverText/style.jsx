import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  flex-wrap:wrap;
  align-items: center;
  @media(width < 1115px){
    display: flex;
    justify-content: none;
  }
`;

export const Card = styled.div`
  margin: 20px;
  cursor: pointer;
  width: 280px;
  height: 360px;
  padding: 2rem 1rem;
  background: var(--bg-secondary);
  position: relative;
  display: flex;
  align-items: flex-end;
//   box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.5);
  transition: 0.5s ease-in-out;
  border-radius: 20px;
  //border: 3px solid var(--primary-color);
  
  &:hover {
    transform: translateY(20px);
  }
  
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, var(--bg-secondary),var(--bg-secondary), var(--primary-color));
    z-index: 2;
    transition: 0.5s all;
    opacity: 0;
    border-radius: 20px;
  }
  
  &:hover:before {
    opacity: 0.9;
  }

  @media(width < 768px){
    transform: translateY(20px);
    &:before {
      opacity: 0.9;
    }
  }
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Info = styled.div`
  position: relative;
  z-index: 3;
  color: var(--txt-title);
  opacity: 0;
  transform: translateY(30px);
  transition: 0.5s all;
  
  ${Card}:hover & {
    opacity: 1;
    transform: translateY(0px);
  }

  @media(width < 768px){
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const Title = styled.div`
  font-size: 25px;
  font-weight:700;
`;

export const Text = styled.div`
  letter-spacing: 1px;
  font-size: 20px;
  margin-top: 8px;
  margin-bottom: 20px;
`;