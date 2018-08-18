import React,{ Component } from "react";

class Note extends Component {
    constructor(props){
        super(props)
        this.state= {
            notes :{
                    id : 0 ,
                    task : ''}
            }
    }


    render(){
        return (
           <div></div>
        )
    }
}
export default Note ;



class Notes extends Component{
    allNotes(note){
       return  <li className="note" key={note.key}>{note.task}</li>
    }

    render(){
        var notes = this.props.notes
        var listedNotes =  notes.map(this.allNotes)
        return(
            <ul className="notes">
            {listedNotes}
            </ul>
        )
    }
}