import React from 'react';
import TabUi from './tab_ui';
import './index.css';

export default class Tab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabText: {
                type: 'text',
                tabs: ['Tab1', 'Tab2', 'Tab3']
            },
            tabImg: {
                type: 'img',
                tabs: ['Tab1', 'Tab2', 'Tab3']
            },
            contexts: ['tab1内容', 'tab2内容', 'tab3内容'],
            isShow: false
        }
    }

    componentDidMount() {
        // console.log("compontentDIdMount");
    }
    
    goBack = () => {
        this.props.history.go(-1);
    }

    render() {
        const { tabText = {}, tabImg ={}, contexts = []} = this.state;
        return (
            <div className="list">
                <div className="go_back" onClick={() => {this.goBack()}}>
                    返回上一页
                </div>
                <TabUi tabs={tabText} contexts={contexts} className="tab_text" />
                {/* <TabUi tabs={tabImg} contexts={contexts} className="tab_img" /> */}
            </div>
        );
    }
}