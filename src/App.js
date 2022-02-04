import './App.css';
import Frame from './Frame.png'
import Group from './Group.svg'


function App() {
    return (
    <div className="sm:bg-gradient-to-bl sm:from-[#161723] sm:via-[#131417] sm:to-[#131313] bg-gradient-to-bl from-[#1c2045] via-[#191c35] to-[#151620] h-full w-full">
     
      <div className="container m-auto w-full lg:w-9/12 h-full">
       
        <nav className='text-white font-bold p-12 flex justify-between items-center'>
          <h2 className='text-2xl'>UNX</h2>
          <ul className='sm:flex hidden justify-evenly items-center w-full md:w-7/12 '>
            <a href='#' >Products</a>
            <a href='#' >About</a>
            <a href='#' >Resources</a>
            <a href='#' >Contact</a>
          </ul>
          <img className='sm:hidden' src={Group}></img>
          <button className='sm:flex hidden px-7 py-2 rounded-md bg-white text-white bg-opacity-[0.09] hover:bg-opacity-[0.15]'>Dashboard</button>
        </nav>
        
        <div className='text-center mt-10 mb-10'>
          <h1 className='text-white sm:text-6xl text-4xl  font-bold'>The Best Way to</h1>
          <h1 className='text-blue-300 sm:text-6xl text-4xl font-bold'>Track your Daily Progress</h1>
          <div className='m-auto w-full md:w-8/12'>
            <p className='m-20 text-md text-center text-white text-opacity-70 '>UNX Allows you to track all your daily task progress using gamification methods and earn rewards for specific coupons</p>
          </div>
          <button className='font-bold px-10 py-3 rounded-md bg-blue-800  text-white hover:bg-opacity-25' >Try this app</button>
        </div>
       
        <div className='p-5'>
          <img className='w-fit' src={Frame}></img>
        </div>

      </div>
     

    </div>
    )
 
}

export default App;
