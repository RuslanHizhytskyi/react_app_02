import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import GotService from "../../../services/gotService";
import ItemList from '../../itemList';
import ErrorMessage from "../../errorMessage/errorMessage";

class BookPage extends Component {
    gotService = new GotService()
    state = {
        error: false
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: true
        })
    }


    render() {

        if (this.state.error) {
            return <ErrorMessage/>
        }


        return (
            <ItemList
                pageNumber={1}
                onItemSelected = {(itemId) => {
                    this.props.history.push(itemId)
                }}
                getData={this.gotService.getAllBooks}
                renderItem={(item) => `${item.name}`}
            />
        )
    }
}

export default  withRouter(BookPage);
