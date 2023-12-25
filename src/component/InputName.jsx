import { useState } from "react";

function InputName() {
  const [firstName, setFirstName] = useState("");
  return (
    <div>
      <legend>First name</legend>
      <input
        type="text"
        name="firstname"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
      />
    </div>
  );
}

export default InputName;
