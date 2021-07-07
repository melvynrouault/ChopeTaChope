import React, { useState } from "react";
import { Navbar } from "../../components/navbar";


export default function Register() {
  
  const [mail, setMail] = useState("");

  const handleSubmit = async () => {
    const data = {
      mail,
    }

    const path = `${process.env.HOST}/register/createProfessionnel`;
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