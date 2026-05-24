export default function footer(){
    return(
        <>
        <div className="h-28 m-auto w-full max-w-200 mb-20 flex flex-col items-center justify-between mt-12.5" style={{ background: '#080810' }} >
            <ul className=" flex text-[#d9c3f9] text-center">
                <li className="mx-5"><a href="#home " className='hover:text-[#ffffff]'>HOME</a></li>
                <li className="mx-5"><a href="#about" className='hover:text-[#ffffff]'>ABOUT</a></li>
                <li className="mx-5"><a href="#project" className='hover:text-[#ffffff]'>PROJECT</a></li>
            </ul>
            <hr className="w-full "/>
            
            <div className=" flex">
               <a href="https://github.com/Alador-Mikiele-cd" target="_blank"><img src="git.png" alt=""  className="w-12.5 h-12.5 bg-amber-50 rounded-2xl mx-3.75"/></a> 
              <a href="https://instagram.com/_https_its_alador_" 
            target="_blank"><img src="insta.png" alt="" className="w-12.5 h-12.5 mx-3.75"/></a>  
                <a href="https://x.com/AladorMiki10581" 
            target="_blank" ><img src="x.png" alt="" className="w-12.5 h-12.5 bg-amber-50 rounded-2xl mx-3.75"/></a>
               <a href="https://Linkedin.com/AladorMikiele" 
            target="_blank"><img src="link.png" alt="" className="w-12.5 h-12.5 mx-3.75"/></a> 

            </div>

        </div>
        </>
    )
}