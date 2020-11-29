import React, { PureComponent } from 'react'

// import store from '../store'
import {StoreContext} from './providers'



// type MapStateToPropsParam<TStateProps, TOwnProps, State = DefaultRootState> =
//     MapStateToPropsFactory<TStateProps, TOwnProps, State> | MapStateToProps<TStateProps, TOwnProps, State> | null | undefined;

function connect(mapStateToProps: any, mapDispatchToProps: any) {
  return function(Wrap: any) {
      class EnhanceComponent extends PureComponent<any> {
      unsubscribe: any
      constructor(props: any) {
        super(props)
        this.state = {
          storeState: props
        }
      }
      componentDidMount() {
        
        this.unsubscribe = this.context.subscribe(() => {
          this.setState({
            storeState: mapStateToProps(this.context.getState())
          })
        })
      }
      componentWillUnmount() {
        this.unsubscribe()
      }
      render() {
        console.log(this.context, 'context----');
        return (<Wrap {...this.props} {...mapStateToProps(this.context.getState())} {...mapDispatchToProps(this.context.dispatch)}></Wrap>)
      }
    }
    EnhanceComponent.contextType = StoreContext;
    return EnhanceComponent
  }

}

export  {connect}