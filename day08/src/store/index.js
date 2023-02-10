// rsc 하지않기 (순수 자바스크립트 파일)
import { combineReducers} from 'redux';
import color from './modules/color.js';
import count from './modules/count.js';
import animal from './modules/animal.js'

export default combineReducers({
  
  //! 이름 : 리듀서 파일
  colorReducer : color,
  countReducer: count,
  animalReducer: animal
})


