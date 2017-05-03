import {EventEmitter} from 'events';
import assign from 'object-assign';
import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants  from '../constants/AppConstants';
let CHANGE_EVENT = 'change';
const AppStore = assign({}, EventEmitter.prototype, {

    num: 100,

    addNumber: function(number) {
        this.num += number;
        // alert(this.num);

        return this.num;
    },
    getNumber: function() {

        return this.num;

    },
    emitChange: function() {

        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

})

// Register callback to handle all updates
AppDispatcher.register((action) =>{

    switch(action.actionType) {

        case AppConstants.ADD_NUMBER:
            // _getStateMessage(action.num);
            AppStore.addNumber(action.num);
            AppStore.emitChange()

            //alert(action.num);
            break;
        case AppConstants.GET_NUMBER:
            AppStore.getNumber();
            AppStore.emitChange()
            break;

        case AppConstants.SET_MESSAGE:
            AppStore.emitChange();
            break;

        default:
    }

});
export default AppStore;
