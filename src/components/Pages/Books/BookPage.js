import React, {Component} from 'react';
import GotService from "../../../services/gotService";
import RowBlock from "../../RowBlock/RowBlock";
import ItemList from '../../itemList';
import ItemDetails from '../../itemDetails/itemDetails';
import DetailsField from "../../DetailsField/DetailsField";
import ErrorMessage from "../../errorMessage/errorMessage";

export default class BookPage extends Component {
    gotService = new GotService()
    state = {
        selectedBook: null,
        error: false
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: true
        })
    }

    onItemSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }

    render() {

        if (this.state.error) {
            return <ErrorMessage/>
        }

        const itemList = (<ItemList
            onCharSelected = {this.onItemSelected}
            getData={this.gotService.getAllBooks}
            renderItem={(item) => `${item.name} (${item.gender})`}
        />)

        const charDetails = (
            <ItemDetails charId={this.state.selectedBook}>
                <DetailsField field='numberOfPages' label='Number of pages'/>
                <DetailsField field='publiser' label='Publiser'/>
                <DetailsField field='released' label='Released'/>
            </ItemDetails>
        )

        return (
            <RowBlock left={itemList} right={charDetails}/>
        )
    }
}
