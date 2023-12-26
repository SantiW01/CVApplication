import { useState } from "react";

function InputDate() {
  const [date, setDate] = useState("");
  console.log(date);
  return (
    <div>
      <input
        type="date"
        name="inputdate"
        value={date}
        onChange={(event) => setDate(event.target.value)}
      />
    </div>
  );
}
export default InputDate;
