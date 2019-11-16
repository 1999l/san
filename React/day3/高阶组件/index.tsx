class List extends React.Component {
    render() {
        return (
            <div>List1</div>
        )
    }
}

const HOC = (props) => {
    return (Component) => {
        return () => {
            return <Component {...props} />
        }
    }
}

const HOCList2 = HOC({
    getCookie() { }
})(
    HOC({
        ajax: () => { }
    })(class List2 extends React.Component {
        render() {
            return (
                <div>List</div>
            )
        }
    })
)

//这个List组件合并了一个全新props,返回得到一个拥有更多功能的List组件
//list ->HOCList
const HOCList = HOC({
    name: 'xff'
})(List)

console.log(HOCList);

const template = <ul>
    <List />
    <HOCList />
    <HOCList2 />
</ul>

const el = document.querySelector('#demo')
ReactDOM.render(template, el)
