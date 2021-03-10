import { Card } from '@material-ui/core'
import React from 'react'
import { CardBody, CardHeader } from 'reactstrap'

// NOTE img pulled in by instaniating them as consts


class Icontiles extends React.Component{
    render(){
        console.log(this.props.imgUrl)
        return(
            <div className="col-3 d-flex align-items-center justify-content-center justify-content-center py-4" >
            <Card>
                <CardHeader>
                    <h2>{this.props.name}</h2>
                </CardHeader>
                    <CardBody>
                        <img className="img-fluid" src={this.props.imgUrl} alt="This oddly doesn't work"/>
                    </CardBody>
            </Card>
            </div>
        )
    }
}

export default Icontiles;