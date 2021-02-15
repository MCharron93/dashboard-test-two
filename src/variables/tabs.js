import React from 'react';
import { 
    Card,
    Col, 
} from 'reactstrap';

// NOTE similar to vue, we pass in the props of objs to the "class", in this case in the form of an obj with the properties/keys of title & description
function Tab({name}){

    return(
        // NOTE since these are both properties, they will be injected into the JSX when the acutal .map() fires within the app rendering.
            <Col className="p-2">
                <Card>
                    <div>
                        <h1 className="heading-one">{name}</h1>
                    </div>
                </Card>
            </Col>
    )
}

export default Tab;