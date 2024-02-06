
import './App.css';


function App() {
  return (
    <div >
      <div className='flex justify-around place-items-center '>
        <div className='flex  place-items-center w-[40%]  justify-between'>
          <div  >
            <img src='https://cdn-icons-png.flaticon.com/128/5968/5968762.png' height="60px" width="60px" />

          </div>
          <div className='flex items-center ' >
            <div className='border-r-[1px] border-solid border-l-0 border-t-0 border-b-0  p-1 px-3'>
              <img src='https://cdn-icons-png.flaticon.com/128/3474/3474360.png' height="30px" width="30px" />
            </div>
            <div className='px-3'>
              <img src='https://cdn-icons-png.flaticon.com/128/823/823929.png' height="30px" width="30px" />
            </div>

          </div>
        </div>
        <div className='flex  items-center justify-around w-[50%]'>

          <p className='mt-2'>Click edit and create your own amazing website</p>


          <a href=''>Read</a>


          <button type='button' className='btn btn-primary rounded-3xl ' >Edit This Site</button>

        </div>
      </div>
      <div className='flex justify-center'>
        <div className='flex flex-col items center w-[90%] '>
          <div className='flex justify-around mt-5'>
            <div className='flex justify-between place-items-center'>
              <div>
                <img src='https://cdn-icons-gif.flaticon.com/8121/8121267.gif' height='30px' width='30px' />
                <img src='https://cdn-icons-gif.flaticon.com/7211/7211849.gif' height='30px' width='30px' />

                <img src='https://cdn-icons-gif.flaticon.com/6844/6844383.gif' height='30px' width='30px' />
              </div>
              <div>
                <h4>ChoosEquality</h4>
                <h5>Education for All</h5>
              </div>
            </div>
            <div className='flex gap-x-10 place-items-center'>
              <a href=''>Home</a>
              <a href=''>About</a>
              <a href=''>Project</a>
              <a href=''>Team</a>
              <a href=''>News</a>
              <a href=''>Contact</a>
            </div>
          </div>
          <div className='flex gap-x-8 mt-[100px] '>
            <div className=" relative bg-[url('https://i.pinimg.com/474x/cd/e4/36/cde436ad279c49212eb900e7266c9bc0.jpg')] h-[400px] w-[80%]" style={{ backgroundSize: "100% 100%" }}>
              <div className=' absolute bg-[#ffffff] w-[240px] top-20  pt-[50px] border-x-amber-500 border-solid shadow-current'>
                <h2 className='text-yellow-800 '>Our Initiatives</h2>
                <p className='text-yellow-800 w-[180px] pt-[30px]' >
                  I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
                <a href=''>Read More</a>
              </div>

            </div>
            <div className=" relative bg-[url('https://i.pinimg.com/474x/7b/20/0c/7b200c51edd5fb28230611e5fc48754f.jpg')] h-[400px] w-full bg-no-repeat" style={{ backgroundSize: "100% 100%" }}>
              <div className='absolute bg-[#ffffff] w-[230px] bottom-40 p-[20px] pt-[40px] bottom-40 left-60 border-violet-700 border-solid'>
                <h2 className='text-yellow-800'>Our Mission</h2>
                <p className='w-44 text-yellow-800  ' >I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
                <a href=''>Read More</a>
              </div>

            </div>
          </div>
          <div className='flex gap-x-8 mt-[100px]'>
            <div className=" relative bg-[url('https://i.pinimg.com/474x/6e/c6/67/6ec667be48d77e8f9dc1118a32786039.jpg')] h-[400px] w-full mt-[50px] bg-no-repeat " style={{ backgroundSize: "100% 100%" }}>
              <div className='absolute bg-[#ffffff] w-[240px] top-20  pt-[60px] left-40 p-[20px] border-x-zinc-500 border-double border-y-4'>
                <h2 className='text-yellow-800'>Resent News</h2>
                <p className='w-44 text-yellow-800'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
                <a href=''>read More</a>
              </div>
            </div>
            <div className="relative bg-[url('https://i.pinimg.com/474x/e3/f5/b5/e3f5b5fa486be8221c758a277d4672c0.jpg')] h-[400px] w-[80%] bg-no-repeat mt-[50px]" style={{ backgroundSize: "100% 100%" }}>
              <div className='absolute bg-[#ffffff] w-[230px] flex-justify-center pt-[50px] bottom-40 left-40 p-[20px]  border-x-pink-700 border-solid '>
                <h2 className='text-yellow-800'>Take Part</h2>
                <p className='w-44 text-yellow-800'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
                <a href=''>Read More</a>
              </div>

            </div>

          </div>

          <h1 className='text-center mt-[100px] text-teal-900 font-mono'>2035 in Numbers</h1>
          <div className='flex justify-around '>
            <div className='flex'>
              <h1 className='text-9xl  text-blue'>40</h1>
              <div className='flex-col'>
                <h1 className='text-9xl font-extrabold border-b-4  border-solid '>K</h1>
                <h2 className='w-[40px] '>Dollors Raised</h2>
              </div>
            </div>
            <div className='flex'>
              <h1 className='text-9xl font-extrabold'>40</h1>
              <div className='flex-col'>
                <h1 className='text-9xl font-extrabold border-b-4  border-solid '>K</h1>
                <h2 className='w-[40px]'>Dollors Raised</h2>
              </div>
            </div>
            <div className='flex'>
              <h1 className='text-9xl font-extrabold'>40</h1>
              <div className='flex-col'>
                <h1 className='text-9xl font-extrabold border-b-4  border-solid '>K</h1>
                <h2 className='w-[40px]'>Dollors Raised</h2>
              </div>
            </div>

          </div>

        </div>


      </div>
    </div>

  );

}

export default App;
