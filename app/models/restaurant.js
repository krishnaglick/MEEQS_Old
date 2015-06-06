import DS from 'ember-data';

export default DS.Model.extend({
    rating: DS.attr('number'),//overall
    ratings: DS.hasMany('rating'),

    ethnicity: DS.attr(),

    //google places api details
    placeId: DS.attr('string'),
    lat: DS.attr('number'),
    lng: DS.attr('number'),
    name: DS.attr('string'),
    description: DS.attr('string'),
    country: DS.attr('string'),
    city: DS.attr('string'),
    state: DS.attr('string'),
    address: DS.attr('string'),
    phone: DS.attr('string'),

    hours: DS.attr(),
    open_now: DS.attr('boolean'),
    permanently_closed: DS.attr('boolean'),
    priceLevel: DS.attr('number'),
    website: DS.attr('string'),
    utcOffset: DS.attr(),

    googleRating: DS.attr('number'),
    googleReviews: DS.attr(),
    googlePhotos: DS.attr(),
    googleTypes: DS.attr()
});
