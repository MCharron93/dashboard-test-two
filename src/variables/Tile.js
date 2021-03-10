import { Card } from '@material-ui/core'
import React from 'react'
import { CardBody, CardHeader } from 'reactstrap'

// NOTE img pulled in by instaniating them as consts
// const devTools = {
//     tiles: [
//         {
//             name: "Asana",
//             img: "../assets/img/Icon Tiles/asana-logo.png"
//         },
//         {   
//             name: "Instagram",
//             img: "../assets/img/Icon Tiles/instagram-logo.png"
//         }
//     ]
// } 

class Icontiles extends React.Component{
    // state = {
    //     tiles: [
    //         {
    //             name: "Asana",
    //             img: "../assets/img/Icon Tiles/asana-logo.png"
    //         },
    //         {   
    //             name: "Instagram",
    //             img: "../assets/img/Icon Tiles/instagram-logo.png"
    //         }
    //     ]
    // }

    render(){
        return(
            <Card>
                <CardHeader>
                    <h2>{this.props.name}</h2>
                </CardHeader>
                    <CardBody>
                        <img src={this.props.imgUrl} alt="Some Text here "/>
                    </CardBody>

                    {/* <a href="https://app.asana.com/0/home/1199896929625869" target="_blank" rel="noopener noreferrer">
                <img className="w-25" src={this.state.tiles.img} alt="instagram"/>
              <div className="pt-2">
                 Asana
              </div>
              </a> */}
            </Card>
        )
    }
}

export default Icontiles;