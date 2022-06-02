import { randomNumberWithDigits } from "./utils";

export default function DivisionData({ divider, dividend, buildDivsion }) {
  const { divider: dividerValue, setDivider } = divider;
  const { dividend: dividendValue, setDividend } = dividend;

  return (
    <form className="my-form pure-form pure-form-stacked">
      <fieldset>
        <div>
          <label htmlFor="divider">
            De cuantas cifreas quieres el numero divisor
          </label>
          <input
            id="divider"
            type="number"
            onChange={({ target: { value } }) =>
              setDivider(randomNumberWithDigits(+value))
            }
          />
        </div>

        <div>
          <label htmlFor="dividend">
            De cuantas cifras quieres el numero dividendo
          </label>
          <input
            name="dividend"
            type="number"
            onChange={({ target: { value } }) =>
              setDividend(randomNumberWithDigits(+value))
            }
          />
        </div>

        <button
          className="pure-button pure-button-primary button-large"
          onClick={buildDivsion}
        >
          Generar division
        </button>
      </fieldset>
    </form>
  );
}
