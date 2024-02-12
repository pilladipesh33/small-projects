import { useState } from "react";
import "./style.scss";
import { accordionData } from "./data";
import { ChevronDown, ChevronUp} from "lucide-react";

type AccordionComponentProps = {
  title: string,
  content: string
}

export const Accordian = () => {
  return (
    <main>
      <h1 className="title">Accordian</h1>
      <div className="container">
        {accordionData.map((items) => (
          <div>
            <AccordionComponent title={items.title} content={items.content} />
          </div>
        ))}
      </div>
    </main>
  );
};

const AccordionComponent = ({title, content}: AccordionComponentProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="accordionContainer">
      <div className="header" onClick={() => setIsOpen(!isOpen)}>
        <h1>{title}</h1>
        {isOpen == true ? (
          <ChevronUp height={30} width={30} />
          ) : (
          <ChevronDown height={30} width={30}/>
        )}
      </div>
      {isOpen && <body>{content}</body>}
      <span className="border" />
    </div>
  );
};
