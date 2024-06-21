import dynamic from "next/dynamic";
import CommonCardHeading from "CommonElements/CommonCardHeading";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { OptionsContextProvider } from "@/context/OptionsContextProvider";

const SamplePage = () => {
  const ApexChartContainer = dynamic(
    () => import("@/components/Charts/ApexChart"),
    { ssr: false }
  );
  return (
    <OptionsContextProvider>
      <div className="page-body">
        <Container fluid={true}>
          <Row>
            <Col sm="12">
              <Card>
                <CommonCardHeading
                  smallHeading="Options Profit/Loss"
                  span="this tool generates a risk & reward graph for options strategies"
                />
                <CardBody>
                  <ApexChartContainer />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </OptionsContextProvider>
  );
};

export default SamplePage;
