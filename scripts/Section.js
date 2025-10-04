export default class Section {
  constructor({ items, renderer }, conteinerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._conteinerSelector = document.querySelector(conteinerSelector);
  }
  addItem() {
    this._conteinerSelector.append(this._items);
  }
}
