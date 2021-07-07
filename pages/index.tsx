import Head from 'next/head'
import React from 'react'
import { Navbar } from '../components/navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ChopeTaChope</title>
        <meta name="Title" content="Welcome" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenue sur le site de ChopeTaChope 
        </h1>
        <Navbar />
      </main>

      <footer className={styles.footer}>
          Copyright 2021
      </footer>
    </div>
  )
}
