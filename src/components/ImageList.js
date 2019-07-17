import React, {PureComponent} from 'react';
import { Table } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

class ImageList extends PureComponent {
    constructor(){
        super();
        this.state = {
            plp : []
        }
    }

    componentDidMount =() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then((resp) => resp.json())
            .then((data) => {
                data = data.splice(0, 10);
                this.setState({plp : data})
            })
            .catch ((error) => console.error(JSON.stringify(error)));
    }

    render (){
        const {plp} = this.state;
        return(
            <Table className="container table-striped  mt-5">
                <thead className="thead-dark">
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Thumbnail</th>
                    </tr>
                </thead>
                <tbody>
                    {plp.map((pl) => {
                        return (
                            <tr key={pl.id}>
                                <td>{pl.id}</td>
                                <td>{pl.title}</td>
                                <td>
                                    <NavLink to={`/userdetail/${window.btoa(pl.url)}`}>
                                        <img src={pl.thumbnailUrl} alt={pl.title} /> 
                                    </NavLink>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        );
    }
};

export default ImageList;
