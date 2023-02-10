// rsc 하지않기 (순수 자바스크립트 파일)
//component가 아니라 순수 자바파일이다.

// 1. action 생성
//파일명 + action 명 (중복방지하려고 파일명 앞에 쓰는 것)
const RED = 'color/RED'
const YELLOW = 'color/YELLOW'
const GREEN = 'color/GREEN'
const BLUE= 'color/BLUE'
const MAGENTA = 'color/MAGENTA'
const CYAN = 'color/CYAN'


// 2. action 보내기
export const red = () => ({type: RED})
export const yellow = () => ({type: YELLOW})
export const green = () => ({type: GREEN})
export const blue = () => ({type: BLUE})
export const magenta = () => ({type: MAGENTA})
export const cyan = () => ({type: CYAN})

// 3. 초기값
const initialState = {color: 'hotpink'}

// 4. reducer 함수 만들기 -state, action 파라미터를 참조하여, 새로운 상태 객체를 만들어서 반환한다.
//                     -state: 현재상태, action: 액션객체
const reducer = (state = initialState, action) =>{
  switch(action.type){
    case RED:
      return {color: 'red'}

    case YELLOW:
      return {color: 'yellow'}

    case GREEN:
      return {color: 'green'}

    case BLUE:
      return {color: 'blue'}

     case MAGENTA:
      return {color: 'magenta'}

     case CYAN:
      return {color: 'cyan'}

      default:
        return state

  }
}
export default reducer