import React, { memo, PureComponent, createContext } from 'react';
// import {withRouter} from 'react-router-dom'


interface IHoc {
  names: string;
  age: number;
  love: number;
  test?: string;
}
interface Ia {
  sex: string;
  page: number;
}

const UserContext = createContext({
  names: '默认',
  age: 25,
  love: -1,
});

const EnHance: React.FC<IHoc & Ia> = memo(function (props) {
  return (
    <>
      <div>HOC高阶组件</div>
      <div>{props.names}</div>
      <div>{props.age}</div>
      <div>{props.test}</div>
      {props.children}
      {props.sex} <hr/>
      {props.page}-页
    </>
  )
})
// 高阶
const noComponents = function<T> (Wrang: React.ComponentType<T>) {
  return class extends PureComponent<Omit<T, keyof IHoc>> {

    render() {

      return (
        <UserContext.Consumer>
          {user => {
            return <Wrang {...this.props as T} {...user} test='test'></Wrang>
          }}
        </UserContext.Consumer>
      )
    }
  }

}


const NoCom = noComponents(EnHance)

// 高阶函数结合 context 进行数据传递
class TestUser extends PureComponent {
  render() {
    return (
      <div>
        <UserContext.Provider value={{ names: '高阶的-----', age: 22, love: 99 }}>
          <NoCom sex={'男'} page={12} />
        </UserContext.Provider>
      </div>
    )
  }
}





// ====================== 分割线

// 1
const withLoading = <P extends object>(Component: React.ComponentType<P>) => (
  class WithLoading extends React.Component<P & IHoc> {
    render() {
      const { ...props } = this.props;
      console.log(props.children);

      return <Component {...props} />;
    }
  })

// 2

// export default noComponents(EnHance)


// 3
function withHeaderAndFooter<T>(Component: React.ComponentType<T>) {
  return (props: T) => {
    console.log(props, 'props');

    return <Component {...props}></Component>
  }
}


// export default withHeaderAndFooter<IHoc>(EnHance)