export const PatternBorder = ({ side }: { side: 'left' | 'right' }) => {
  return (
    <div 
      className={`
        absolute top-0 h-full w-4 lg:w-12 z-50
        ${side === 'left' ? 'left-0' : 'right-0'}
        bg-[url('/tribal-pattern-vertical.svg')] 
        bg-repeat-y 
        bg-contain 
        bg-center
      `} 
    />
  );
};
