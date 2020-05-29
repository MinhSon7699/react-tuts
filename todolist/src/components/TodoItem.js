import React, { Component } from 'react';
import classassNames from 'classnames';
import PropTypes from 'prop-types';  

import './TodoItem.css';
import checkImg from '../img/notyet.svg';
import checkImgDone from '../img/done.svg';

class TodoItem extends Component {
    render(){
        const { item, onClick } = this.props;
        let url = checkImg;
        if (item.isComplete) {
            url = checkImgDone;
        }

        return (
            <div className={classassNames('TodoItem', {
                'TodoItem-complete': item.isComplete
            })}>
                <img onClick={onClick} src={url} width={32} height={32}/>
                <p>{this.props.item.title}</p>
            </div>
        );
    }
}
TodoItem.propTypes = {
    item: PropTypes.shape({
        isComplete: PropTypes.bool.isRequired,
        title: PropTypes.string.isRequired
    }),
    onClick: PropTypes.func.isRequired
};

export default TodoItem;