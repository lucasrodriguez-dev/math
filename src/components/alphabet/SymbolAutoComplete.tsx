import { useCombobox } from "downshift";
import type { MathSymbol } from "../../types/general";
import { getLastWord, includesText, mergeRefs, replaceLastWord } from "../../functions/utils";

type SymbolAutocompleteProps = {
  symbols: MathSymbol[];
  inputRef: React.RefObject<HTMLInputElement>;
  inputValue: string;
  setInputValue: (val: string) => void;
  onSymbolInsert: (sym: MathSymbol) => void;
};

// Detecta el último token del tipo ":alfa"
function getCurrentToken(text: string): { start: number; end: number; word: string } | null {
  const match = /(?:^|\s):(\w+)$/.exec(text);
  if (!match) return null;
  const word = match[1];
  const end = text.length;
  const start = end - word.length - 1; // incluye el ":"
  return { start, end, word };
}

export default function SymbolAutocomplete({
  symbols,
  inputRef,
  inputValue,
  setInputValue,
  onSymbolInsert,
}: SymbolAutocompleteProps) {
  const token = getCurrentToken(inputValue);

  const items = token ? symbols.filter((sym) => includesText(sym.name, token.word)) : [];

  const {isOpen,getInputProps,getItemProps,getMenuProps,highlightedIndex} = useCombobox({
    items,
    itemToString: (item) => item?.letter || "",
    inputValue,
    onSelectedItemChange: ({ selectedItem }) => {
      if (selectedItem && token) {
        const newText = inputValue.slice(0, token.start) + selectedItem.letter + inputValue.slice(token.end);
        setInputValue(newText);
        onSymbolInsert(selectedItem);
      }
    },
  });

  return (
    <div className="relative w-full">
      <input
        {...getInputProps({
          className: 'w-full h-full pr-12 rounded-md outline-none',
          placeholder: 'Escriba expresiones usando : al inicio',
          ref: mergeRefs(inputRef)
        })}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <ul
        {...getMenuProps()}
        className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto"
      >
        {isOpen &&
          items.map((item, index) => (
            <li
              key={index}
              {...getItemProps({ item, index })}
              className={`px-4 py-2 cursor-pointer ${
                highlightedIndex === index ? 'bg-primary-light' : ''
              }`}
            >
              {item.letter} ({item.name.split("/", 1)[0]})
            </li>
          ))}
      </ul>
    </div>
  );
}