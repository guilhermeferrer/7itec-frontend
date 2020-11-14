import styled from 'styled-components';

interface IModal {
  size?: 'lg' | '';
  visible: boolean;
}

export const Modal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity linear 0.15s;
  z-index: 2000;
  pointer-events: ${({ visible }: IModal) => visible ? 'all' : 'none'};

  width: ${({ size }: IModal) => {
    switch (size) {
      case "lg":
        return "800";
      default:
        return "480";
    }
  }}px;

  margin: 40px auto;

  opacity: ${({ visible }: IModal) => visible ? 1 : 0};  
  transition: ${({ visible }: IModal) => visible ? 'opacity linear 0.15s' : 'opacity linear 0.15s'} ;

  .background {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    z-index: 1040;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: 0;
  }
  .box-dialog {
    z-index: 1050;
    width: 100%;
    background-color: transparent;
    box-shadow: 0 3px 9px rgba(0, 0, 0, 0.3);
    border-radius: 3px;
    overflow: hidden;
  }

  @media(max-width: 1024px){
    display: none;
  }
`;