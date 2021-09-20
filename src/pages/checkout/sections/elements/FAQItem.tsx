import React, { useState } from "react";
import { FaqToggle, Image, TextBaseBold, TextBase, FaqImage } from "components";

type Props = {
  faq: {
    question: string;
    answer: {
      __html: string;
    };
    id: string;
  };
};

export const FAQItem: React.FC<Props> = ({ faq }) => {
  const [isChecked, setISChecked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <FaqToggle
      onClick={() => {
        setISChecked(!isChecked);
        setIsOpen(!isOpen);
      }}
    >
      <TextBaseBold fontWeight="600" margin="1rem 0.5rem">
        {faq.question}
        <FaqImage transform={isOpen ? "rotate(180deg)" : ""}>
          <Image src="expand_more" />
        </FaqImage>
      </TextBaseBold>
      {isChecked ? (
        <TextBase margin="1rem 0.5rem">
          <span dangerouslySetInnerHTML={faq.answer} />
        </TextBase>
      ) : (
        <div></div>
      )}
    </FaqToggle>
  );
};
