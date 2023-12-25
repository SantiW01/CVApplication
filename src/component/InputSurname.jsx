import { useState } from "react";

function InputSurname() {
  const [lastName, setLastName] = useState("");
  return (
    <div>
      <legend>Last name</legend>
      <input
        type="text"
        name="lastname"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
      />
    </div>
  );
}

export default InputSurname;
