import React, {Component} from 'react';
import GotService from "../../../services/gotService";
import RowBlock from "../../RowBlock/RowBlock";
import ItemList from '../../itemList';
import ItemDetails from '../../itemDetails/itemDetails';
import DetailsField from "../../DetailsField/DetailsField";
import ErrorMessage from "../../errorMessage/errorMessage";

export default class CharacterPage extends Component {
    gotService = new GotService()
    state = {
        selectedItem: null,
        error: false
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: true
        })
    }

    onItemSelected = (id) => {
        this.setState({
            selectedItem: id
        })
    }

    render() {

        if (this.state.error) {
            return <ErrorMessage/>
        }

        const randomPage = Math.floor(Math.random() * 214 + 1)

        const itemList = (
            <ItemList
                pageNumber={randomPage}
                onItemSelected = {this.onItemSelected}
                getData={this.gotService.getAllCharacters}
                renderItem={(item) => `${item.name} (${item.gender})`}
            />
        )

        const itemDetails = (
            <ItemDetails
                itemId={this.state.selectedItem}
                getData={this.gotService.getCharacter}
            >
                <DetailsField field='gender' label='Gender'/>
                <DetailsField field='born' label='Born'/>
                <DetailsField field='died' label='Died'/>
                <DetailsField field='culture' label='Culture'/>
            </ItemDetails>
        )

        return (
            <RowBlock left={itemList} right={itemDetails}/>
        )
    }
}
