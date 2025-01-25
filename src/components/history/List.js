import React from 'react';
import { Table } from 'reactstrap';

const List = (props) => {
    const { data } = props

    return (
        <Table borderless>
            <thead>
                <tr>
                    
                    <th>Player</th>
                    <th>Score</th>
                    <th>Flips</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.score}</td>
                        <td>{item.flipCount}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default List;