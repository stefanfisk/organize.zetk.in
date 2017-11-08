import React from 'react';

import AssignedRouteListItem from './items/AssignedRouteListItem';
import List from './List';


export default class AssignedRouteList extends React.Component {
    static propTypes = {
        onItemClick: React.PropTypes.func,
        assignedRouteList: React.PropTypes.shape({
            error: React.PropTypes.any,
            isPending: React.PropTypes.bool,
            items: React.PropTypes.array.isRequired,
        }).isRequired,
    };

    render() {
        let columns = [
            {
                'route': 'lists.assignedRouteList.header.route',
                'assignment': 'lists.assignedRouteList.header.assignment',
            },
            {
                'canvasser': 'lists.assignedRouteList.header.canvasser',
            },
        ];

        return (
            <List className="AssignedRouteList"
                headerColumns={ columns }
                sortFunc={ sortFunc }
                itemComponent={ AssignedRouteListItem }
                list={ this.props.assignedRouteList }
                onItemClick={ this.props.onItemClick }/>
        );
    }
}

let sortFunc = (i0, i1, field) => {
    let ar0 = i0.data;
    let ar1 = i1.data;

    if (field == 'assignment') {
        return ar0.assignment.title.localeCompare(ar1.assignment.title);
    }
    else if (field == 'route') {
        let r0 = ar0.route;
        let r1 = ar1.route;

        if (r0.title && !r1.title) {
            return -1;
        }
        else if (r1.title && !r0.title) {
            return 1;
        }
        else {
            let t0 = r0.title || r0.id;
            let t1 = r1.title || r1.id;
            return t0.localeCompare(t1);
        }
    }
    else if (field == 'canvasser') {
        if (ar0.canvasser && !ar1.canvasser) {
            return -1;
        }
        else if (ar1.canvasser && !ar0.canvasser) {
            return 1;
        }
        else if (!ar1.canvasser && !ar0.canvasser) {
            return 0;
        }
        else {
            return ar0.canvasser.name.localeCompare(ar1.canvasser.name);
        }
    }
    else {
        return 0;
    }
};
