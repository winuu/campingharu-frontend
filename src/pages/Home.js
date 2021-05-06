import { Calendar } from "../components/Calendar";
import styled from "styled-components";
import { Helmet } from "react-helmet-async";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

function Home() {
  return (
    <Container>
      <Helmet>
        <title>캘린더 | 캠핑하루</title>
      </Helmet>

      <Calendar />
    </Container>
  );
}
export default Home;
