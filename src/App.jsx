import "./App.css";
import User from "./components/User";

function App() {
  const format = (userName) => `@${userName}`;

  return (
    <main className="bg-[#202020] h-screen grid place-content-center">
      <div className="bg-[#16191D] pt-6 pb-6 rounded-2xl w-[450px]">
        <p className="px-6 text-[#EFF2F5] font-extrabold text-xl pb-6">
          A quién seguir
        </p>
        <div className="flex flex-col">
          <User formatUserName={format} userName="midudev">
            <strong className="text-[#EFF2F5]">Miguel Ángel Durán</strong>
          </User>
          <User formatUserName={format} userName="goncy">
            <strong className="text-[#EFF2F5]">goncy.tsx</strong>
          </User>
          <User formatUserName={format} userName="FormulaArgOK">
            <strong className="text-[#EFF2F5]">FormulaArg</strong>
          </User>
        </div>
        <div className="pt-6 px-6">
          <a href="" className="text-[#1D9BF0]">
            Mostrar más
          </a>
        </div>
      </div>
    </main>
  );
}

export default App;
