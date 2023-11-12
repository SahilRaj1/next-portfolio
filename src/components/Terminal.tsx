'use client'

import React, { useState, useEffect } from 'react';

interface TerminalProps {
    terminalText: string;
};

const Terminal: React.FC<TerminalProps> = ({ terminalText }) => {

    const [text, setText] = useState('');

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
        if (currentIndex <= terminalText.length) {
            setText(terminalText.substring(0, currentIndex));
            currentIndex++;
        } else {
            clearInterval(interval);
        }
        }, 100);
        return () => clearInterval(interval);
    }, []);

  return (
        <>
            {text}
        </>
  )
}

export default Terminal;