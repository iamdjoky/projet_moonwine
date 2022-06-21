import Image from 'next/image'

export default function Research() {
    return ( 
        <div class="ml-8"> 
            
            <button class="absolute top-6 right-4 text-center text-green border-solid border-2 border-green border-opacity-10 text-18 px-3_5 py-3 rounded-round"><Image  src="/croix.svg" alt="site logo" width={16} height={16} /></button>

            

            <h1 class="mt-14 text-86 text-green opacity-20">Recherche</h1>

            <div>
                <hr class="bg-black opacity-20 h-10 w-95"></hr>
            </div> 

            <h4 class="text-14 mt-10 text-green">FRÉQUEMMENT RECHERCHÉS</h4>

            <h4 class="text-16 mt-4 text-green opacity-60">Vin blanc</h4>
            <h4 class="text-16 mt-2 text-green opacity-60">Vin rouge</h4>
            <h4 class="text-16 mt-2 text-green opacity-60">Pétillant</h4>
            <h4 class="text-16 mt-2 text-green opacity-60">Rosé</h4>

        </div>


     );
}