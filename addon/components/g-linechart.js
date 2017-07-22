/*global google*/

import Chart from './g-chart';

export default Chart.extend({
  packages: ['corechart'],

  chartOptionsMapping: {
    curveType: 'curveType',

    hAxis: 'hAxis',
    hAxisBaseline: 'hAxis.baseline',
    hAxisBaselineColor: 'hAxis.baselineColor',
    hAxisDirection: 'hAxis.direction',
    hAxisFormat: 'hAxis.format',
    hAxisGridlines: 'hAxis.gridlines',
    hAxisGridlinesColor: 'hAxis.gridlines.color',
    hAxisGridlinesCount: 'hAxis.gridlines.count',
    hAxisGridlinesUnits: 'hAxis.gridlines.units',
    hAxisMinorGridlines: 'hAxis.minorGridlines',
    hAxisMinorGridlinesColor: 'hAxis.minorGridlines.color',
    hAxisMinorGridlinesCount: 'hAxis.minorGridlines.count',
    hAxisMinorGridlinesUnits: 'hAxis.minorGridlines.units',
    hAxisLogScale: 'hAxis.logScale',
    hAxisScaleType: 'hAxis.scaleType',
    hAxisTextPosition: 'hAxis.textPosition',
    hAxisTextStyle: 'hAxis.textStyle',
    hAxisTicks: 'hAxis.ticks',
    hAxisTitle: 'hAxis.title',
    hAxisTitleTextStyle: 'hAxis.titleTextStyle',
    hAxisAllowContainerBoundaryTextCufoff: 'hAxis.allowContainerBoundaryTextCufoff',
    hAxisSlantedText: 'hAxis.slantedText',
    hAxisSlantedTextAngle: 'hAxis.slantedTextAngle',
    hAxisMaxAlternation: 'hAxis.maxAlternation',
    hAxisMaxTextLines: 'hAxis.maxTextLines',
    hAxisMinTextSpacing: 'hAxis.minTextSpacing',
    hAxisShowTextEvery: 'hAxis.showTextEvery',
    hAxisMaxValue: 'hAxis.maxValue',
    hAxisMinValue: 'hAxis.minValue',
    hAxisViewWindowMode: 'hAxis.viewWindowMode',
    hAxisViewWindow: 'hAxis.viewWindow',
    hAxisViewWindowMax: 'hAxis.viewWindow.max',
    hAxisViewWindowMin: 'hAxis.viewWindow.min',

    interpolateNulls: 'interpolateNulls',

    lineDashStyle: 'lineDashStyle',
    lineWidth: 'lineWidth',
    orientation: 'orientation'
  },

  createChart (element) {
    return new google.visualization.LineChart (element);
  }
});
