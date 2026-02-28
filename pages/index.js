import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Lake Retreat Anfo – Lago d'Idro</title>
        <meta name="description" content="Appartamento vacanze Lago d’Idro con vista lago mozzafiato" />

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `}} />
      </Head>

      <main style={{fontFamily:"sans-serif", padding:"40px"}}>
        <h1>Lake Retreat Anfo</h1>
        <p>Vista lago mozzafiato sul Lago d’Idro</p>
        <button style={{padding:"12px 20px", background:"#1E453E", color:"white"}}>
          Verifica disponibilità
        </button>
      </main>
    </>
  )
}
