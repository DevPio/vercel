import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Twit from "./components/Twit";

type Form = {
  twits: string;
};
function App() {
  const form = useForm<Form>({
    defaultValues: {
      twits: "",
    },
  });
  const [checked, setChecked] = useState(false);

  const twits = form.watch("twits").split("\n\n\n").filter(Boolean);

  const changeCheck = (event: React.ChangeEvent<HTMLInputElement>) =>
    setChecked(event.target.checked);

  return (
    <>
      <div className="m-5">
        <h1>Segue o Fio</h1>

        <div>
          <label htmlFor="total">Mostar total:</label>
          <input
            type="checkbox"
            onChange={changeCheck}
            name="total"
            id="total"
          />
        </div>
      </div>

      <div className="flex">
        <div className="flex-1">
          <textarea
            {...form.register("twits")}
            className="w-full h-screen m-5"
          ></textarea>
        </div>
        <div className="flex-1 text-center">
          <h2>Twits</h2>

          <div>
            {twits.length > 0 &&
              twits.map((twit, index) => (
                <Twit
                  showCounter={checked}
                  total={twits.length}
                  key={twit + index}
                  current={index + 1}
                  text={twit}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
