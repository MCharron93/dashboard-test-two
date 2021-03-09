import { Card } from '@material-ui/core'
import React from 'react'
import { CardBody, CardHeader } from 'reactstrap'

// NOTE img pulled in by instaniating them as consts 

class Icontiles extends React.Component{
    state = {
        tiles: [
            {
                name: "Asana",
                img: "../assets/img/Icon Tiles/asana-logo.png"
            }
        ]
    }

    render(){
        return(
            <Card>
                <CardHeader>
                    <h1>{this.state.tiles.name}</h1>
                </CardHeader>
                    <CardBody>
                        <img src={this.state.tiles.img} alt="this didn't work"></img>
                    </CardBody>
            </Card>
        )
    }
}

export default Icontiles;