'use strict';

function CounterButton() {
    const state = React.useState(0);
    const count = state[0];
    const setCount = state[1];

    return (
        <div>
        <p>test counter</p>
            <button onClick={
                function () {
                    setCount(count - 1);
                }
            }>-</button>
            <span>{count}</span>
            <button onClick={
                function () {
                    setCount(count + 1);
                }
            }>+</button>
        </div>
    );
}

const rootNode = document.getElementById('root');
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(CounterButton));