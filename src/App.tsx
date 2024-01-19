
import { BellRing } from 'lucide-react'
import Alert from './components/Alert/Alert'

function App() {

  return (
    <div className='container'>
      <Alert 
        type={'alert-default'}
        icon={<BellRing size={20} />}
        title={'Something went wrong'}
        description={'if you are working with a normal static file server (except way more powerful!). Vite is also capable of handling dependencies that resolve to out-of-root file system locations, which makes it usable even in a monorepo-based setup.'}
      />
      <Alert 
        type={'alert-info'}
        icon={<BellRing size={20} />}
        title={'Something went wrong'}
        description={'if you are working with a normal static file server (except way more powerful!). Vite is also capable of handling dependencies that resolve to out-of-root file system locations, which makes it usable even in a monorepo-based setup.'}
      />
      <Alert 
        type={'alert-warning'}
        icon={<BellRing size={20} />}
        title={'Something went wrong'}
        description={'if you are working with a normal static file server (except way more powerful!). Vite is also capable of handling dependencies that resolve to out-of-root file system locations, which makes it usable even in a monorepo-based setup.'}
      />
      <Alert 
        type={'alert-error'}
        icon={<BellRing size={20} />}
        title={'Something went wrong'}
        description={'if you are working with a normal static file server (except way more powerful!). Vite is also capable of handling dependencies that resolve to out-of-root file system locations, which makes it usable even in a monorepo-based setup.'}
      />
      <Alert 
        type={'alert-success'}
        icon={<BellRing size={20} />}
        title={'Something went wrong'}
        description={'if you are working with a normal static file server (except way more powerful!). Vite is also capable of handling dependencies that resolve to out-of-root file system locations, which makes it usable even in a monorepo-based setup.'}
      />
    </div>
  )
}

export default App
