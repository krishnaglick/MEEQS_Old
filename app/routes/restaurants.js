import Ember from 'ember';

export default Ember.Route.extend({
    model: function(){
        this.store.push('restaurant', {
            id: 1,
            name: 'Food Place'
        });
        this.store.push('restaurant', {
            id: 2,
            name: 'Nomery'
        });
        debugger;
        return this.store.find('restaurant');
    }
});
