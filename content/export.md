在JavaScript模块中，使用export语句将某个变量、函数或类声明为可导出的成员。在React项目中也经常使用export来导出组件。

其中，有两种常见的export语句形式：export default和export(cjs 是 exports.xxx and module.exports = xxx)。

- export default

export default语句用于导出当前模块的默认值。通常情况下，在一个文件中，只能使用一次export default语句。在导入具有默认导出的模块时，可以不使用花括号来指定导入的名称。

例如，假设有一个名为MyComponent的组件，可以通过以下方式进行默认导出：

```jsx
const MyComponent = () => {
  return <div>Hello, World!</div>;
};

export default MyComponent;
```

在其他文件中，可以使用如下方式进行导入：

```jsx
import MyComponent from './path/to/MyComponent';
```

- export

export语句用于导出模块中的特定变量、函数或类。该语句可以声明多个导出项，并且导出项必须通过花括号 {} 进行包裹。

例如，假设有一个名为myFunction的函数和一个名为myVariable的变量，可以通过以下方式进行导出：

```jsx
export const myVariable = 42;

export function myFunction() {
  console.log('Hello, World!');
}
```

在其他文件中，可以使用如下方式进行导入：

```jsx
import { myVariable, myFunction } from './path/to/myModule';
```

综上所述，export default和export语句的主要区别在于：

- export default只能导出一个默认值；export关键字可以导出多个变量、函数或类。
- 在导入时，export default可以直接指定默认值；export关键字必须使用花括号来指定导入的名称。

开发者应根据需要和习惯选择合适的导出方式。同时，在一个项目中也可以同时使用两种方式进行模块导出，以满足不同的需求。