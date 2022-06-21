import Image from 'next/image';


export default function Section() {
    return ( 
     <div class="bg-yellow text-yellow min-h-screen width-screen">
         
         <h1 class="ml-40 mt-10 w-65 text-black2 text-72 text-center">POUR<Image class="px-1" src="/firstsection4.png" alt="bouteille de vin" width={140} height={75}/>
        CRÉÉR DES EXPERIENCES 
        <Image class="px-2" src="/secondsection4.png" alt="bouteille de vin" width={170} height={85}/> IL FAUT 
        <Image class="px-2" src="/thirdsection4.png" alt="bouteille de vin" width={180} height={85}/>DES HISTOIRES À RACONTER
        <Image class="px-2" src="/foursection4.png" alt="bouteille de vin" width={180} height={85}/></h1>

        <div class="ml-40">
            <button class="ml-30 mt-4 text-center bg-red text-white text-14 px-5 py-3 rounded-2_5">DÉCOUVRIR NOTRE HISTOIRE</button>
            
            <button class="ml-4 bg-white px-3 py-3 rounded-round text-red inline-block"><Image class="text-center" src="/Polygone1.svg" alt="valid" width={12} height={12}/></button>

            <h3 CLASS="text-8 text-red underline underline-offset-2 inline-block ml-2">VOIR LA VIDÉO</h3>
        </div>

           
    </div>
    );
}   
 