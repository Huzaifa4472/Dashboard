import styled from "styled-components";
import { LineChart } from "@mui/x-charts/LineChart";
import { colors } from "@mui/material";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const TextArea = styled.div``;
const Text = styled.div`
  font-size: 22px;
  font-weight: 600;
  color: #171717;
`;
const ChartSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0rem;
  height: 100%;
  width: 100%;
  background-color: white;
  border-radius: 25px;
  box-shadow: 0px 8px 17px 0px #0000001a;
`;

const Dashboard = () => {
  return (
    <Container>
      <TextArea>
        <Text>Dashboard</Text>
      </TextArea>
      <ChartSection>
        <LineChart
          xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
          series={[
            {
              data: [20, 5, 35, 20, 58, 15],
            },
          ]}
          height={300}
          margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
          grid={{ vertical: true, horizontal: true }}
        />
      </ChartSection>
    </Container>
  );
};

export default Dashboard;
