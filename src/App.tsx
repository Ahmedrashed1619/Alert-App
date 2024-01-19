
import { BellRing, Ban, Info, BadgeCheck, AlertTriangle } from 'lucide-react'
import Alert from './components/Alert/Alert'

function App() {

  return (
    <div className='container'>
      <Alert 
        type={'alert-default'}
        icon={<BellRing size={20} />}
        title={"Upgrade your plan"}
        description={'Then go to your Vite based project and run pnpm link --global vite (or the package manager that you used to link vite globally). Now restart the development server to ride on the bleeding edge!'}
      >
        <p>
          Vite aims to provide <a href="/">SSR Guide</a> support for common web development
          patterns. Before searching for a Vite or compatible Rollup plugin, check out the Features
          Guide. check out the <a href="/">Backend Integration guide</a> instead.
        </p>
      </Alert>
      <Alert 
        type={'alert-info'}
        icon={<Info size={20} />}
        title={'Note'}
        description={'if you are working with a normal static file server (except way more powerful!). Vite is also capable of handling dependencies that resolve to out-of-root file system locations, which makes it usable even in a monorepo-based setup.'}
      />
      <Alert 
        type={'alert-warning'}
        icon={<AlertTriangle size={20} />}
        title={'Tips & Tricks'}
        description={'You can also run the above script in your CI setup to enable automatic deployment on each push.'}
      />
      <Alert 
        type={'alert-error'}
        icon={<Ban size={20} />}
        title={'Something went wrong'}
        description={'if you are working with a normal static file server (except way more powerful!). Vite is also capable of handling dependencies that resolve to out-of-root file system locations, which makes it usable even in a monorepo-based setup.'}
      />
      <Alert 
        type={'alert-success'}
        icon={<BadgeCheck size={20} />}
        title={'Your order has been processed'}
        description={'Then go to your Vite based project and run pnpm link --global vite (or the package manager that you used to link vite globally). Now restart the development server to ride on the bleeding edge!'}
      />
    </div>
  )
}

export default App
