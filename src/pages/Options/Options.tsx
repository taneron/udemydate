import React from 'react';
import './Options.css';

interface Props {
  title: string;
}

const Options: React.FC<Props> = ({ title }: Props) => {
  return (
    <>
      <div className="OptionsContainer">{title} Page</div>
      <div>
        No options yet. Please check back later. <br />
      </div>
    </>
  );
};

export default Options;
