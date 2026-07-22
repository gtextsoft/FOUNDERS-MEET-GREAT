const DiamondRule = ({ className = "" }: { className?: string }) => (
  <div className={`diamond-rule ${className}`} aria-hidden>
    <span className="diamond-rule-mark" />
  </div>
);

export default DiamondRule;
