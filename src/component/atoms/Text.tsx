import React from 'react';
interface TextProps {
  text: string;
  color?: string;
  align?: string;
  props?: string;
}

const Text: React.FC<TextProps> = ({ text, color='normal', align='left', props='' }) => {
  return (
    <>
      <p className={`c-text u-color--${color} u-align--${align} ${props}`}>
      {text.split('<br>').map((line, index) => (
        <React.Fragment key={index}>
          {line}
          {index < text.split('<br>').length - 1 && <br />}
        </React.Fragment>
      ))}
      </p>
    </>
    
  );
}

export default Text;