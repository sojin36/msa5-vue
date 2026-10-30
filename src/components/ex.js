const num = { id: 1 };
function test() {
  return 3;
}


// 내보내는 방법 3가지
export default num; // 1. 무조건 하나만 내보낼 수 있음!!

// 2. 여러 개 내보내고 싶으면 객체를 만들어주면 됨
// export default{
//   num, test
// }

// 3. export로 하나씩 하나씩 내보내기