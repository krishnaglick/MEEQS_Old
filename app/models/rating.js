import DS from 'ember-data';

export default DS.Model.extend({
    ratingID: DS.attr('number'),
    restaurantID: DS.belongsTo('restaurant'),
    userID: DS.belongsTo('user'),
    comment: DS.attr('string'),
    language: DS.attr('string'),

    menuSelection: DS.attr('number'),
    environment: DS.attr('number'),
    costEfficiency: DS.attr('number'),
    productQuality: DS.attr('number'),
    service: DS.attr('number'),

    createDate: DS.attr('date'),
});
