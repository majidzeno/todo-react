import React,{ Component } from 'react';
import Notes from './Notes';

class List extends Component{
    constructor(props){
        super(props)
        this.state = {
            notes : [
                
            ]
        }
        this.generateNewId = this.generateNewId.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.addNote = this.addNote.bind(this)    
        this.removeNote = this.removeNote.bind(this)    
        this.editNote = this.editNote.bind(this)    
    }
    generateNewId(){
        var id;
        return id = this.state.notes.id++;
    }
    componentWillMount() {
    //    this.setState({notes : { id : this.generateNewId(), task : ""}})
   
    }
    handleChange(event){
        var inputNote  = event.target.value ;
        return inputNote;
    }
    addNote(event){
        var KEY = 0
        
        if (this.inputFunc.value!=="") {
            var newNote = {
                key : Date.now(),
                task : this.inputFunc.value,
                state:'reading'
            }
            this.setState((previousState)=>{
                return {
                    notes : previousState.notes.concat(newNote)
                }
            })
        }
        this.inputFunc.value=""
        event.preventDefault()
    }
    removeNote(key){
        var filteredNotes = this.state.notes.filter(function(note){
            return (note.key!==key)
        })
        this.setState({
            notes:filteredNotes
        })
    }
    editNote(key){
        this.setState(
            (prevState)=>{
                return {
                   notes: prevState.notes.map(function(note){
                        if (note.key==key) {
                            console.log(note.task)
                            note.state = "editing"
                        }
                    })
                }
            }
        )
    }
    render(){
        return (
            <main className="list">
                 <form className = "form" onSubmit={this.addNote}>
                    <input type="text" onChange = {this.handleChange} ref = {(input)=>{this.inputFunc = input}} placeholder="Add a New Task"/>
                    <button type="submit">Add</button>
                </form>
                <Notes notes = {this.state.notes} removed = {this.removeNote} edit = {this.editNote}/>
            </main>        
        )
    }
}

export default List ; 
