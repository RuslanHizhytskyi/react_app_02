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

    async getAllCharacters(n) {
        const res = await this.getResource(`/characters?page=${n}&pageSize=10`);
        return res.map(this._transformCharacter);
    }
    async getCharacter(id) {
        const res = await this.getResource(`/characters/${id}`);
        return this._transformCharacter(res);
    }
    getAllHouses() {
        return this.getResource(`/houses/`)
    }
    getHouse(id) {
        return this.getResource(`/houses/${id}`)
    }
    getAllBooks() {
        return this.getResource(`/books/`)
    }
    getBook(id) {
        return this.getResource(`/book/${id}`)
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
        return {
            name: house.name || 'no info =(',
            region: house.region || 'no info =(',
            words: house.words || 'no info =(',
            titles: house.titles || 'no info =(',
            overlord: house.overlord || 'no info =(',
            ancestralWeapon: house.ancestralWeapon || 'no info =('
        }
    }

    _transformBook(book) {
        return {
            name: book.name || 'no info =(',
            numberOfPages: book.numberOfPages || 'no info =(',
            publiser: book.publiser || 'no info =(',
            released: book.released || 'no info =('
        }
    }

}

