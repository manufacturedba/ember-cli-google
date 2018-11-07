import Component from '@ember/component';
import MapEntity from '../mixins/map-entity';

import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend (MapEntity, {
  gMaps: service (),

  _heatMap: null,

  /// The data points.
  data: undefined,

  // Specifies whether heatmaps dissipate on zoom. When dissipating is false
  // the radius of influence increases with zoom level to ensure that the color
  // intensity is preserved at any given geographic location. Defaults to false.
  dissipating: false,

  // The color gradient of the heatmap, specified as an array of CSS color strings.
  // All CSS3 colors — including RGBA — are supported except for extended named
  // colors and HSL(A) values.
  gradient: undefined,

  // The maximum intensity of the heatmap. By default, heatmap colors are dynamically
  // scaled according to the greatest concentration of points at any particular
  // pixel on the map. This property allows you to specify a fixed maximum. Setting
  // the maximum intensity can be helpful when your dataset contains a few outliers
  // with an unusually high intensity.
  maxIntensity: undefined,

  // The radius of influence for each data point, in pixels.
  radius: undefined,

  // The opacity of the heatmap, expressed as a number between 0 and 1.
  opacity: undefined,

  didInsertElement () {
    this._super (...arguments);

    this.get ('gMaps').include ('visualization');
  },

  didLoadMap () {
    this._super (...arguments);

    let options = this.getProperties (['dissipating','gradient','maxIntensity','radius','opacity']);
    options.data = this.get ('heatMapData');

    this._heatMap = new google.maps.visualization.HeatmapLayer (options);
  },

  getEntity () {
    return this._heatMap;
  },

  heatMapData: computed ('data.[]', function () {
    let data = this.getWithDefault ('data', []);
    return data.map (({lat, lng, weight}) => weight ? {location: new google.maps.LatLng (lat, lng), weight } : new google.maps.LatLng (lat, lng));
  })
});