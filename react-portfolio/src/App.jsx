import { useState } from 'react'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Activities from './components/Activities'
import Contact from './components/Contact'

function App() {
  const [currentTab, setCurrentTab] = useState('About')

  /* Future Development Placeholder Component */
  const FutureDev = () => (
    <div className="modern-card p-12 text-center text-slate-400">
      <i className="fas fa-hammer text-4xl mb-4 text-slate-300"></i>
      <h3 className="text-xl font-heading font-medium text-slate-600 mb-2">Work in Progress</h3>
      <p>This section is currently under development. Check back soon!</p>
    </div>
  );

  const tabs = ['About', 'Skills', 'Projects', 'Activities', 'Contact', 'Future Dev']

  const renderTab = () => {
    switch (currentTab) {
      case 'About': return <About />
      case 'Skills': return <Skills />
      case 'Projects': return <Projects />
      case 'Activities': return <Activities />
      case 'Contact': return <Contact />
      case 'Future Dev': return <FutureDev />
      default: return <About />
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="font-heading font-bold text-xl text-primary tracking-tight">MY PORTFOLIO</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-2">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setCurrentTab(tab)}
                    className={`nav-link ${currentTab === tab ? 'nav-link-active' : ''}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
            {/* Mobile Menu Button - simplified as per plan to focus on top nav perception, 
                for full mobile support a dedicated menu component would be better but keeping it simple for now */}
            <div className="md:hidden overflow-x-auto">
              <div className="flex space-x-2 pb-1">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setCurrentTab(tab)}
                    className={`whitespace-nowrap px-3 py-1 text-sm font-medium rounded-full border ${currentTab === tab ? 'bg-primary text-white border-primary' : 'bg-white text-slate-600 border-slate-200'}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {renderTab()}
      </main>
    </div>
  )
}

export default App
