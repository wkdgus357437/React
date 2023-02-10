// rsc 하지않기 (순수 자바스크립트 파일)
//component가 아니라 순수 자바파일이다.

// 1. action 생성
//파일명 + action 명 (중복방지하려고 파일명 앞에 쓰는 것)
const TIGER = 'animal/TIGER'
const CAT = 'animal/CAT'
const DOG = 'animal/DOG'
const CHICK = 'animal/CHICK'

// 2. action 보내기
export const tiger = () => ({type :TIGER})
export const cat = () => ({type :CAT})
export const dog = () => ({type :DOG})
export const chick = () => ({type :CHICK})

// 3. 초기값
const initialState = {name:'',crying:''} 

// 4. reducer 함수 만들기 -state, action 파라미터를 참조하여, 새로운 상태 객체를 만들어서 반환한다.
//                     -state: 현재상태, action: 액션객체
const reducer = (state = initialState,action) =>{
  switch (action.type) {
    case TIGER:
      return {name: '호랑이',crying:'어흥'}
    
    case CAT:
      return {name: '고양이',crying:'애옹'}
    
    case DOG:
      return {name: '강아지',crying:'멍멍'}

      case CHICK:
      return {name: '병아리',crying:'삐약'}

    default:
      return state
  }
}

export default reducer