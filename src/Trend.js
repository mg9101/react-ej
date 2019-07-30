import React from 'react'

export default class Trend extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={this.props.color + " col-2"}>
                <div className="item-body">
                    <h5 className="item-title">{this.props.keyword}</h5>
                    <div className="item-img">
                        <img src={this.props.img} className="mb-auto" alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}