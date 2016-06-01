import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  hour(i) {return `${i}`;},
  temp: 73,
  precip: 98
});
