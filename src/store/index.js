import { createStore, applyMiddleware } from "redux"
import rootReducer from "../reducers"
import { createEpicMiddleware } from "redux-observable"
import { rootEpic } from "../epics"

 export const configureStore = ()=>{
    let epicMiddleWare = createEpicMiddleware()
    let store = createStore(
        rootReducer,
        applyMiddleware(epicMiddleWare)
    )
    epicMiddleWare.run(rootEpic)
    return store;
}
