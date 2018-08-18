import React, { Component } from "react";
import FlipMove from "react-flip-move";
class Notes extends Component {
  constructor(props) {
    super(props);
    this.allNotes = this.allNotes.bind(this);
  }
  removeThisNote(key) {
    this.props.removed(key);
  }
  editThisNote(key){
    this.props.edit(key)
  }
  allNotes(note) {
    return (
      <li className="note" key={note.key}>
        {note.task}
        <input className={note.state}/>
        <div className="buttons"><button onClick={() => this.removeThisNote(note.key)}>Remove</button>
        <button onClick={() => this.editThisNote(note.key)}>Edit</button></div>
      </li>
    );
  }

  render() {
    var notes = this.props.notes;
    var listedNotes = notes.map(this.allNotes);
    return <ul className="notes">
      <FlipMove duration={250} easing="ease-out">
        {listedNotes}
      </FlipMove>
    </ul>
  }
}
export default Notes;
