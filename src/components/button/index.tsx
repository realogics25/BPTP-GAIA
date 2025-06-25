import styled from 'styled-components';

interface ButtonProps {
    onClick?: () => void;
    title: string;
    downloadLink?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, title, downloadLink }) => {
    return (
        <StyledWrapper>
            {downloadLink ? (
                <a href={downloadLink} download>
                    <button>
                        <span>{title}</span>
                    </button>
                </a>
            ) : (
                <button onClick={onClick}>
                    <span>{title}</span>
                </button>
            )}
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  button {
   display: inline-block;
   border-radius: 4px;
   background-color: #000;
   border: 1px white solid;
   color: #FFFFFF;
   text-align: center;
   font-size: 17px;
   padding: 10px;
   transition: all 0.3s;
   cursor: pointer;
  }

  button span {
   cursor: pointer;
   display: inline-block;
   position: relative;
   transition: 0.3s;
  }

  button span:after {
   content: '»';
   position: absolute;
   opacity: 0;
   top: 0;
   right: -15px;
   transition: 0.3s;
  }

  button:hover span {
   padding-right: 15px;
  }

  button:hover span:after {
   opacity: 1;
   right: 0;
  }
`;

export default Button;
