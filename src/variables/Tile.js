import { Card } from '@material-ui/core'
import React from 'react'
import { CardBody, CardHeader } from 'reactstrap'

// NOTE img pulled in by instaniating them as consts


class Icontiles extends React.Component{
    render(){
        return(
            <Card>
                <CardHeader>
                    <h2>{this.props.name}</h2>
                </CardHeader>
                    <CardBody>
                        <img src={this.props.imgUrl} alt="Some Text here"/>
                    </CardBody>
            </Card>
        )
    }
}

export default Icontiles;