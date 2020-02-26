import React from 'react'

class Result extends React.Component{
  render(){


      let {answer} = this.props


      return(

          <div className="answer">
              <p>{answer}</p>
          </div>
          
      )
  }

}

export default Result