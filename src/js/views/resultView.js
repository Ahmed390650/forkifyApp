'use strict';
import previewView from './previewView';
import View from './View';

class ResultView extends View {
  _parentElement = document.querySelector('.results');
  _message = 'cound not find recipes results';
  _generateMarkup() {
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }
}
export default new ResultView();
