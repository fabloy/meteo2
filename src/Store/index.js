import reducer from "./Store1";
import { configureStore } from "@reduxjs/toolkit";

const store1 = configureStore({reducer})

export default store1