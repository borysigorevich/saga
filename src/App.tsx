import {Provider} from 'react-redux'
import "@fontsource/nunito"
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'

import {store} from "./store";
import {Home} from "./pages";

function App() {
    return (
        <DndProvider backend={HTML5Backend}>
            <Provider store={store}>
            <Home/>
        </Provider>
        </DndProvider>
    )
}

export default App
