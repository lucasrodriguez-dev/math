import React, { useRef, useState } from "react";
import { math_symbols } from "../../assets/mathSymbols";
import { CopyIcon } from "../../icons/CopyIcon";
import { ClearIcon } from "../../icons/ClearIcon";

export function MathTable() {

    const [text, setText] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)

  return (
    <section className="flex flex-col gap-5">
      <div className="flex flex-row items-stretch h-10">
        <input type="text" className="outline-none w-10/12" value={text} ref={inputRef} onChange={(e) => setText(e.target.value)} />
        <button className="btn-secondary h-full overflow-hidden" onClick={() => navigator.clipboard.writeText(text)}><CopyIcon className="w-5 h-5"/></button>
        <button className="btn-secondary bg-purple-200" onClick={() => {
            navigator.clipboard.writeText(text)
            setText("")
            inputRef.current?.focus()
        }
        }><ClearIcon className="w-5 h-5"/></button>
      </div>
      <div className="flex flex-row flex-wrap gap-10">
        {math_symbols.map((category) => (
          <article>
            <h3>{category.title}</h3>
            <div className="flex flex-col gap-1">
              {category.subcategories.map((subcategory, sIndex) => (
                <ul className="symbol_list" key={sIndex}>
                  {subcategory.symbols.map((someSymbol, index) => (
                    <li key={index}>
                      <button
                        title={someSymbol.name}
                        onClick={() => {
                            navigator.clipboard.writeText(someSymbol.letter)
                            setText((prevText) => prevText + someSymbol.letter)
                            inputRef.current?.focus()
                          }
                        }
                      >
                        {someSymbol.letter}
                      </button>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
