var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Context 可以让我们无需明确地传遍每一个组件,就能将值深入传递进组件数
// 为当前的theme 创建一个context ("light"为默认值)
var ThemeContext = React.createContext('light');
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        //使用一个Provider 来将当前的theme 传递给以下的组件
        //无论多深,任何组件都能读取这个值
        //在这个例子中,我们将"dark"作为当前的值传递下去
        return (React.createElement(ThemeContext.Provider, { value: "dark" },
            React.createElement(Toolbar, null)));
    };
    return App;
}(React.Component));
//中间的组件再也不必指明忘下传递 theme了
function Toolbar(props) {
    return (React.createElement("div", null,
        React.createElement(ThemeButton, null)));
}
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.render = function () {
        return (React.createElement("div", null, "\u6309\u94AE"));
    };
    return Button;
}(React.Component));
var ThemeButton = /** @class */ (function (_super) {
    __extends(ThemeButton, _super);
    function ThemeButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ThemeButton.prototype.render = function () {
        return React.createElement(Button, { theme: this.context });
    };
    // 指定 contextType 读取当前的theme context
    // React 会往上找到最近的theme provider , 然后使用他的值
    //在这个例子中,当前的theme 值为"dark"
    ThemeButton.contextType = ThemeContext;
    return ThemeButton;
}(React.Component));
var el = document.querySelector('#demo');
ReactDOM.render(React.createElement("div", null,
    React.createElement(App, null)), el);
