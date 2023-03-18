import React, { useState } from "react";
import BillComponent from "./BillComponent";

function TipCalculator() {
  const [bill, setBill] = useState(null);
  return (
    <main className="TipCalculator p-7 grid grid-cols-2 gap-6 rounded-[20px]">
      {/*Form inputs */}
      <section className="p-5 formInputs">
        <form action="/">
          <BillComponent setBill={setBill} />
          <p className="pt-8">Select Tip %</p>
          <div class="grid grid-cols-3 gap-5 buttons text-white mt-4 mb-8">
            <button type="submit" className="">
              5%
            </button>
            <button>10%</button>
            <button>15%</button>
            <button>25%</button>
            <button>50%</button>
            <input
              type="text"
              name=""
              id=""
              placeholder="Custom"
              className="text-center"
            />
          </div>
          <label htmlFor="totalBill">Number of People</label>
          <div className="inputIcons relative mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="16"
              className="absolute top-5 left-5"
            >
              <path
                fill="#7f9c9f"
                d="M9.573 7.729c.406 0 .784.07 1.126.209.342.14.639.33.881.569.232.227.438.503.614.82a5.1 5.1 0 01.407.949c.097.312.178.654.242 1.016.062.359.105.699.126 1.011.02.307.031.624.031.945 0 .836-.259 1.512-.768 2.01-.504.492-1.17.742-1.98.742H2.748c-.81 0-1.477-.25-1.98-.742C.259 14.76 0 14.084 0 13.248c0-.322.01-.64.032-.945.02-.312.063-.652.126-1.01.063-.363.144-.705.242-1.017.1-.323.238-.643.407-.948.176-.318.382-.594.613-.821.243-.238.54-.43.882-.57.342-.138.72-.208 1.125-.208.16 0 .313.067.61.265.183.123.397.264.636.421.204.134.48.259.822.372.333.11.671.167 1.005.167a3.19 3.19 0 001.006-.167c.341-.113.618-.238.822-.372l.636-.42c.296-.2.45-.266.61-.266zM6.598 0C7.63 0 8.522.38 9.252 1.129s1.1 1.666 1.1 2.724c0 1.06-.37 1.976-1.1 2.725-.73.75-1.623 1.13-2.654 1.13-1.03 0-1.924-.38-2.653-1.13-.73-.749-1.1-1.666-1.1-2.725 0-1.058.37-1.975 1.1-2.724C4.675.379 5.567 0 6.598 0z"
              />
            </svg>
            <input
              type="text"
              name="totalBill"
              id="totalBill"
              placeholder="0"
              className="py-2 px-5 text-end rounded-md"
            />
          </div>
          <button
            type="submit"
            className="text-white mt-8 rounded-md uppercase tracking-wide"
          >
            Calculate
          </button>
        </form>
      </section>
      {/*Display */}
      <section className="border displayBox rounded-[20px] p-11 m-3">
        <div className="grid grid-cols-2 gap-y-9 mt-5">
          <div className=" pt-3">
            <p className="text-white text-lg">Tip amount</p>
            <small className=" text-slate-400 text-base">/ person</small>
          </div>
          <div>
            <h2 className="text-7xl text-right">$0.00</h2>
          </div>
          <div className="pt-3">
            <p className="text-white text-lg">Total</p>
            <small className=" text-slate-400 text-base">/ person</small>
          </div>
          <div>
            <h2 className="text-7xl text-right">$0.00</h2>
          </div>
        </div>
        <button
          type="submit "
          className="uppercase p-4 text-xl resetButton mt-[153px] rounded-md tracking-wide"
        >
          Reset
        </button>
      </section>
    </main>
  );
}

export default TipCalculator;
