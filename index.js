const element = (
    // Write your code here.
    <div className="congrats-card-bg">
        <h1 className="greeting">Congratulations</h1>
        <div className="greeting-card">
            <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png" className="image" />
            <h1 className="name">Naidu K</h1>
            <p className="college">Aditya Engineering College, Surampalem</p>
            <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png" className="image"/>
        </div>
        
    </div>
  )
  
ReactDOM.render(element, document.getElementById('root'))