import { Card } from '@material-ui/core'
import React from 'react'
import { CardBody, CardHeader } from 'reactstrap'

// NOTE img pulled in by instaniating them as consts


class Icontiles extends React.Component{
    render(){
        return(
            <div className="col-3 d-flex align-items-center justify-content-center justify-content-center py-4" >
            <a href={this.props.link} rel="noreferrer" target="_blank">
                <Card>
                    <CardHeader>
                        <h2>{this.props.name}</h2>
                    </CardHeader>
                        <CardBody>
                            <img className="img-fluid" src={this.props.imgUrl} alt="This oddly doesn't work"/>
                        </CardBody>
                </Card>
            </a>
            </div>
        )
    }
}

export default Icontiles;