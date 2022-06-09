// General
import { FC } from "react";
import { Container, Flex } from "../styles/Global/Global.styles";
import { Title } from "../styles/PageStyles/index.styles";

const Home: FC = () => {
  return (
    <>
      <Container maxwidth="1024px">
        <div style={{ height: "100vh" }}>
          <Flex justifyContent="center" alignItems="center">
            <Title>TEMPLATE</Title>
          </Flex>
        </div>
      </Container>
    </>
  );
};

export default Home;
