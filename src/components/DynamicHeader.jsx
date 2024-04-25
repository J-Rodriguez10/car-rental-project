import { redUnderlineSVG } from "../assets/SVGs";

function DynamicHeader({header, children=undefined, hasRedUnderline=false, subtitle=undefined, headerColor="white" }) {
  return (
    <header className="dynamic-header">
      {/* header */}
      <h2 style={{ color: headerColor }}>{header}</h2>

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
