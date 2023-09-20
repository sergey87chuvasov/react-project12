import React from 'react';
import Footer from '../views/global/Footer';
import DataList from '../views/local/DataList';

export default class Plan extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <DataList viewType={'расход'} data={this.props.statData}></DataList>
        <Footer></Footer>
      </>
    );
  }
}
