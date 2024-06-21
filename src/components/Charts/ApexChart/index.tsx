import { CardBody, Card, Col, Row, Table } from "reactstrap";
import ApexLineChartClass from "./ApexLineChart";
import AreaSpalineChartClass from "./AreaSpalineChart";
import CommonCardHeading from "CommonElements/CommonCardHeading";
import OptionTableBody from "@/components/Table/OptionTableBody";
import OptionOptionTableHead from "@/components/Table/OptionTableHead";
import OptionValueModal from "@/components/Modal/OptionValueModal";

const ApexChartContainer = () => {
  return (
    <>
      <Row>
        <Col sm={12} xl={12} className="box-col-12">
          <Card>
            <CommonCardHeading smallHeading={"Options Value"} />
            <CardBody>
              <OptionValueModal />
              <Table>
                <OptionOptionTableHead />
                <OptionTableBody />
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <AreaSpalineChartClass />
      </Row>
    </>
  );
};

export default ApexChartContainer;
