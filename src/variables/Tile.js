import { Card } from '@material-ui/core'
import React from 'react'
import { CardBody, CardHeader } from 'reactstrap'

// NOTE img pulled in by instaniating them as consts


class Icontiles extends React.Component{
    render(){
        console.log(this.props.imgUrl)
        return(
            <Card>
                <CardHeader>
                    <h2>{this.props.name}</h2>
                </CardHeader>
                    <CardBody>
                        <img className="img-fluid" src={this.props.imgUrl} alt="This oddly doesn't work"/>
                    </CardBody>
            </Card>
        )
    }
}

export default Icontiles;