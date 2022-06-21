import Image from 'next/image'
import Link from 'next/link';

export default function CuveeExclusive3() {
    return ( 
        <div class="ml-6 w-50">

<button class="absolute top-4 left-4 text-center text-green border-solid border-2 border-green border-opacity-10 text-18 px-3_5 py-3 rounded-round"><Image  src="/croix.svg" alt="site logo" width={16} height={16} /></button>

            <h3 class="mt-20 text-16">3/4</h3>

            <h1 class="mt-4 text-40">UN PACKAGING CONÇU PAR UN ARTISTE</h1>

            <p class="mt-2 text-16 w-70">Des artistes de tout horizon travaillent sur le design des box et les étiquettes des bouteilles, 
            sans aucune limite et avec toute leur liberté d’expression. 
            Une box au design unique, à collectionner.</p>

            <div class="mt-8 inline-block">
                <Image class="rounded-2" src="/packaging.png" alt="Cuvée Exclusive" width={300} height={200} />
            </div>

            <div class="inline-block">
                <Image class="rounded-2 ml-2" src="/packaging2.png" alt="Cuvée Exclusive" width={300} height={200} />
            </div>

            <div>
                <hr class="mt-4 bg-black opacity-20 h-10 w-78"></hr>
            </div> 

        <div>
            <div class="absolute left-6 mt-6 inline-block">
                <Image  src="/ArrowGauche.svg" alt="Cuvée Exclusive" width={80} height={120} />
                <Link href="/cuvee_exclusive_2"><a class="inline-block text-black2 opacity-60">PRÉCÉDENT</a></Link>

            </div>

            <div class=" absolute left-24 mt-6 inline-block">
                <Link href="/cuvee_exclusive_4"><a class="inline-block">SUIVANT</a></Link>
                <Image  src="/ArrowDroite.svg" alt="Cuvée Exclusive" width={80} height={120} />
            </div>
            
        </div>
            
        </div>

     );
}