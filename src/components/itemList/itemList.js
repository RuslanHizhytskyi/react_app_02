import React, {Component} from 'react';
import gotService from '../../services/gotService'
import './itemList.css';
import Spinner from "../spinner/spinner";
export default class ItemList extends Component {

    gotService = new gotService();

    state = {
        charList: null
    }

    componentDidMount() {
        this.gotService.getAllCharacters(Math.floor(Math.random() * 80 + 5))
            .then((charList) => {
                this.setState({charList})
            })
    }

    renderItems(arr) {
        return arr.map(({id, name}) => {
            return (
                <li
                    key={id}
                    className="list-group-item"
                    onClick={ () => this.props.onCharSelected(id) }
                >
                    {name}
                </li>
            )
        })
    }

    render() {
        const {charList} = this.state;


        if (!charList) {
            return <Spinner/>
        }

        const items = this.renderItems(charList)

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}