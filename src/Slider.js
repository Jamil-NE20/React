import React, {Component} from 'react'
import left from './left.jpg'
import right from './right.jpg'

class Slider extends Component {
    constructor(){
        super()
        this.state = {
            seletedImg: ''
        }
        this.promisfyState = obj => {
            return new Promise (res => {
                this.setState (obj, res)
            }).catch(e => {
                console.log(e)
            })
        }
    }

    componentWillReceiveProps () {
        fetch ('http://localhost:3000/episodePreview/' + this.props.focusedEp)
        .then (data => {
            return data.json()
        })
        .then (parseData => {
            this.promisfyState({ seletedImg: parseData.url}).then(() => {
                console.log('Loaded new State')
            })
        })
    }

    componentDidMount(){
        fetch ('http://localhost:3000/episodePreview/' + this.props.focusedEp)
        .then (data => {
            return data.json()
        })
        .then (parseData => {
            this.promisfyState({ seletedImg: parseData.url}).then(() => {
                console.log('Mount')
            })
        })
    }
    render(){
        return (
            <div>
                <div className = 'Warper'>
                    <img 
                        alt='nope' 
                        src={left}
                        className = 'slider-elem slider-button case-left'
                        onClick = {() =>
                        this.props.updateFunc(
                            Number(this.props.focusedEp) - 1 < 0
                            ? 0
                            : Number(this.props.focusedEp) - 1
                        )}   
                    />
                    <img
                        className = 'sliderImg slider-elem'
                        alt = 'focusedEp'
                        src = {this.state.seletedImg}
                    />  

                    <img 
                        alt='nope' 
                        src={right}
                        className = 'slider-elem slider-button case-right'
                        onClick = {() =>
                        this.props.updateFunc(
                            Number(this.props.focusedEp) + 1 > 2
                            ? 2
                            : Number(this.props.focusedEp) + 1
                        )}   
                    />  
                </div>
            </div>
            
        )
    }
}
export default Slider