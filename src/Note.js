import React,{ Component } from "react";

class Note extends Component {
    constructor(props){
        super(props)
        this.state= {
            notes :{
                    id : 0 ,
                    task : ''}
            }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)        
        this.generateNewId = this.generateNewId.bind(this)        
    }
    generateNewId(){
        var id;
        return id = this.state.notes.id++;
    }
    componentWillMount() {
       this.setState({notes : { id : this.generateNewId(), task : ""}})
    }
    handleSubmit(event){

    }
    handleChange(event){
        this.setState({notes : event.target.value})
    }
    render(){
        return (
            <form className = "note" onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.notes} onChange = {this.handleChange} />
            </form>
        )
    }
}
export default Note ;