import React from 'react';
import ReactDOM from 'react-dom';
import CommentDatil from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDatil
          author="Kender"
          date="9:00 PM"
          comment="Hi there people"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDatil
          author="Keelan"
          date="5:00 AM"
          comment="OHH noooo!!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDatil
          author="Kenay"
          date="3:00 PM"
          comment="Where is my food"
        />
      </ApprovalCard>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));