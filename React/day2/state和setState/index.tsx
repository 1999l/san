; (() => {
    class Tool extends React.Component {
        //M
        //相当于vue里面的data
        //必须命名为state
        state: {
            name: string,
            skill: string[]
        } = {
                name: 'xff',
                skill: ['ps', 'js']
            }
        constructor(props) {
            super(props)
        }
        test() {
            console.log(this)
            this.setState({
                name: 'lin',
                skill: ['fff']
            })
        }
        render() {
            return (<div onClick={this.test.bind(this)} name={this.state.skill[0]}>{this.state.name}</div>)
        }
    }

    ReactDOM.render(
        <div>
            <Tool></Tool>
        </div>
        , document.querySelector('#demo')
    )
})()