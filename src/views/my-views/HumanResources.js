import React from 'react';
import Tab from 'variables/tabs.js'

import { 
    // Card,
    Container,
    Row,
    // Card
} from "reactstrap";


class HumanResources extends React.Component {
    state = {
        tabs: [
        {
            name: "Settings",
        },
        {
            name: "Documents"
        },
        {
            name: "Tables"
        },
    ]}
render() {
    return (
        <React.Fragment>
        <Container>
            <Row className="d-flex justify-content-center">
                {this.state.tabs.map(tab =>{
                    return(
                        <Tab key={tab.index} name={tab.name} />
                    )
                })}
            </Row>
        </Container>
        </React.Fragment>
    )
    }
}

export default HumanResources;