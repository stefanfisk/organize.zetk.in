import React from 'react';
import { DragSource } from 'react-dnd';

import Avatar from '../../../misc/Avatar';


const contactSource = {
    beginDrag(props) {
        return props.contact;
    },

    endDrag(props, monitor, component) {
        const dropResult = monitor.getDropResult();
        if (!dropResult) {
            // This was not a successful drag
            return;
        }

        const person = monitor.getItem();
        const oldAction = props.data;
        const newAction = dropResult.newAction;
        const targetType = dropResult.targetType;

        if (targetType == 'participant' && dropResult.onMoveParticipant) {
            dropResult.onMoveParticipant(person, oldAction);
        }
        else if (targetType == 'contact' && dropResult.onSetContact) {
            dropResult.onSetContact(person, oldAction);
        }
    }
}

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

@DragSource('person', contactSource, collect)
export default class ContactSlot extends React.Component {
    render() {
        const contact = this.props.contact;

        var figure = null;
        if (contact) {
            figure = this.props.connectDragSource(
                <figure>
                    <Avatar person={ contact }/>
                </figure>
            );
        }


        return (
            <div className="ContactSlot">
                { figure }
            </div>
        );
    }
}

ContactSlot.propTypes = {
    contact: React.PropTypes.shape({
        id: React.PropTypes.number.isRequired,
        name: React.PropTypes.string.isRequired
    })
};
