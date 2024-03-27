import { redUnderlineSVG } from "../../assets/SVGs";

function Benefit({ icon, label, children }) {
  return (
    <div className="benefit">
      <div className="icon-cont">{icon}</div>

      <div className="underline-cont">{redUnderlineSVG}</div>

      <h3>{label}</h3>
      <p>{children}</p>
    </div>
  );
}

export default Benefit;
