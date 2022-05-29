import React, { useState } from "react";
import { IoMdCopy } from "react-icons/io";
interface TwitProps {
  text: string;
  showCounter: boolean;
  total: number;
  current: number;
}

const CounterComponent = (text: string) =>
  text.length < 100 ? (
    <p className="text-right text-sm text-green-800">{text.length}</p>
  ) : (
    <p className="text-right text-sm text-red-800">
      {text.length}/{text.length - 100}
    </p>
  );

const Twit: React.FC<TwitProps> = ({ text, total, showCounter, current }) => {
  const [show, setShow] = useState(false);
  return (
    <div
      onMouseOver={() => setShow(true)}
      onMouseOut={() => setShow(false)}
      onClick={async () => await navigator.clipboard.writeText(text)}
      className="shadow transition-all border border-gray-300 rounded-lg p-4 my-2 cursor-pointer hover:bg-blue-100"
    >
      {show && <IoMdCopy className="animate-pulse" />}
      {text}
      {CounterComponent(text)}
      {showCounter && (
        <span>
          {current}/{total}
        </span>
      )}
    </div>
  );
};

export default Twit;
