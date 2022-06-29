import { legacy_createStore as createstore,combineReducers,applyMiddleware,compose  } from "redux";
import thunk from "redux-thunk";
import { getuserbyIDreducer } from "./getuser/getuser-reducer";
import { login } from "./loginreducer/login-action";
import { loginreducer } from "./loginreducer/login-reducer";
import { registerreducer } from "./registerreducer/register-reducer";




export const store = createstore(
    combineReducers({
        register:registerreducer,
        login:loginreducer,
        user:getuserbyIDreducer
    }),
    compose(applyMiddleware(thunk))
)


