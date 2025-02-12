// các kiểu dữ liệu trong JS
// - Number
// - Boolean kiểm tra đúng 
// - undefined báo biến nhưng chưa gán gì
// - null không có gì cả
// - Symbol
// - function hàm
// - ofjiect là đối tượng có thể chứa nhiều loại dữ liệu


// Mảng
// const mang = ['trau' , 'cho', 'lon']
// console.log(mang[1]);
// thêm phần tử vào mảng
// console.log(mang.join('vit'));



// Arrow function (hàm mũi tên)
// ví dụ:
import logger from './abc.js';
logger('hehhehe')

// const name = 'Tuan'
// const age = '24'
// const HoTen = {name, age}
// console.log(HoTen)

// const object = {
//     Chao() {
//       console.log("chào bà con");
//     },
//   };


// const array1 = ['a', 'b', 'c']
// const array2 = ['d', 'e', 'f']
// const array3 = [...array1, ...array2]
// console.log(array3)


// Phương thức createElement
// const element = React.createElement(
//     'h1', 
//     { 
//     className: 'title' 
//     },  
//     'Hú lee',
//     React.createElement('p', {}, 'Tôi ở đây để test'),
// );

// const container = document.getElementById('root')
// react 17
//   ReactDOM.render(element, root)

// react 18
// const root = ReactDOM.createRoot(container);
// root.render(element);

// JSX
 const courses = [
    {
        name: 'HTML, CSS'
    },

    {
        name: 'JavaScript'
    },

    {  
        name: 'ReactJS'
    },
 ]
 const jsx = (
  <ul>
      {courses.map(course =>
        <li>{course.name}</li>
    )}
  </ul>
)