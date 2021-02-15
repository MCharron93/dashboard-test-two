import React from 'react';

import { 
    Container,
    Row,
    Card
} from "reactstrap";


class HumanResources extends Component {
    state = [
        {
            name: "Settings",
        },
        {
            name: "Documents"
        },
        {
            name: "Tables"
        },
    ]
render() {
    return (
        <React.Fragment>
        <Container>
            <Row>
                {this.state.tabs.map(tab =>{
                    return(
                        
                    )
                })}
            </Row>
        </Container>
        </React.Fragment>
    )
    }
}

export default HumanResources;