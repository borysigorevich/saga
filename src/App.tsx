import {Provider} from 'react-redux'
import "@fontsource/nunito"

import {store} from "./store";
import {Home} from "./pages";

function App() {
    return (
        <Provider store={store}>
            <Home/>
        </Provider>
    )
}

export default App
