import Link from 'next/link';
import styles from './navbar.module.css';



export const Navbar = () => {  
    return (
      <>
        <nav>
          <div className="">
            <div className={styles.menu}>
              <Link href='/'>
                <a>
                  Home
                </a>
              </Link>
              <Link href='/particulier'>
                <a>
                  Particulier
                </a>
              </Link>
              <Link href="/professionnel">
                <a>
                  Professionnel
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </>
    )
};