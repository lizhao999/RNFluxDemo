/**
 * Created by Lizhao on 2017/4/25.
 */

import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

let AppActions = {

    addNumberAction(num) {
        // do some async stuff here and dispatch to stores
        AppDispatcher.dispatch({
            actionType: AppConstants.ADD_NUMBER,
            num: num
        });
    },
    getNumberAction(){
      AppDispatcher.dispatch(
          {
              actionType:AppConstants.GET_NUMBER,
          }
      )
    }

};

export default AppActions;