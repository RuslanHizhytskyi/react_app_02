import React, {Component} from 'react';
import GotService from "../../../services/gotService";
import RowBlock from "../../RowBlock/RowBlock";
import ItemList from '../../itemList';
import ItemDetails from '../../itemDetails/itemDetails';
import DetailsField from "../../DetailsField/DetailsField";
import ErrorMessage from "../../errorMessage/errorMessage";

export default class HousePage extends Component {
    gotService = new GotService()
    state = {
        selectedHouse: null,
        error: false
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: true
        })
    }

    onItemSelected = (id) => {
        this.setState({
            selectedHouse: id
        })
    }

    render() {

        if (this.state.error) {
            return <ErrorMessage/>
        }

        const randomPage = Math.floor(Math.random() * 45 + 1)

        const itemList = (
            <ItemList
                pageNumber={randomPage}
                onItemSelected = {this.onItemSelected}
                getData={this.gotService.getAllHouses}
                renderItem={(item) => `${item.name}`}
            />
        )

        const bookDetails = (
            <ItemDetails
                itemId={this.state.selectedHouse}
                getData={this.gotService.getHouse}
            >
                <DetailsField field='region' label='Region'/>
                <DetailsField field='words' label='Words'/>
                {/*<DetailsField field='titles' label='Titles'/>*/}
                {/*<DetailsField field='overlord' label='Overlord'/>*/}
                {/*<DetailsField field='ancestralWeapon' label='Ancestral weapon'/>*/}
            </ItemDetails>
        )

        return (
            <RowBlock left={itemList} right={bookDetails}/>
        )
    }
}
