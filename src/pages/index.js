"use client"; 
import "../app/styles/globals.css"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";


import Image from 'next/image'
import { useEffect, useState } from 'react';
import { TfiLineDotted } from "react-icons/tfi";
import { BsChevronDown } from "react-icons/bs";
import { TbBrandNextjs, TbBrandReact, TbBrandHtml5, TbBrandTailwind, TbBrandBootstrap, TbDatabase, TbBrandJavascript } from "react-icons/tb";
import { SiAntdesign } from "react-icons/si";
import { AiOutlineCamera, AiOutlineLaptop, AiOutlineHtml5 } from "react-icons/ai";
import ReactGA from "react-ga";
import { useRouter } from "next/router";


export default function App() {
  const [professionData, setProfessionData] = useState("");
  const [professionStyle, setProfessionStyle] = useState();

  const [initialized, setInitialized] = useState(false);
  const router = useRouter();
  const [width, setWidth] = useState();
  let i = 0;

  ReactGA.initialize('G-CJXWH6L4W9');
  
  useEffect(() => {
    setProfessionStyle("fadeIn 2s infinite")
    setProfessionData("Web developer")
    setInterval(() => {
      if(i>2){ i = 0}
      let professionalsArray = [ "Photographer", "Novice artist", "Web developer"];
      setProfessionData(professionalsArray[i])
      i++;
    }, 2000);
  }, [i])

  useEffect(() => {
    if (typeof window !== 'undefined'){
      const windowSize = window.screen.width;
      if(windowSize < 900){
        ReactGA.event({
          category: 'Mobile',
          action: 'On mobile check'
      });
      } else {
        ReactGA.event({
          category: 'Web',
          action: 'On web check'
      });
      }
      setWidth(windowSize)
    }
  }, [])

  const checkReactGA = () => {
    ReactGA.event({
      category: 'Profile',
      action: 'User checked my profle'
  });
  console.log("User checked my profle");
  }




  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      // REACTGA
      // Send pageview with a custom path
      ReactGA.send({ hitType: "pageview", page: "/" });
      console.log(`App is changing to ${url} ${shallow ? "with" : "without"} shallow routing`);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  const download = (url) => {
    const a = document.createElement('a')
    a.href = url
    a.download = url.split('/').pop()
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  const onButtonClick = () => {
    const pdfUrl = "/Ananya_CV_2024.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Ananya_Bandyopadhyay_CV.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};



  return (
    <main className="flex min-h-screen flex-col items-center justify-between">

      <div className="bg-cover w-[100vw] xl:grayscale xl:hover:grayscale-0 xl:bg-cover xl:w-full xl:h-[100vh]"
      style={{backgroundImage: "url('/portfolioImage1.jpeg')", backgroundRepeat: "no-repeat"}}
      >

        <p onClick={onButtonClick} className="animate-bounce cursor-pointer ml-auto w-fit mr-4 mt-4 font-semibold">Download Me!</p>

        <div className=" pl-[1rem] md:pl-[3rem] sm:pt-[4rem] lg:pl-20 xl:pt-[7rem] ">
        <div className="text-white mt-[3rem] text-3xl md:text-5xl md:mt-[6rem] lg:text-lgBanner lg:mt-[7rem] xl:text-large  ">
          <div className="font-Montserrat" onClick={()=>checkReactGA()}>ANANYA</div>
          <div className="font-Montserrat">BANDYOPADHYAY</div>
        </div>
        <div className="text-xl mb-[3rem] md:mb-[6rem] lg:text-3xl lg:mb-[8rem] xl:mb-52 font-ubuntu text-primary-yellow" style={{animation: professionStyle}}> {professionData} </div>
        </div>
      </div>

      <div className="w-[80%] md:w-[60%] py-[3rem] md:py-[6rem] lg:w-[50%] xl:w-[40%] mx-auto ">
          <div className='text-center' >
          MEET THE DEVELOPER
          </div>
          <div className='flex justify-center mb-[2rem]'>
          <TfiLineDotted className='text-[3rem] mx-[1rem]'/><BsChevronDown className='mt-[1rem]'/><TfiLineDotted className='text-[3rem] mx-[1rem]'/>
          </div>
          <div className='text-[14px] md:text-[1rem]'>
          Hi there, I'm Ananya. I'm a web developer who loves creating websites that work flawlessly. 
          But that's not all I do! I'm also an aspiring artist, always trying out new ways to express myself, 
          and a passionate photographer who captures the beauty of the world.
          Crafting Code, Brushing Art, and Capturing Moments: A Developer's Journey Through Pixels and Pixels.
          </div>
      </div>

      <div className="w-full py-[3rem] md:py-[6rem] mx-auto bg-secondary-blue text-white">
        <div className='text-center'>
        Academic and Professional Journey
          </div>
          <div className='flex justify-center mb-[1rem] lg:mb-[2rem]'>
          <TfiLineDotted className='text-[3rem] mx-[1rem]'/><BsChevronDown className='mt-[1rem]'/><TfiLineDotted className='text-[3rem] mx-[1rem]'/>
          </div>
        {width < 1024 ?
          <div className="w-[80%] mx-auto border-l-[1.5px] border-white">

             <svg className='h-[25px] w-[25px] ml-[-.7rem] scale-150'>
                <circle cx="12" cy="12" r="10" fill="#FFFF" />
              </svg> 
              <div className='ml-[1rem] py-[1.5rem]'>
                <p>Bachelor of Computer Application</p>
                <p className='mb-[1rem] text-[14px]'>2017 - 2020</p>
                <p className='font-semibold'>Techno India University</p>
                <p className='text-[14px]'>During my BCA program, I gained a understanding of computer fundamentals, 
                programming languages, database management, and software development methodologies. I actively 
                engaged in coursework that emphasized problem-solving and critical thinking, which honed my analytical 
                and programming skills. Additionally, I collaborated on various group projects, which enhanced 
                my teamwork and project management abilities.</p>
              </div>

              <svg className='h-[25px] w-[25px] ml-[-.7rem] scale-150'>
                <circle cx="12" cy="12" r="10" fill="#FFFF" />
              </svg> 
              <div className='ml-[1rem] py-[1.5rem]'>
                <p>Master of Computer Application</p>
                <p className='mb-[1rem] text-[14px]'>2021 - 2024</p>
                <p className='font-semibold'>Indira Gandhi National Open University (IGNOU)</p>
                <p className='text-[14px]'>Pursuing distance advanced degree allowed me to deepen my knowledge and expertise in the field of 
                computer science and information technology. During my MCA program, I focused on specialized 
                coursework in areas such as software development, database management, artificial intelligence, 
                and cybersecurity. My academic journey also included hands-on experience through challenging projects and research work.</p>
              </div>
              

              <svg className='h-[25px] w-[25px] ml-[-.7rem] scale-150'>
                <circle cx="12" cy="12" r="10" fill="#FFFF" />
              </svg> 
              <div className='ml-[1rem] py-[1.5rem]'>
                <p>Web Developer</p>
                <p className='mb-[1rem] text-[14px]'>2021 - Present</p>
                <p className='font-semibold'>CBNITS</p>
                <p className='text-[14px]'>Throughout my professional career, I have had the privilege of working of four 
                distinct web projects, each offering unique challenges and opportunities for growth. 
                These experiences have not only honed my technical skills but also enriched my team-work abilities. 
                I've expertise in front-end development, responsive design, and user experience optimization. 
                These projects have encompassed e-commerce and healthcare industries.</p>
              </div>
          </div>
          : 
          <div className="w-[80%] mx-auto flex flex-wrap justify-between item-center">

            <div className='w-[33%]'>
              <div className='pl-[2rem] mb-[1rem] lg:h-[3rem]  xl:h-auto'>Bachelor of Computer Application</div>
              <div className='pl-[2rem]'>2017 - 2020</div>
              <div className='flex'>
              <svg className='h-[40px] w-[40px]'>
                <circle cx="20" cy="20" r="17" fill="#FFFF" />
              </svg> 
              <hr className='bg-primary-blue w-full self-center h-[2px]'/>
              </div>
              <div className='pl-[2rem] mb-[1rem] lg:h-[3rem] xl:h-auto font-semibold'>Techno India University</div>
              <div className='pl-[2rem] lg:text-[0.9rem]  xl:text-[1rem]'>
                During my BCA program, I gained a understanding of computer fundamentals, 
                programming languages, database management, and software development methodologies. I actively 
                engaged in coursework that emphasized problem-solving and critical thinking, which honed my analytical 
                and programming skills. Additionally, I collaborated on various group projects, which enhanced 
                my teamwork and project management abilities.
              </div>
            </div>

            <div className='group w-[33%]'>
              <div className='pl-[2rem] mb-[1rem] lg:h-[3rem]  xl:h-auto'>Master of Computer Application</div>
              <div className='pl-[2rem]'>2021 - 2024</div>
              <div className='flex'>
              <svg className='h-[40px] w-[40px] z-20'>
                <circle cx="20" cy="20" r="17" fill="#FFFF" />
              </svg> 
              <hr className='bg-primary-blue w-full self-center h-[2px]'/>
              </div>
              <div className='pl-[2rem] mb-[1rem] lg:h-[3rem] xl:h-auto font-semibold'>Indira Gandhi National Open University (IGNOU)</div>
              <div className='pl-[2rem] lg:text-[0.9rem]  xl:text-[1rem]'>
                Pursuing distance advanced degree allowed me to deepen my knowledge and expertise in the field of 
                computer science and information technology. During my MCA program, I focused on specialized 
                coursework in areas such as software development, database management, artificial intelligence, 
                and cybersecurity. My academic journey also included hands-on experience through challenging projects and research work.
              </div>
            </div>
            <div className=' w-[33%]'>
              <div className='pl-[2rem] mb-[1rem] lg:h-[3rem] xl:h-auto'>Web Developer</div>
              <div className='pl-[2rem]'>2021 - Present</div>
              <div className='flex w-full scale-105'>
              <svg className='h-[40px] w-[40px] z-10'>
                <circle cx="20" cy="20" r="17" fill="#FFFF" />
              </svg> 
              <hr className='bg-primary-blue w-full self-center h-[2px] z-1'/>
              </div>
              <div className='pl-[2rem] mb-[1rem] lg:h-[3rem] xl:h-auto font-semibold'>CBNITS</div>
              <div className='pl-[2rem] lg:text-[0.9rem]  xl:text-[1rem]'>
                Throughout my professional career, I have had the privilege of working of four 
                distinct web projects, each offering unique challenges and opportunities for growth. 
                These experiences have not only honed my technical skills but also enriched my team-work abilities. 
                I've expertise in front-end development, responsive design, and user experience optimization. 
                These projects have encompassed e-commerce and healthcare industries
              </div>
            </div>
          </div>
        }
      </div>

      <div className="w-[80%] py-[3rem] md:py-[6rem] mx-auto bg-white text-primary-blue xl:grayscale xl:hover:grayscale-0">
          <div className='text-center'>
          Technical Proficiency
          </div>
          <div className='flex justify-center mb-[2rem]'>
          <TfiLineDotted className='text-[3rem] mx-[1rem]'/><BsChevronDown className='mt-[1rem]'/><TfiLineDotted className='text-[3rem] mx-[1rem]'/>
          </div>

          <div className='flex flex-wrap justify-between item-center'>

            <div className="group p-[1rem] md:p-[3rem] w-[50%] md:w-[25%] md:w-[25%] text-center text-primary-gray xl:hover:text-primary-blue">
              <div className='p-[2rem] rounded-full bg-white text-center w-[140px] h-[140px]  md:w-[130px] md:h-[130px] lg:w-[130px] lg:h-[130px] m-auto' 
              style={{  background: "radial-gradient(closest-side, white 80%, transparent 81% 100%), conic-gradient(#7ea1ac 90%, #a1bbc4 0)"}}>
              <TbBrandHtml5 className={`text-[2rem]  m-auto duration-300 xl:group-hover:-translate-y-1 xl:group-hover:scale-110 transition ease-in-out  `}/>
              <div>HTML</div><div>90%</div>
              </div>
              <div>
              </div>
            </div>


            <div className={`group p-[1rem] md:p-[3rem] w-[50%] md:w-[25%] text-center text-primary-gray xl:hover:text-primary-blue`}>
              <div className='p-[2rem]  rounded-full bg-white text-center w-[140px] h-[140px] md:w-[130px] md:h-[130px]  m-auto'
              style={{  background: "radial-gradient(closest-side, white 80%, transparent 81% 100%), conic-gradient(#7ea1ac 60%, #a1bbc4 0)"}}>
              <TbBrandTailwind className='text-[2rem] m-auto duration-300 xl:group-hover:-translate-y-1 xl:group-hover:scale-110 transition ease-in-out'/>
              <div>Tailwind</div><div>60%</div>
              </div>
            </div>
            
            <div className={`group p-[1rem] md:p-[3rem] w-[50%] md:w-[25%] text-center text-primary-gray xl:hover:text-primary-blue`}>
              <div className='p-[2rem]   rounded-full bg-white text-center w-[140px] h-[140px] md:w-[130px] md:h-[130px]  m-auto'
              style={{  background: "radial-gradient(closest-side, white 80%, transparent 81% 100%), conic-gradient(#7ea1ac 80%, #a1bbc4 0)"}}>
              <TbBrandBootstrap className='text-[2rem]  m-auto duration-300 xl:group-hover:-translate-y-1 xl:group-hover:scale-110 transition ease-in-out'/>
              <div>Bootstrap</div><div>80%</div>
              </div>
            </div>

            <div className={`group p-[1rem] md:p-[3rem] w-[50%] md:w-[25%] text-center text-primary-gray xl:hover:text-primary-blue`}>
              <div className='p-[2rem]   rounded-full bg-white text-center w-[140px] h-[140px] md:w-[130px] md:h-[130px]  m-auto'
              style={{  background: "radial-gradient(closest-side, white 80%, transparent 81% 100%), conic-gradient(#7ea1ac 80%, #a1bbc4 0)"}}>
              <SiAntdesign className='text-[2rem]  m-auto duration-300 xl:group-hover:-translate-y-1 xl:group-hover:scale-110 transition ease-in-out'/>
              <div>Ant D</div><div>80%</div>
              </div>
            </div>

            <div className={`group p-[1rem] md:p-[3rem] w-[50%] md:w-[25%] text-center text-primary-gray xl:hover:text-primary-blue`}>
              <div className='p-[2rem]   rounded-full bg-white text-center w-[140px] h-[140px] md:w-[130px] md:h-[130px]  m-auto'
              style={{  background: "radial-gradient(closest-side, white 80%, transparent 81% 100%), conic-gradient(#7ea1ac 75%, #a1bbc4 0)"}}>
              <TbBrandReact className='text-[2rem]  m-auto duration-300 xl:group-hover:-translate-y-1 xl:group-hover:scale-110 transition ease-in-out'/>
              <div>React</div><div>75%</div>
              </div>
            </div>

            <div className={`group p-[1rem] md:p-[3rem] w-[50%] md:w-[25%] text-center text-primary-gray xl:hover:text-primary-blue`}>
              <div className='p-[2rem]   rounded-full bg-white text-center w-[140px] h-[140px] md:w-[130px] md:h-[130px]  m-auto'
              style={{  background: "radial-gradient(closest-side, white 80%, transparent 81% 100%), conic-gradient(#7ea1ac 75%, #a1bbc4 0)"}}>
              <TbBrandReact className='text-[2rem]  m-auto duration-300 xl:group-hover:-translate-y-1 xl:group-hover:scale-110 transition ease-in-out'/>
              <div>Redux</div><div>60%</div>
              </div>
            </div>

            <div className={`group p-[1rem] md:p-[3rem] w-[50%] md:w-[25%] text-center text-primary-gray xl:hover:text-primary-blue`}>
              <div className='p-[2rem]   rounded-full bg-white text-center w-[140px] h-[140px] md:w-[130px] md:h-[130px]  m-auto'
              style={{  background: "radial-gradient(closest-side, white 80%, transparent 81% 100%), conic-gradient(#7ea1ac 70%, #a1bbc4 0)"}}>
              <TbBrandNextjs className='text-[2rem]  m-auto duration-300 xl:group-hover:-translate-y-1 xl:group-hover:scale-110 transition ease-in-out'/>
              <div>Next.js</div><div>70%</div>
              </div>
            </div>

            <div className={`group p-[1rem] md:p-[3rem] w-[50%] md:w-[25%] text-center text-primary-gray xl:hover:text-primary-blue`}>
              <div className='p-[2rem]   rounded-full bg-white text-center w-[140px] h-[140px] md:w-[130px] md:h-[130px]  m-auto'
              style={{  background: "radial-gradient(closest-side, white 80%, transparent 81% 100%), conic-gradient(#7ea1ac 80%, #a1bbc4 0)"}}>
              <TbBrandJavascript className='text-[2rem]  m-auto duration-300 xl:group-hover:-translate-y-1 xl:group-hover:scale-110 transition ease-in-out'/>
              <div>Javascript</div><div>80%</div>
              </div>
            </div>

            <div className={`group p-[1rem] md:p-[3rem] w-[50%] md:w-[25%] text-center text-primary-gray xl:hover:text-primary-blue`}>
              <div className='p-[2rem]   rounded-full bg-white text-center w-[140px] h-[140px] md:w-[130px] md:h-[130px]  m-auto'
              style={{  background: "radial-gradient(closest-side, white 80%, transparent 81% 100%), conic-gradient(#7ea1ac 80%, #a1bbc4 0)"}}>
              <TbBrandJavascript className='text-[2rem]  m-auto duration-300 xl:group-hover:-translate-y-1 xl:group-hover:scale-110 transition ease-in-out'/>
              <div>Typescript</div><div>80%</div>
              </div>
            </div>


            <div className={`group p-[1rem] md:p-[3rem] w-[50%] md:w-[25%] text-center text-primary-gray xl:hover:text-primary-blue`}>
              <div className='p-[2rem]   rounded-full bg-white text-center w-[140px] h-[140px] md:w-[130px] md:h-[130px]  m-auto'
              style={{  background: "radial-gradient(closest-side, white 80%, transparent 81% 100%), conic-gradient(#7ea1ac 50%, #a1bbc4 0)"}}>
              <TbDatabase className='text-[2rem]  m-auto duration-300 xl:group-hover:-translate-y-1 xl:group-hover:scale-110 transition ease-in-out'/>
              <div>GraphQL</div><div>50%</div>
              </div>
            </div>

            <div className={`group p-[1rem] md:p-[3rem] w-[50%] md:w-[25%] text-center text-primary-gray xl:hover:text-primary-blue`}>
              <div className='p-[2rem]   rounded-full bg-white text-center w-[140px] h-[140px] md:w-[130px] md:h-[130px]  m-auto'
              style={{  background: "radial-gradient(closest-side, white 80%, transparent 81% 100%), conic-gradient(#7ea1ac 50%, #a1bbc4 0)"}}>
              <TbDatabase className='text-[2rem]  m-auto duration-300 xl:group-hover:-translate-y-1 xl:group-hover:scale-110 transition ease-in-out'/>
              <div>Rest API</div><div>50%</div>
              </div>
            </div>


            <div className={`group p-[1rem] md:p-[3rem] w-[50%] md:w-[25%] text-center text-primary-gray xl:hover:text-primary-blue`}>
              <div className='p-[2rem]   rounded-full bg-white text-center w-[140px] h-[140px] md:w-[130px] md:h-[130px]  m-auto'
              style={{  background: "radial-gradient(closest-side, white 80%, transparent 81% 100%), conic-gradient(#7ea1ac 50%, #a1bbc4 0)"}}>
              <TbDatabase className='text-[2rem]  m-auto duration-300 xl:group-hover:-translate-y-1 xl:group-hover:scale-110 transition ease-in-out'/>
              <div>SQL</div><div>50%</div>
              </div>
            </div>
            
          </div>
          
      </div>

      <div  className="w-full py-[3rem] md:py-[6rem]  mx-auto bg-secondary-blue text-white">
          <div className='text-center'>
          Find me on:
          </div>
          <div className='flex justify-center mb-[1rem] lg:mb-[2rem]'>
          <TfiLineDotted className='text-[3rem] mx-[1rem]'/><BsChevronDown className='mt-[1rem]'/><TfiLineDotted className='text-[3rem] mx-[1rem]'/>
          </div>

          <div className='block flex-col mx-auto max-w-fit '>
            <div className="my-2 flex">
            <FaGithub className="mr-2 item-center my-auto"/>
            <p>https://github.com/ananyabandyopadhyay</p>
            </div>

            <div className="my-2 flex">
            <FaLinkedin className="mr-2 item-center my-auto"/>
            <p>https://www.linkedin.com/in/ananyabandyopadhyay/</p>
            </div>

            <div className="my-2 flex">
            <IoIosCall className="mr-2 item-center my-auto"/>
            <p>7278964229</p>
            </div>

            <div className="my-2 flex">
            <IoIosMail className="mr-2 item-center my-auto"/>
            <p>ani99banerjee@gmail.com</p>
            </div>
          
          </div>
          
      </div>


    </main>
  )
}
