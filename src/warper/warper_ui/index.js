import React from 'react';

import './index.css';

export default class WarperUi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            shouldMove: false,
            dTarget: document.getElementsByClassName('warper0')[0] || {},
            x: 0
        }
    }
    componentDidMount() {
        const {index, dTarget} = this.state
        this.state.dTarget = document.getElementsByClassName('warper0')[0] || {};
        this.state.dTarget.style.marginLeft = `${index * this.state.dTarget.clientWidth}px`
    }
    componentWillUpdate(nextProps, nextState) {
        if (nextState.index < 0) nextState.index = 0;
        if (nextState.index >= this.props.imgArr.length) nextState.index = this.props.imgArr.length - 1;
        const {index} = nextState
        this.state.dTarget.style.marginLeft = `${-index * this.state.dTarget.clientWidth}px`
        if(nextState.index !== this.state.index) return true;
        return false;
    }
    onKeyDown = (el) => {
        const e = el || window.event;
        e.stopPropagation();
        e.preventDefault();
        this.state.shouldMove = true;
        this.state.x = e.clientX;
        // console.log(1)
    }
    onKeyMove = (el) => {
        const e = el || window.event;
        // alert(2)
        e.stopPropagation();
        // alert(this.state.shouldMove)
        if(!this.state.shouldMove) return null;
        // 修改元素位置
        this.state.dTarget.style.marginLeft = e.clientX - this.state.x - this.state.index * this.state.dTarget.clientWidth +'px'
    }
    onKeyUp = (el) => {
        // alert(3)
        const e = el || window.event;
        e.stopPropagation();
        const { imgArr } = this.props;
        const {index, dTarget} = this.state
        if(!this.state.shouldMove) return null;
        this.state.shouldMove = false;
        const xIndex = (e.clientX - this.state.x) / this.state.dTarget.clientWidth || 0;
        const tIndex = index - (xIndex > 0 ? Math.ceil(xIndex) : Math.floor(xIndex));
        const fIndex = tIndex < 0 ? 0 : tIndex >= imgArr.length - 1 ? imgArr.length - 1 : tIndex;
        this.setState({
            index: fIndex
        })
        this.state.dTarget.style.marginLeft = `${(fIndex > 0 ? fIndex : 0) * -this.state.dTarget.clientWidth}px`
        // console.log(fIndex);
    }
    toClick = (i) => {
        this.setState({
            index: i
        })
        // console.log(i)
    }
    render() {
        const { hasDot = false, imgArr = [], loop = true } = this.props;
        const { index, dTarget } = this.state;
        return (
            Array.isArray(imgArr) && imgArr.length &&
            <div className="warper_ui">
                {
                    hasDot &&
                    <div className="warper_footer">
                        {
                            imgArr.map((item, i) => {
                                return (
                                    <div className={`warper_dot${i === index ? ' active' : ''}`} key={`warper${i}`} onClick={() => {this.toClick(i)}} />
                                );
                            })
                        }
                    </div>
                }
                <div className="warper_touch">
                    <div className="touch_left" onClick={() => {this.setState({index: this.state.index - 1})}}></div>
                    <div className="touch_right" onClick={() => {this.setState({index: this.state.index + 1})}}></div>
                </div>
                <div className="warper_body">
                    {
                        imgArr.map((item, i) => {
                            return (
                                <div  key={`warper${i}`} className={`warper_img warper${i}`}
                                    onMouseDown={(e) => {this.onKeyDown(e)}}
                                    onMouseMove={(e) => {this.onKeyMove(e)}}
                                    onMouseUp={(e) => {this.onKeyUp(e)}}
                                    onMouseLeave={(e) => {this.onKeyUp(e)}}
                                    onTouchStart={(e) => {this.onKeyDown(e)}}
                                    onTouchMove={(e) => {this.onKeyMove(e)}}
                                    onTouchEnd={(e) => {this.onKeyUp(e)}}
                                >
                                    <img src={item} alt="图片加载失败" />
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}