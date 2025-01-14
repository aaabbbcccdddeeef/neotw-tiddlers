类组件和useState()钩子都用于处理React组件中的状态（state），但它们之间有一些区别。

首先，类组件是使用ES6 class语法创建的，而useState()是一个React钩子函数，用于函数式组件中定义状态。因此，使用类组件需要继承React的Component类，而使用useState需要在函数式组件中调用useState钩子。

其次，类组件的状态是通过类成员变量（this.state）进行管理，并且必须在构造函数中初始化。例如：

```jsx
import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'World'
    };
  }
  
  handleClick = () => {
    this.setState({ name: 'Alice' });
  };
  
  render() {
    return (
      <div>
        <h1>Hello, {this.state.name}!</h1>
        <button onClick={this.handleClick}>Change Name</button>
      </div>
    );
  }
}
```

上面的示例中，MyComponent类的本地状态通过this.state进行管理，初始值为'World'。 handleClick()方法可以更新状态值，从而更改组件的呈现方式。

而钩子useState()则是通过声明式函数创建状态，如下所示：

```jsx
import { useState } from 'react';

function MyComponent() {
  const [name, setName] = useState('World');
  
  const handleClick = () => {
    setName('Alice');
  };
  
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <button onClick={handleClick}>Change Name</button>
    </div>
  );
}
```

在上面的示例中，useState钩子创建了一个名为name的状态，并赋初值'World'。setState()函数的等价函数是setName()，可用于更新状态值。

需要注意的是，useState()钩子可以多次使用来定义多个状态，并且可以在每次组件渲染时动态计算初始值。此外，钩子还可以使用useEffect(), useContext()和useReducer()等其他钩子来增强功能。

综上所述，类组件与useState()钩子都可以用于管理React组件中的状态，但使用方法不同，具有不同的特点和优势。开发者应该根据自己的需求和使用习惯选择合适的方法。