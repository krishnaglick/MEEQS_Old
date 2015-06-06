import DS from 'ember-data';

export default DS.Model.extend({
    lat: DS.attr(''),
    name: DS.attr('string'),
    description: DS.attr('string'),
    ethnicity: DS.attr('string'),

    ratings: DS.hasMany('rating'),

    //google places api details
    placeId: DS.attr('string'),
    lat: DS.attr('float'),
    lng: DS.attr('float'),
    name: DS.attr('string'),
    country: DS.attr('string'),
    city: DS.attr('string'),
    state: DS.attr('string'),
    address: DS.attr('string'),
    phone: DS.attr('string'),

    hours: DS.attr(),
    open_now: DS.attr('boolean'),
    permanently_closed: DS.attr('boolean'),
    priceLevel: DS.attr('integer'),
    website: DS.attr('string'),
    utcOffset: DS.attr(),//unsure on a type for this one

    googleRating: DS.attr('float'),
    googleReviews: DS.attr(),
    googlePhotos: DS.attr(),
    googleTypes: DS.attr(),
});
