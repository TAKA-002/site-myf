import styled from "styled-components";

const Button = styled.button`
  width: 44px;

  & > span {
    display: block;
    width: 100%;
    height: 3px;
    background-color: ${(props) => props.theme.colors.menu};
    margin-bottom: 9px;
    cursor: pointer;
    transition:
      transform 0.7s,
      opacity 0.7s;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &:hover {
    & > span:nth-child(1) {
      transform: translateY(11px) rotate(135deg);
    }

    & > span:nth-child(2) {
      transform: translateX(-44px);
      opacity: 0;
    }

    & > span:nth-child(3) {
      transform: translateY(-11px) rotate(405deg);
    }
  }
`;

export default function MenuBtn() {
  return (
    <Button>
      <span></span>
      <span></span>
      <span></span>
    </Button>
  );
}
