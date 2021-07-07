import React, { useState } from "react";
import { Navbar } from "../../components/navbar";


export default function Register() {
  
  const [mail, setMail] = useState("");

  const handleSubmit = async () => {
    const data = {
      mail,
    }

    const path = `${process.env.HOST}/register/createParticulier`;
    const init = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
    const response: Response = await fetch(path, init);

    console.log(response);
    if(response.ok) {
      //allow redirection
    } else {
      // display errors message
    }

  }

    return (
      <main>
          <Navbar />
          <form>
            <label>
              mail :
              <input type="text" value={mail} onChange={(event) => {
                const value = event.target.value;
                setMail(value);
              }}/>
            </label>

            <input type="button" value="Envoyer" onClick={handleSubmit}/>
          </form>
      </main>
    )
}



// export async function getServerSideProps(data: { mail: string; password: string; }) {
//   const path = `http://localhost:3001/user/createuser`;
//   const init = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: data,
//   };
//   const response: Response = await fetch(path, init);
    
//   console.log(response);

//     if (!response) {
//         return {
//             redirect: {
//                 destination: '/',
//                 permanent: false,
//             },
//         }
//     }
//     return {
//         props: { response }, // will be passed to the page component as props
//         revalidate : 15
//     }
  
    
// }

// export async function getServerSideProps(context: any) {

//     const res = await fetch(`http://localhost:3001/user/createuser`)
//     console.log(res);

//     // if (!artists) {
//     //     return {
//     //         redirect: {
//     //             destination: '/',
//     //             permanent: false,
//     //         },
//     //     }
//     // }
//     return {
//         props: { res }, // will be passed to the page component as props
//         revalidate : 15
//     }
  
//   }




  // // Update inputs value
  // const handleMail = () => (e) => {
  //   const mail = e.target.mail;
  //   const value = e.target.value;
  //   setMail({
  //     [mail: value
  //   ));
  // };

  // // Update inputs value
  // const handlePassword = () => (e) => {
  //   const mail = e.target.mail;
  //   const value = e.target.value;
  //   setData((prevState) => ({
  //     ...prevState,
  //     [mail]: value
  //   }));
  // };