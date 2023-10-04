"use client"; 

import Image from 'next/image'
import { useEffect, useState } from 'react';

export default function Home() {
  const [professionData, setProfessionData] = useState("");
  const [professionStyle, setProfessionStyle] = useState();
  let i = 0;

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

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div class="bg-cover pl-20 grayscale hover:grayscale-0"
      style={{backgroundImage: "url('/portfolioImage1.jpeg')", height: "100vh", width: "100%", backgroundRepeat: "no-repeat"}}
      >

        <div class="text-white text-large mt-52">
          <div className="font-Montserrat">ANANYA</div>
          <div className="font-Montserrat">BANDYOPADHYAY</div>
        </div>
        <div className="text-3xl font-ubuntu text-primary-yellow" style={{animation: professionStyle}}> {professionData} </div>
      </div>
    </main>
  )
}
