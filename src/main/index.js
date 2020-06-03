import React from 'react';
import { Link } from 'react-router-dom';
import { TAB, WARPER } from '../route';
import './index.css';

export default class Login extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {
        // console.log("compontentDIdMount");
    }

    render() {
        return (
            <div className="main">
                <div className="tab">
                    <Link to={TAB} >
                        选项卡
                    </Link>
                </div>
                <div className="list">
                    <Link to={WARPER}>
                        轮播图(未开发完)
                    </Link>
                </div>
            </div>
        );
    }
}