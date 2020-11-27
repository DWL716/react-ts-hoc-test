import React, {  } from 'react';
import {connect} from 'react-redux'
import { Dispatch } from 'redux';
import { addPage } from '../redux/action';



type ReduxType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>
// 或 type ReduxType1 =  IStoreState & IDispatcherProps;

class ConRedux extends React.Component<ReduxType> {
  constructor(props: ReduxType) {
    super(props)
  }
  render() { 
    return ( 
      <div>
        <h1>第-{this.props.page}-页</h1>
        <button onClick={e => this.props.addNumber(2)}>页码</button>
      </div>
     );
  }
}


// redux 结合 connect 
interface IStoreState {
  page: number
}
interface IDispatcherProps {
  addNumber: (page: number) => any
}

const mapStateToProps = (store: IStoreState): IStoreState => ({
  page: store.page
});

const mapDispatchToProps = (dispatch: Dispatch): IDispatcherProps => ({
  addNumber(page: number) {
    dispatch(addPage(page))
  }
})
 
export default connect(mapStateToProps, mapDispatchToProps)(ConRedux);