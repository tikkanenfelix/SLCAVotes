import { setGlobalState, useGlobalState } from '../store'

const Hero = () => {
  const [user] = useGlobalState('user')
  const [connectedAccount] = useGlobalState('connectedAccount')

  return (
    <div className="text-center mt-10 p-4 min-h-[57vh]">
      <h1 className="text-5xl text-black-600 font-bold">
        {' '}
        From <span className='text-blue-600'>Traditional</span> to <span className='text-blue-600'>Trustworthy</span> <br></br><span className="text-3xl text-gray-600 font-bold">A Blockchain approach to securing the US voting system</span>
      </h1>
      <p className="pt-5 text-gray-600 text-xl font-medium">
        {' '}
        This is part of a creative thesis during the last year of aso high school at <br></br><strong>Sint-Lievens College Antwerpen</strong>{' '}
      </p>
      <div className="flex justify-center pt-10">
        {user?.fullname ? (
          <div className="space-x-2">
            <button
              type="button"
              className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs
              leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg
              focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800
              active:shadow-lg transition duration-150 ease-in-out border border-blue-600"
              onClick={() => setGlobalState('createPollModal', 'scale-100')}
            >
              Create Poll
            </button>
          </div>
        ) : (
          <div className='flex flex-col flex-wrap'>
            <div className='pt-10 h-max'>
              <h1 className='text-3xl font-bold underline text-gray-600'>How to get started?</h1>
              <ol className='list-decimal w-max mx-auto text-start p-5 ml-10'>
                <li><a className='text-blue-600 font-bold underline' href='https://metamask.io' target={'_blank'}>Create</a> and connect your Metamask wallet.</li>
                <li>Register with an image url and name.</li>
                <li>Get free Goerli ETH from <a className='text-blue-600 font-bold underline' href='https://goerlifaucet.com' target={'_blank'}>this faucet</a>.</li>
                <li>Create, participate and have fun in the voting section!</li>
              </ol>
            </div>
            <button
              type="button"
              className="inline-block w-28 mx-auto cursor-pointer px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium
              text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none
              focus:ring-0 transition duration-150 ease-in-out"
              onClick={() => setGlobalState('contestModal', 'scale-100')}
              disabled={!connectedAccount}
              title={!connectedAccount ? 'Please connect wallet first' : null}
            >
              Register
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Hero
