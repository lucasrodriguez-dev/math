import React, { useEffect, useRef, useState } from "react";
import { math_symbols } from "../../assets/mathSymbols";
import { CopyIcon } from "../../icons/CopyIcon";
import { ClearIcon } from "../../icons/ClearIcon";
import { CopyCheckIcon } from "../../icons/CopyCheckIcon";

export function MathTable() {
  const [text, setText] = useState("");
  const [justCopied, setJustCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setJustCopied(false)
  }, [text])

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text)
    setJustCopied(true)
  }

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  return (
    <section className="flex flex-col gap-5">
      <div className="flex flex-row h-10">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            className="w-full h-full pr-12 rounded-md outline-none"
            value={text}
            ref={inputRef}
            onChange={handleTextChange}
          />
          <button
            className="btn-secondary h-full bg-transparent absolute right-1 top-1/2 -translate-y-1/2"
            onClick={() => {
              setText("");
              inputRef.current?.focus();
            }}
          >
            <ClearIcon className="w-5 h-5" />
          </button>
        </div>
        <button
          className="btn-secondary h-full overflow-hidden"
          onClick={handleCopyClick}
        >
          {justCopied ? <CopyCheckIcon className="w-5 h-5" /> : <CopyIcon className="w-5 h-5" />}
        </button>
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
                          setText((prevText) => prevText + someSymbol.letter);
                          inputRef.current?.focus();
                        }}
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
