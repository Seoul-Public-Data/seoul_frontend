import styled from 'styled-components';

export const Carousel = styled.div`
  width: 20rem;
  height: 7rem;
  border-radius: 0.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  justify-content: center;
  padding-inline: 1rem;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.2);
  position: fixed;
  bottom: 1.2rem;
  left: 1.25rem;
`;

export const Info = styled.div`
  display: flex;
  align-items: flex-end;

  .time {
    font-size: 1.3rem;
    font-weight: 600;
    margin-right: 0.25rem;
  }

  .distance {
    font-size: 0.8rem;
    font-weight: 300;
  }

  .icon {
    width: 1.1rem;
    height: 1rem;
    margin-right: 0.25rem;
  }

  .spot {
    font-size: 0.8rem;
    font-weight: 900;
    color: #ff7757;
  }
`;