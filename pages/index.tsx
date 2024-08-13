import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello from <a href="https://www.laconic.com/">Laconic!</a>
        </h1>

        <div className={styles.grid}>

        <p className={styles.card}>
          Laconic Address has value: {process.env.CERC_TEST_WEBAPP_CONFIG1}
        </p>

        <p className={styles.card}>
          Public Key has value: {process.env.CERC_TEST_WEBAPP_CONFIG2}
        </p>

        <p className={styles.card}>
          WEBAPP_DEBUG has value: {process.env.CERC_WEBAPP_DEBUG}
        </p>

        </div>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.laconic.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by &nbsp;
          <svg width="133" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
            d="M37.761 22.302h9.246v-2.704h-6.155v-17.9h-3.09v20.604ZM59.314 1.697h-5.126l-5.357 20.605h3.194l1.34-5.151h6.618l1.34 5.151h3.348L59.314 1.697Zm-5.306 12.878 2.679-10.663h.103l2.575 10.663h-5.357ZM74.337 9.682h3.606c0-5.873-1.88-8.397-6.259-8.397-4.61 0-6.593 3.194-6.593 10.689 0 7.52 1.983 10.74 6.593 10.74 4.379 0 6.259-2.447 6.285-8.139h-3.606c-.026 4.456-.567 5.563-2.679 5.563-2.42 0-3.013-1.622-2.987-8.164 0-6.516.592-8.14 2.987-8.113 2.112 0 2.653 1.159 2.653 5.82ZM86.689 1.285c4.687.026 6.696 3.245 6.696 10.715 0 7.469-2.009 10.688-6.696 10.714-4.714.026-6.723-3.194-6.723-10.714 0-7.521 2.01-10.74 6.723-10.715ZM83.572 12c0 6.516.618 8.139 3.117 8.139 2.472 0 3.09-1.623 3.09-8.14 0-6.541-.618-8.164-3.09-8.138-2.499.026-3.117 1.648-3.117 8.139ZM99.317 22.276l-3.09.026V1.697h5.434l5.074 16.793h.052V1.697h3.09v20.605h-5.099l-5.409-18.08h-.052v18.054ZM116.615 1.697h-3.091v20.605h3.091V1.697ZM128.652 9.682h3.606c0-5.873-1.881-8.397-6.259-8.397-4.61 0-6.594 3.194-6.594 10.689 0 7.52 1.984 10.74 6.594 10.74 4.378 0 6.259-2.447 6.284-8.139h-3.605c-.026 4.456-.567 5.563-2.679 5.563-2.421 0-3.014-1.622-2.988-8.164 0-6.516.593-8.14 2.988-8.113 2.112 0 2.653 1.159 2.653 5.82Z" 
            fill="#000000">
            </path>
            <path fillRule="evenodd" clipRule="evenodd" 
            d="M4.05 12.623A15.378 15.378 0 0 0 8.57 1.714C8.573 1.136 8.54.564 8.477 0H0v16.287c0 1.974.752 3.949 2.258 5.454A7.69 7.69 0 0 0 7.714 24L24 24v-8.477a15.636 15.636 0 0 0-1.715-.095c-4.258 0-8.115 1.73-10.908 4.523-2.032 1.981-5.291 1.982-7.299-.026-2.006-2.006-2.007-5.266-.029-7.302Zm18.192-10.86a6.004 6.004 0 0 0-8.485 0 6.003 6.003 0 0 0 0 8.484 6.003 6.003 0 0 0 8.485 0 6.002 6.002 0 0 0 0-8.485Z" 
            fill="#000000">
            </path>
          </svg>
        </a>
      </footer>
    </div>
  )
}