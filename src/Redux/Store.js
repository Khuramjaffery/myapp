import { createStore } from "redux";
import { rootReducer } from "./CombinerRedux";

 const Store= createStore(rootReducer);

 export default Store;