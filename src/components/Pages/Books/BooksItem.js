import React, {Component} from 'react';
import GotService from "../../../services/gotService";
import ItemDetails from '../../itemDetails/itemDetails';
import DetailsField from "../../DetailsField/DetailsField";

export default class BooksItem extends Component {

    gotService = new GotService()
    state = {
        selectedBook: 5
    }

    render() {
        return (
            <ItemDetails
                itemId={this.state.selectedBook}
                getData={this.gotService.getBook}
            >
                <DetailsField field='numberOfPages' label='Number of pages'/>
                <DetailsField field='publiser' label='Publiser'/>
                <DetailsField field='released' label='Released'/>
            </ItemDetails>
        )
    }
}