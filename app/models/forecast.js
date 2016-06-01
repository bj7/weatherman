import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  hour: attr(),
  temp: attr(), 
  precip: attr()
});
