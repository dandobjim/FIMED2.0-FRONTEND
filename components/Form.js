import React from 'react'
import {css} from '@emotion/core'

class Form extends React.Component{
    state = {
        rows: [{name:"", type:""}]
    }

    // States
        addRow = (e) => {
            this.setState((prevState) => ({
                rows: [...prevState.rows, {name:"", type:""}]
            }));
        }

        handleSubmit = (e) => {e.preventDefault()}

        handleChange = (e) => {
            if (["name", "type"].includes(e.target.className)){
                let rows = [...this.state.rows]
                rows[e.target.dataset.id][e.target.className] = e.target.value
                this.setState({ rows }, () => console.log(this.state.rows))
            } else {
                this.setState({ [e.target.name]: e.target.value })
            }
        }

    render(){
        let {rows} = this.state

        return(
            <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                <button className="btn-sm btn-primary button-field" onClick={this.addRow}>Add row</button>{
                    rows.map((val,index) => {
                        let nameId = `name-${index}`, typeId = `type-${index}`
                        return(
                            <div className = "row">
                                <div key = {index} className="col-md-6 col-md">
                                    <label className="control-label" htmlFor={nameId}>{`Name #${index + 1}: `}</label>
                                    <input type="text" name={nameId} data-id={index} id={nameId} className="form-control"/>
                                    
                                    <div className = "form-group">
                                        <label className="control-label" htmlFor={typeId}>Type:</label>
                                        <select className="form-control" id={typeId} name="values">
                                                <option selected value="String">String</option>
                                                <option value="Integer">Number</option>
                                                <option value="Date">Date</option>
                                                <option value="Boolean">Checkbox</option>
                                                <option value="Textarea">textarea</option>
                                        </select>
                                        <hr/>
                                </div>
                                
                                </div>
                            </div>
                        )
                    })
                }
                <button className="btn-sm btn-primary button-field" onClick={this.addRow} css={css `margin-right:2rem;`}>Add row</button>
                <input type="submit" value="Submit"  className="btn-sm btn-primary button-field"/>
            </form>
        )
    }
}

export default Form;