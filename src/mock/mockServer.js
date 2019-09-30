/* 
  使用 mockjs 提供 mock 数据接口
*/
import Mock from 'mockjs';
import data from './data.json';

// 返回 goods 的接口
Mock.mock('/goods', {code: 0, data: data.goods});
// 返回 ratings 的接口
Mock.mock('/ratings', {code: 0, data: data.ratings});
// 返回 info 的接口
Mock.mock('/info', {code: 0, data:data.info});

// export default xxx ??? 不需要向外暴露任何数据，只需要保证能执行即可