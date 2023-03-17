import {put, call, takeEvery} from 'redux-saga/effects'
import {sagaActions} from "./sagaActions";
import {getProducts} from "../store/productsSlice";

function* fetchProductsSaga(action: any): any {
    const response: any = yield call(() => fetch('https://dummyjson.com/products'))
    const data = yield response.json()
    yield put(getProducts(data.products))

}

export default function* rootSaga() {
    yield takeEvery(sagaActions.FETCH_PRODUCTS_SAGA, fetchProductsSaga)
}
