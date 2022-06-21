import Image from 'next/image'
import Link from 'next/link';

export default function CuveeExclusive4() {
    return ( 
        <div class="ml-6 w-50">

<button class="absolute top-4 left-4 text-center text-green border-solid border-2 border-green border-opacity-10 text-18 px-3_5 py-3 rounded-round"><Image  src="/croix.svg" alt="site logo" width={16} height={16} /></button>

            <h3 class="mt-20 text-16">4/4</h3>

            <h1 class="mt-4 text-40">DES CARTES À COLLECTIONNER</h1>

            <p class="mt-2 text-16 w-70">Vous retrouverez également dans chaque box des cartes à collectionner,  
            à la fois sur le design conçu par les artistes et les artistes eux-mêmes. </p>

            <div class="mt-8 inline-block">
                <Image class="rounded-2" src="/carte.svg" alt="Cuvée Exclusive" width={300} height={300} />
            </div>

            <div class="inline-block">
                <Image class="rounded-2 ml-2" src="/carte2.svg" alt="Cuvée Exclusive" width={300} height={180} />
            </div>

            <div>
                <hr class="mt-4 bg-black opacity-20 h-10 w-78"></hr>
            </div> 

        <div>
            <div class="absolute left-6 mt-6 inline-block">
                <Image  src="/ArrowGauche.svg" alt="Cuvée Exclusive" width={80} height={120} />
                <Link href="/cuvee_exclusive_3"><a class="inline-block text-black2">PRÉCÉDENT</a></Link>

            </div>

            <div class=" absolute left-24 mt-6 inline-block">
            <Link href="/home"><a class="inline-block opacity-60">SUIVANT</a></Link>
                <Image  src="/ArrowDroite.svg" alt="Cuvée Exclusive" width={80} height={120} />
            </div>
            
        </div>
            
        </div>

     );
}