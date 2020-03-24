import React, { Component } from "react";
import { connect  } from "react-redux";
import { deleteArticle } from "../actions/index";

const mapStateToProps = state => {
    return { articles: state.articles };
};

function mapDispatchToProps(dispatch) {
  return {
    deleteArticle: article => dispatch(deleteArticle(article))
  };
}

// const ConnectedList = ({ articles }) => (
//     <ul>
//       {articles.map(el => (
//         <li key={el.id}>{el.title}</li>
//       ))}
//     </ul>
//   );

class ConnectedList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const [input] = e.target.children;
    //console.log(input.value);
    this.props.deleteArticle(input.value);
  }

  render() {
    return(
      <ul>
        {this.props.articles.map(el => (
            <li key={el.id}>
              <form onSubmit={this.handleSubmit}>
                <input type="submit" value={el.title}/>
              </form>
            </li>
        ))}
      </ul>
    );
  }
}
  
  const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
  
  export default List;