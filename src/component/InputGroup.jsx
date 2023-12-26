import InputDate from "./InputDate";
import InputName from "./InputName";
import InputSurname from "./InputSurname";

function InputGroup() {
  return (
    <div>
      <InputName></InputName>
      <InputSurname></InputSurname>
      <InputDate></InputDate>
    </div>
  );
}

export default InputGroup;
