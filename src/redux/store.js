import { createStore } from "redux";
import reducer from "./reducer";

const mapstate = (state) => {
    return { state }
}

function configureStore(state = {}) {
  return createStore(reducer,state);
}

export default configureStore;
