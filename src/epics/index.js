import { combineEpics } from "redux-observable";
import { getUserEpic } from "./userEpic";

export const rootEpic = combineEpics(
    getUserEpic
)