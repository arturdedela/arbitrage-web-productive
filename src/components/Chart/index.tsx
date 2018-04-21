import * as React from "react";
import * as Highcharts from "highcharts/highstock";
import { ChartObject } from "highcharts/highstock";

interface Props {
  id: string
  title: string
  loadData: (date_start: number, date_end: number) => Promise<[[number, number]]>
}

export default class Chart extends React.Component<Props> {

  chart: ChartObject;

  requestData = async (date_start: number, date_end: number) => {
    this.chart.showLoading("Loading data...");

    try {
      const history = await this.props.loadData(date_start, date_end);
      this.chart.series[0].setData(history);
    } catch (e) {
      console.error(e);
    }

    this.chart.hideLoading();
  };

  async componentDidMount() {
    let data;
    try {
      data = await this.props.loadData(Date.parse("01.01.2018"), Date.now());
    } catch (e) {
      console.error(e);
    }
    console.log(data);

    this.chart = Highcharts.stockChart(this.props.id, {
      title: {
        text: this.props.title
      },
      xAxis: {
        events: {
          afterSetExtremes: e => this.requestData(e.min, e.max)
        },
        minRange: 3600 * 1000
      },
      navigator: {
        adaptToUpdatedData: false,
        series: {
          data: data
        }
      },
      scrollbar: {
        liveRedraw: false
      },
      rangeSelector: {
        buttons: [{
          type: "hour",
          count: 1,
          text: "1h"
        }, {
          type: "day",
          count: 1,
          text: "1d"
        },  {
          type: "week",
          count: 1,
          text: "1w"
        }, {
          type: "month",
          count: 1,
          text: "1m"
        }, {
          type: "year",
          count: 1,
          text: "1y"
        }, {
          type: "all",
          text: "All"
        }],
        inputEnabled: false,
        selected: 5 // all
      },
      series: [{
        data: data
      }]
    });
  }

  render() {
    return  <div id={this.props.id} />
  }
}