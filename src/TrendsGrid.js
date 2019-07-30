import React from 'react'
import Trend from './Trend'

export default class TrendsGrid extends React.Component {
    constructor(props) {
        super(props);
        this.colorHandler = this.colorHandler.bind(this);
        this.state = {
            columns: Array(this.props.columnas).fill(null),
            matrix: []
        }
    }

    colorHandler() {
        let color1 = this.color ? 'item' : 'item2';
        this.color = !this.color;
        return color1;
    }

    render() {
        // console.log(this.props.matrix);
        let matrix =  (this.props.matrix);

        let randomStart = Math.floor(Math.random() * (this.props.columnas));
        console.log(matrix);
        if (matrix){
            return(
                <div className="container-fluid">
                    <div className="row">
                        {
                            matrix.map((m, i) => {
                                // matrix[0][randomStart].img = "http://mla-s2-p.mlstatic.com/965256-MLA31352778775_072019-I.jpg";
                                return (
                                    m.map((item, j) => {
                                        if (i !== 0){
                                            if (j !== 0) {
                                                if (m[j-1].img === "" && matrix[i -1][j].img === "" ) {
                                                    item.img = "http://mla-s2-p.mlstatic.com/965256-MLA31352778775_072019-I.jpg";
                                                    item.color = "item";
                                                } else {
                                                    item.img = "";
                                                    item.color = "item2";
                                                }
                                            } else {
                                                if (matrix[i -1][j].img === "" ) {
                                                    item.img = "http://mla-s2-p.mlstatic.com/965256-MLA31352778775_072019-I.jpg";
                                                    item.color = "item";
                                                }else {
                                                    item.img = "";
                                                    item.color = "item2";
                                                }
                                            }
                                        } else {
                                            if (j !== 0) {
                                                if (m[j-1].img === "") {
                                                    item.img = "http://mla-s2-p.mlstatic.com/965256-MLA31352778775_072019-I.jpg";
                                                    item.color = "item";
                                                } else {
                                                    item.img = "";
                                                    item.color = "item2";
                                                }
                                            } else {
                                                if (randomStart === 0) {
                                                    item.img = "http://mla-s2-p.mlstatic.com/965256-MLA31352778775_072019-I.jpg";
                                                    item.color = "item";
                                                } else {
                                                    item.img = "";
                                                    item.color = "item2";
                                                }

                                            }
                                        }
                                        return <Trend key={i + j} keyword={item.keyword} color={item.color} img={item.img} />
                                    })
                                )
                            })
                        }
                    </div>
                </div>
            );
        } else {
            return(
                <div>LOADING</div>
            );
        }

    }
}