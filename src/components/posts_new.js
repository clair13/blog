import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class PostsNew extends Component {
  render() {
    return (
      <form>
        <h3>Create A New Post</h3>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" />
        </div>

        <div className="form-group">
          <label>Categories</label>
          <input type="text" className="form-control" />
        </div>

        <div className="form-group">
          <label>Content</label>
          <textarea className="form-control" />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

function validate(values) {
  const errors ={};

  if (values.title.length < 3) {
    errors.title = "Title must be at least 3 characters";
  }

  if (!values.title){
    errors.title = "Enter a title";
  }

  if (!values.categories) {
    errors.categories = "Enter some categories!";
  }

  if (!values.content) {
    errors.content = "Enter some content please";
  }

  return errors;

}

export default reduxForm({
  validate,
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content']
})(PostsNew);