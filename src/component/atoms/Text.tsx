import React from 'react';
interface TextProps {
  text: string;
  color?: string;
  align?: string;
  props?: string;
  pcSize?: number;
  spSize?: number;
}

const Text: React.FC<TextProps> = ({ text, color='normal', align='left', props='', pcSize='16', spSize='15' }) => {
  return (
    <>
      <p className={`u-color--${color} u-align--${align} ${props} u-font-size${pcSize} u-font-size${spSize}--sp`}>
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