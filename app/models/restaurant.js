import DS from 'ember-data';

export default DS.Model.extend({
    restaurantID: DS.attr('number'),
    name: DS.attr('string'),
    description: DS.attr('string'),

    tags: DS.hasMany('tag'),
    ratings: DS.hasMany('rating'),

    //google places api details
    placeID: DS.attr('string'),
    lat: DS.attr('number'),
    lng: DS.attr('number'),
    country: DS.attr('string'),
    city: DS.attr('string'),
    state: DS.attr('string'),
    address: DS.attr('string'),
    phone: DS.attr('string'),

    hours: DS.attr(),
    openNow: DS.attr('boolean'),
    priceLevel: DS.attr('number'),
    website: DS.attr('string'),
});
