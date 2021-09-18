import styled from "styled-components";

const CardES = styled.div`

  padding: .5rem;
  margin: 0;
  background-color: #fff;
  display: flex;
  align-items: center;
  border-radius: 10px;
  justify-content: flex-start;

  & > img {
    height: 2rem;
    margin-right: .5rem;
  }

  & > p {
    color: #222;
    font-weight: bold;
    font-size: 1rem;
    margin: 0;
    line-height: 2rem;
  }
`;

export function TargetExtraSkills({img, name}){
  return(
    <CardES>
      <img src={img} alt={name} />
      <p>{name}</p>
    </CardES>
  );
}

export function TargetExtraSkills2({name}){
  return(
    <CardES>
      <p>{name}</p>
    </CardES>
  );
}