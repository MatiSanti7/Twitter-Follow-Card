import { useState } from "react";

/* eslint-disable react/prop-types */
export default function User({ children, formatUserName, userName }) {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  const [hidden, setHidden] = useState(true);

  let text = isFollowing ? "Siguiendo" : "Seguir";
  let btnClassName = "btn p-1 px-4 rounded-full font-medium ";
  if (isFollowing) {
    btnClassName = btnClassName.concat(
      "bg-[#16191D] text-[#EFF2F5] border-[#51565A] border-solid border-2 hover:bg-[#331F24] hover:border-[#CE1D28] hover:text-[#CE1D28]"
    );
  } else {
    btnClassName = btnClassName.concat("bg-[#EFF2F5] hover:bg-[#656A6F]");
  }
  return (
    <article className="p-2 px-6 flex items-center justify-between hover:bg-[#ffffff05]">
      <header className="flex flex-row items-center">
        <img
          src={`https://unavatar.io/${userName}`}
          alt=""
          className="w-[60px] h-[60px] rounded-full mr-2"
        />
        <div className="flex flex-col">
          {children}
          <span className="text-[#656A6F]">{formatUserName(userName)}</span>
        </div>
      </header>
      <aside>
        <button
          className={btnClassName}
          onClick={handleClick}
          onMouseEnter={() => setHidden(false)}
          onMouseLeave={() => setHidden(true)}
        >
          {isFollowing && !hidden ? "Dejar de seguir" : text}
        </button>
      </aside>
    </article>
  );
}
