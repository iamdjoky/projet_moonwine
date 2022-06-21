import Image from 'next/image'
import Link from 'next/link';

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
                <Image class="rounded-2 object-cover" src="/CuveeExclusive.png" alt="Cuvée Exclusive" width={300} height={200} />
            </div>

            <div class="inline-block ml-2">
                <Image class="rounded-2 object-cover" src="/CuveeExclusive2.png" alt="Cuvée Exclusive" width={300} height={200} />
            </div>

            <div>
                <hr class="mt-4 bg-black opacity-20 h-10 w-85"></hr>
            </div> 
        
        <div>
            <div class="absolute left-4 mt-6 inline-block">
                <Image class="inline-block" src="/ArrowGauche.svg" alt="Cuvée Exclusive" width={30} height={30} />
                <Link href="/home"><a class="inline-block text-black2">PRÉCÉDENT</a></Link>
            </div>

            <div class="absolute left-40 mt-6 inline-block">
            <Link href="/cuvee_exclusive_2"><a class="inline-block">SUIVANT</a></Link>
                <Image class="inline-block" src="/ArrowDroite.svg" alt="Cuvée Exclusive" width={30} height={30} />
            </div>
            


        </div>
            
        
            
        </div>

     );
}