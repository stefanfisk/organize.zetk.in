import React from 'react';

import ImporterColumnHead from './ImporterColumnHead';


export default class ImporterTableHead extends React.Component {
    static propTypes = {
        columnList: React.PropTypes.shape({
            items: React.PropTypes.array.isRequired,
        }).isRequired,
        onChangeColumn: React.PropTypes.func,
        onEditColumn: React.PropTypes.func,
    };

    render() {
        let columns = this.props.columnList.items.map(i => i.data);

        return (
            <table className="ImporterTableHead">
                <tbody>
                    <tr>
                    { columns.map((col, idx) => (
                        <ImporterColumnHead key={ col.id } column={ col }
                            onChangeColumn={ this.props.onChangeColumn }
                            onEditColumn={ this.props.onEditColumn }/>
                    )) }
                    </tr>
                </tbody>
            </table>
        );
    }
}
