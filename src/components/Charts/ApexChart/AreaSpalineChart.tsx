import Chart from "react-apexcharts";
import { Card, CardBody, Col } from "reactstrap";
import { AreaSpalineChart } from "utils/Constant";
import { areaSpaline } from "Data/Charts/ApexChart";
import CommonCardHeading from "CommonElements/CommonCardHeading";
import { useContext } from "react";
import OptionsContext from "@/context/OptionsContext";

const AreaSpalineChartClass = () => {
  const options = useContext(OptionsContext);

  const series = options.options
    .filter((data, index) => index !== 0)
    .map((data, index) => {
      return {
        name: "Option " + index,
        data: data,
      };
    });

  areaSpaline.series = series;
  areaSpaline.xaxis = {
    type: "numeric",
    categories: options.options[0],
  };
  areaSpaline.colors = ["#ffaa05", "#fd2e64", "#54ba4a", "#7366ff"];

  return (
    <Col sm={12} xl={12} className="box-col-12">
      <Card>
        <CommonCardHeading smallHeading={"Risk & Reward Graph"} />
        <CardBody>
          <div id="basic-apex">
            <Chart
              options={areaSpaline}
              series={areaSpaline.series}
              height="350"
              type="area"
            />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AreaSpalineChartClass;
