import React from 'react'

class ExamplePage extends React.Component {
  render() {
    return (
      <div className="ExamplePage">
        <div >
          <h1>Yes</h1>
          <svg
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon points="10,10 10,90 40,90 40,60 60,60 60,90 90,90 90,10" />
            <line x1="90" y1="90" x2="90" y2="10" className="NorthSouth" />
            <line x1="90" y1="90" x2="60" y2="90" className="EastWest" />
            <circle r="2" cx="90" cy="90" />
          </svg>
        </div>

        <div>
          <h1>No</h1>
          <svg
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/4800/svg"
          >
            <polygon points="10,10 10,90 40,90 40,60 60,60 60,90 90,90 90,10" />
            <line x1="90" y1="90" x2="90" y2="10" className="NorthSouth" />
            <line x1="90" y1="90" x2="10" y2="90" className="EastWest" />
            <circle r="2" cx="90" cy="90" />
          </svg>
        </div>

        <div>
          <h1>No</h1>
          <svg
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon points="10,10 10,90 48,90 48,52 52,52 52,90 90,90 90,10" />
            <line x1="90" y1="90" x2="90" y2="10" className="NorthSouth" />
            <line x1="90" y1="90" x2="52" y2="90" className="EastWest" />
            <circle r="2" cx="90" cy="90" />
          </svg>
        </div>

        <div>
          <h1>Yes</h1>
          <svg
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon points="10,10 10,90 48,90 48,52 52,52 52,90 90,90 90,10" />
            <line x1="90" y1="90" x2="90" y2="10" className="NorthSouth" />
            <line x1="90" y1="90" x2="10" y2="90" className="EastWest" />
            <circle r="2" cx="90" cy="90" />
          </svg>
        </div>

        <div>
          <h1>Yes</h1>
          <svg
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon points="10,10 10,90 40,90 40,80 60,80 60,90 90,90 90,10 60,10 60,20 40,20 40,10"
            />
            <line x1="60" y1="10" x2="60" y2="20" className="NorthSouth" />
            <line x1="60" y1="10" x2="90" y2="10" className="EastWest" />
            <circle r="2" cx="60" cy="10" />
          </svg>
        </div>

        <div>
          <h1>No</h1>
          <svg
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon points="10,10 10,90 40,90 40,80 60,80 60,90 90,90 90,10 60,10 60,20 40,20 40,10"
            />
            <line x1="60" y1="10" x2="60" y2="90" className="NorthSouth" />
            <line x1="60" y1="10" x2="90" y2="10" className="EastWest" />
            <circle r="2" cx="60" cy="10" />
          </svg>
        </div>

        <div>
          <h1>No</h1>
          <svg
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon points="10,10 10,90 48,90 48,80 52,80 52,90 90,90 90,10 52,10 52,20 48,20 48,10"
            />
            <line x1="52" y1="10" x2="48" y2="20" className="NorthSouth" />
            <line x1="52" y1="10" x2="90" y2="10" className="EastWest" />
            <circle r="2" cx="52" cy="10" />
          </svg>
        </div>
      </div>
    )
  }
}

export default ExamplePage
