import { redUnderlineSVG } from "../assets/SVGs";

function DynamicHeader({title, children=undefined, hasRedUnderline=false, subtitle=undefined, titleColor="white" }) {
  return (
    <header className="dynamic-header">
      {/* title */}
      <h2 style={{ color: titleColor }}>{title}</h2>

      {/* subtitle */}
      {subtitle && <h4>{subtitle}</h4>}

      {/* red underline */}
      {hasRedUnderline && (
        <div className="underline-cont">{redUnderlineSVG}</div>
      )}

      {/* body paragraph */}
      {children && <p>{children}</p>}
    </header>
  );
}

export default DynamicHeader;
