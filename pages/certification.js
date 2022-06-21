import Image from 'next/image'

import styles from '../styles/Home.module.css'

export default function Certification() {
    return ( 
     <div className={styles.body}>
        <div class="min-h-screen width-screen bg-green">
            <Image class="mt-2" src="/logo.svg" alt="site logo" width={140} height={85} />

            <h1 class="text-white text-56 text-center mt-22">JE CERTIFIE QUE J’AI  L’ÂGE LÉGAL REQUIS POUR CONSOMMER DE L’ALCOOL. </h1>

            <div class="text-center">
            <button class="px-4 py-2 rounded-2_5 bg-white text-16 w-15 mt-2 text-center text-green" >ACCÉDER AU SITE</button>
            <button class="text-white text-16 ml-4">SORTIR</button>
            </div>

            <p class="text-white text-16 text-center mt-24 text-white">
                Vous devez avoir l’âge légal de votre pays, province ou territoire pour accéder à ce site.</p>
            <p class="text-white text-16 text-center">Veuillez consommer nos produits avec modération.</p>
        </div>
    // </div>
        
        
        



     );
}
 

