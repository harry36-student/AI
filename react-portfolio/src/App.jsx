import { useState } from 'react'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Activities from './components/Activities'
import Contact from './components/Contact'

function App() {
  const [currentTab, setCurrentTab] = useState('About')

  const tabs = ['About', 'Skills', 'Projects', 'Activities', 'Contact']

  const renderTab = () => {
    switch (currentTab) {
      case 'About': return <About />
      case 'Skills': return <Skills />
      case 'Projects': return <Projects />
      case 'Activities': return <Activities />
      case 'Contact': return <Contact />
      default: return <About />
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Welcome to My Personal Page</h1>

      <div className="flex items-center justify-start mb-4">
        <i className="fas fa-bars text-2xl text-gray-700 mr-3" aria-hidden="true"></i>
        <label htmlFor="tabSelect" className="sr-only">Select tab</label>
        <select
          id="tabSelect"
          value={currentTab}
          onChange={(e) => setCurrentTab(e.target.value)}
          className="border rounded px-3 py-2 bg-white text-gray-800 w-64"
        >
          {tabs.map((tab) => (
            <option key={tab} value={tab}>{tab}</option>
          ))}
        </select>
      </div>

      {renderTab()}
    </div>
  )
}

export default App
