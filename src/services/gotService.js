export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }
    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`)
        }

        return await res.json();
    }

    getAllCharacters = async (n) => {
        const res = await this.getResource(`/characters?page=${n}`);
        return res.map(this._transformCharacter);
    }
    getCharacter = async (id) => {
        const res = await this.getResource(`/characters/${id}`);
        return this._transformCharacter(res);
    }
    getAllHouses = async (n) => {
        const res = await this.getResource(`/houses?page=${n}`);
        return res.map(this._transformHouse);
    }
    getHouse = async (id) => {
        const res = await this.getResource(`/houses/${id}`);
        return this._transformHouse(res);
    }
    getAllBooks = async (n) => {
        const res = await this.getResource(`/books?page=${n}`);
        return res.map(this._transformBook);
    }
    getBook = async (id) => {
        const res = await this.getResource(`/books/${id}`);
        return this._transformBook(res);
    }

    _transformCharacter(char) {
        const urlArr = char.url.split('/');
        return {
            id: urlArr[urlArr.length - 1],
            name: char.name || 'no info =(',
            gender: char.gender  || 'no info =(',
            born: char.born  || 'no info =(',
            died: char.died  || 'no info =(',
            culture: char.culture  || 'no info =('
        }
    }

    _transformHouse(house) {
        const urlArr = house.url.split('/');
        return {
            id: urlArr[urlArr.length - 1],
            name: house.name || 'no info =(',
            region: house.region || 'no info =(',
            words: house.words || 'no info =(',
            titles: house.titles || 'no info =(',
            overlord: house.overlord || 'no info =(',
            ancestralWeapon: house.ancestralWeapon || 'no info =('
        }
    }

    _transformBook(book) {
        const urlArr = book.url.split('/');
        return {
            id: urlArr[urlArr.length - 1],
            name: book.name || 'no info =(',
            numberOfPages: book.numberOfPages || 'no info =(',
            publiser: book.publiser || 'no info =(',
            released: book.released || 'no info =('
        }
    }

}

