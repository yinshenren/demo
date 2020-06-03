import React from 'react';
import './index.css';

export default class TabUi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        }
    }
    changeTab = (index) => {
        this.setState({
            index: index
        })
    }
    renderTabs = (tab) => {
        const {tabs = [], type = 'text'} = tab;
        if (Array.isArray(tabs) && tabs.length) {
            if(type === 'text') {
                // console.log('tabs', tabs)
                return (
                    <div className="tab_header">
                        {
                            tabs.map((item, index) => {
                                return (
                                    <div className={`tab_top ${this.state.index === index ? 'active ' : ''}tab${index}`} key={`tab_top${index}`} onClick={() => {this.changeTab(index)}}>
                                        {`${item}`}
                                    </div>
                                );
                            })
                        }
                    </div>
                );
            }
        } else {
            return null;
        }
    }
    renderBody = (contexts) => {
        const { index = 0 } = this.state;
        return (
            <div className="tab_body" >
                {contexts[index]}
            </div>
        );
    }
    render() {
        const { tabs = {}, contexts = [], className = 'tab_ui' } = this.props || {};
        // console.log('props', this.props)
        return (
            <div className={className}>
                {this.renderTabs(tabs)}
                {this.renderBody(contexts)}
            </div>
        );
    }
}