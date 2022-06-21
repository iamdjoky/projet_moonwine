import Image from 'next/image'

export default function CuveeExclusive() {
    return ( 
        <div class="ml-6 w-50">

<button class="absolute top-4 left-4 text-center text-green border-solid border-2 border-green border-opacity-10 text-18 px-3_5 py-3 rounded-round"><Image  src="/croix.svg" alt="site logo" width={16} height={16} /></button>

            <h3 class="mt-20 text-16">1/4</h3>

            <h1 class="mt-4 text-40">UNE CUVÉE EXCLUSIVE</h1>

            <p class="mt-2 text-16 w-70">Chaque box contient deux cuvées d’un même vigneron. L’une est exclusive, l’autre existante.  
            Un seul domaine est représenté par box, rien n’est écrit à l’avance sur le choix des vins.
            Parfois, rouge, blanc, orange, rosé, ou pet’nat, tout dépend d’un seul élément : notre rencontre avec l’Homme. </p>

            <div class="mt-8 inline-block">
                <Image  src="/CuveeExclusive.png" alt="Cuvée Exclusive" width={280} height={180} />
            </div>

            <div class="inline-block">
                <Image  src="/CuveeExclusive2.svg" alt="Cuvée Exclusive" width={300} height={180} />
            </div>

            <div class="after:content absolute bg-black left-0 bottom-0 h-1 w-full ">

            </div>
        
        <div>
            <div class="absolute left-6 mt-6 inline-block">
                <Image class="inline-block" src="/ArrowGauche.svg" alt="Cuvée Exclusive" width={50} height={50} />
                <p class="inline-block text-black2 opacity-60">PRÉCÉDENT</p>
            </div>

            <div class="absolute left-24 mt-6 inline-block">
                <p class="inline-block">SUIVANT</p>
                <Image class="inline-block" src="/ArrowDroite.svg" alt="Cuvée Exclusive" width={20} height={20} />
            </div>
            


        </div>
            
        
            
        </div>

     );
}