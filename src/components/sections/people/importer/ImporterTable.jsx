import React from 'react';

import ImporterTableHead from './ImporterTableHead';
import ImporterTableBody from './ImporterTableBody';
import {
    updateImportColumn,
    useImportTableFirstRowAsHeader,
} from '../../../../actions/importer';


export default class ImporterTable extends React.Component {
    static propTypes = {
        table: React.PropTypes.object.isRequired,
        dispatch: React.PropTypes.func.isRequired,
    };

    render() {
        let table = this.props.table;

        let removedInfo = null;
        if (table.numEmptyColumnsRemoved > 0) {
            let removedLabel = 'Empty columns removed: '
                + table.numEmptyColumnsRemoved;

            removedInfo = (
                <p>{ removedLabel }</p>
            );
        }

        return (
            <div className="ImporterTable">
                <h1>{ table.name }</h1>

                { removedInfo }

                Use first row as header:
                <input type="checkbox" checked={ table.useFirstRowAsHeader }
                    onChange={ this.onChangeFirstRow.bind(this) }/>
                <table>
                    <ImporterTableHead columnList={ table.columnList }
                        onChangeColumn={ this.onChangeColumn.bind(this) }/>
                    <ImporterTableBody table={ table }/>
                </table>
            </div>
        );
    }

    onChangeColumn(columnId, props) {
        let tableId = this.props.table.id;
        this.props.dispatch(
            updateImportColumn(tableId, columnId, props));
    }

    onChangeFirstRow(ev) {
        let tableId = this.props.table.id;
        let val = !this.props.table.useFirstRowAsHeader;
        this.props.dispatch(useImportTableFirstRowAsHeader(tableId, val));
    }
}
