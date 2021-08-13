import React, {Component} from 'react';
import GotService from "../../../services/gotService";
import ItemDetails from '../../itemDetails/itemDetails';
import DetailsField from "../../DetailsField/DetailsField";

export default class BooksItem extends Component {

    gotService = new GotService()

    render() {
        return (
            <ItemDetails
                itemId={this.props.bookId}
                getData={this.gotService.getBook}
            >
                <DetailsField field='numberOfPages' label='Number of pages'/>
                <DetailsField field='publiser' label='Publiser'/>
                <DetailsField field='released' label='Released'/>
            </ItemDetails>
        )
    }
}