import { useState } from "react"


const FormName = () => {
    const [name, setName] = useState("");
  return (
    <div><input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    <p>Nama Kamu : {name || "Belum diisi"}</p></div>
  )
}

export default FormName