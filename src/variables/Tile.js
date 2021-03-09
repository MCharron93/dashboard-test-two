import { Card } from '@material-ui/core'
import React from 'react'
import { CardHeader } from 'reactstrap'

class Icontiles extends React.Component{
    state = {
        tiles: [ 1, 2, 1, 2, 5, 3, 5]
    }

    render(){
        return(
            <Card>
                <CardHeader>
                    <h1>Hello</h1>
                </CardHeader>
            </Card>
        )
    }
}

export default Icontiles;