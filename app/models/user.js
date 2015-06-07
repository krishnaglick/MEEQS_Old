import DS from 'ember-data';

export default DS.Model.extend({
    userID: DS.attr('number'),
    username: DS.attr('string'),
    email: DS.attr('string'),
    isVerified: DS.attr('boolean', {
        defaultValue: false
    }),
    isAdmin: DS.attr('boolean', {
        defaultValue: false
    }),

    ratings: DS.hasMany('rating')
});
