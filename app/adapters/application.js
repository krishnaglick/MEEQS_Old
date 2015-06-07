import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    host: 'http://192.168.1.65:1337',
    namespace: 'api/v1',
    find: function(){
        debugger;
    },
    createRecord: function(){
        debugger;
    },
    updateRecord: function(){
        debugger;
    },
    deleteRecord: function(){
        debugger;
    },
    findAll: function(store, type, sinceToken) {
        debugger;
        var query, url;
        if (sinceToken) {
            query = { since: sinceToken };
        }
        url = this.buildURL(type.typeKey, null, null, 'findAll');
        return this.ajax(url, 'GET', { data: query }).then(function(data){
            var results = {};
            results[type.typeKey] = data;
            return results;
        });
    },
    findQuery: function(){
        debugger;
    }
});
