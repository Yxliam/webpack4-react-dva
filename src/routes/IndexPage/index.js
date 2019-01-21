import React,{ Component } from 'react';
import { connect } from 'dva';
import styles from './index.module.scss';

class IndexPage extends Component{
    constructor(props) {
        super(props);
      }
      render(){
          return(
              <div className={ styles.title }>hello,react-dva-cli</div>
          );
      }
}

function mapState(state) {
    return { count: state.count };
  }
  
  export default connect(mapState)(IndexPage);