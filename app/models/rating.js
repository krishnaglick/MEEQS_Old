import DS from 'ember-data';

export default DS.Model.extend({
    restaurant: DS.belongsTo(),
    user: DS.belongsTo(),

    menuSelection: DS.attr('number'),
    environment: DS.attr('number'),
    costEfficiency: DS.attr('number'),
    productQuality: DS.attr('number'),
    service: DS.attr('number'),

    plusOneCategory: DS.attr(),

    createDate: DS.attr('date', {
        defaultValue: () => {
            return new Date();
        }
    }),
});

/*alt
export default DS.Model.extend({
    restaurant: DS.belongsTo(),
    user: DS.belongsTo(),

    rateables: DS.hasMany('rateable'),
    plusOneCategory: DS.attr(),//double check

    createDate: DS.attr('date', {
        defaultValue: () => {
            return new Date();
        })
    }),
});

//rateable.js
export default DS.Model.extend({
    rating: DS.belongsTo(),
    category: DS.belongsTo(),
});

//category.js
export default DS.Model.extend({
    name: DS.attr('string'),
});
*/
