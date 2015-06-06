import DS from 'ember-data';

export default DS.Model.extend({
    restaurant: DS.belongsTo('restaurant'),
    user: DS.belongsTo('user'),

    

    createDate: DS.attr('date', {
        defaultValue: () => {
            return new Date();
        })
    }),
});
