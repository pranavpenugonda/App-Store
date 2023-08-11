// Write your code here

import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {imageUrl, appName} = appDetails

  return (
    <li className="app-list-item">
      <div className="app-card">
        <img src={imageUrl} className="app-img" alt={appName} />
        <p className="app-name">{appName}</p>
      </div>
    </li>
  )
}

export default AppItem
