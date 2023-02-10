// rsc 하지않기 (순수 자바스크립트 파일)
//component가 아니라 순수 자바파일이다.

// 1. action 생성
//파일명 + action 명 (중복방지하려고 파일명 앞에 쓰는 것)
const INCREMENT = 'count/INCREMENT'
const DECREMENT = 'count/DECREMENT'
const RESET ='count/RESET'

// 2. action 보내기
export const increment = () => ({type: INCREMENT})
export const decrement = () => ({type: DECREMENT})
export const reset = () => ({type: RESET})

// 3. 초기값
// const initialState = 0
const initialState = {count:0} 

// 4. reducer 함수 만들기 -state, action 파라미터를 참조하여, 새로운 상태 객체를 만들어서 반환한다.
//                     -state: 현재상태, action: 액션객체

const reducer = (state = initialState,action)=>{
  switch(action.type){
    case INCREMENT:
      return {count:state.count+1}
      

    case DECREMENT:
      return {count:state.count-1}

    case RESET:
      return {count:0}
    
    default:
        return state
  }
}
export default reducer