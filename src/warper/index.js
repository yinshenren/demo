import React from 'react';
import { Link } from 'react-router-dom';
import { MAIN } from '../route';
import WarperUi from './warper_ui';
import './index.css';

const bg1 = require('./img/bg1.jpg');
const bg2 = require('./img/bg2.jpg');
const bg3 = require('./img/bg3.jpg');
const bg4 = require('./img/bg4.jpg');

export default class Warper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasDot: true,
            loop: true,
            imgArr: [bg1, bg2, bg3, bg4]
        }
    }

    componentDidMount() {
        // console.log("compontentDIdMount");
    }

    render() {
        const { hasDot, imgArr, loop} = this.state;
        return (
            <div className="warper">
                <Link to={MAIN} >
                    返回主页面
                </Link>
                <WarperUi hasDot={hasDot} imgArr={imgArr} loop={loop} />
            </div>
        );
    }
}