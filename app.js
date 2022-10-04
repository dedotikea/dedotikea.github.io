'use strict';

function CounterButton() {
    var state = React.useState(0);
    var count = state[0];
    var setCount = state[1];

    return React.createElement(
        'div',
        null,
        React.createElement(
            'p',
            null,
            'test counter'
        ),
        React.createElement(
            'button',
            { onClick: function onClick() {
                    setCount(count - 1);
                } },
            '-'
        ),
        React.createElement(
            'span',
            null,
            count
        ),
        React.createElement(
            'button',
            { onClick: function onClick() {
                    setCount(count + 1);
                } },
            '+'
        )
    );
}

var rootNode = document.getElementById('root');
var root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(CounterButton));