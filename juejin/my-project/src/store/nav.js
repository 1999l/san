export default {
    state: {
        xff: '0',
        offset1:''
    },
    setxff(newValue) {
        this.state.xff = newValue;
    },
    setoff(newValue) {
        // 调式
        this.state.offset1 = newValue;
    }, setState(newValue) {
        //调试
        this.state.xff = newValue;
    }
}