import { Model } from 'ember-cli-mirage';
import attr from 'ember-data/attr';

export default Model.extend({
  hour: attr(),
  temp: attr(), 
  precip: attr()
});
