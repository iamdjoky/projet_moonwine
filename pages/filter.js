
import Image from 'next/image'

export default function Research() {
    return ( 
        <div class="ml-8 w-45"> 
            
            <button class="absolute top-4 left-4 text-center text-green border-solid border-2 border-green border-opacity-10 text-18 px-3_5 py-3 rounded-round"><Image  src="/croix.svg" alt="site logo" width={16} height={16} /></button>

            <h1 class="mt-20 text-center text-32 text-green">PAR TYPE DE VIN</h1>
                
        <div class="text-center">
            <h4 class="text-18 ml-2 mt-6 text-green border-solid border-2 border-green px-3 py-1 rounded-2_5 inline-block">Rouge</h4>
            <h4 class="text-18 ml-2 text-green border-solid border-2 border-green px-3 py-1 rounded-2_5 inline-block">Blanc</h4>
            <h4 class="text-18 ml-2 text-green border-solid border-2 border-green px-3 py-1 rounded-2_5 inline-block">Rosé</h4>
            <h4 class="text-18 ml-2 text-green border-solid border-2 border-green px-3 py-1 rounded-2_5 inline-block">Orange</h4>
            <h4 class="text-18 ml-2 text-green border-solid border-2 border-green px-3 py-1 rounded-2_5 inline-block">Pet'Nat</h4>


        </div>
            

        </div>


     );
}