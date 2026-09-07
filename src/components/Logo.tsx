import * as React from "react"

const Logo: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 300 104"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Tailored Santa"
    className={className}
    style={{ display: "block" }}
  >
    <text
      x="150" y="30"
      textAnchor="middle"
      fontFamily="'Inter','Segoe UI',Helvetica,sans-serif"
      fontWeight="800"
      fontSize="19"
      letterSpacing="7"
      fill="#14653f"
    >
      TAILORED
    </text>
    <line x1="42"  y1="42" x2="126" y2="42" stroke="#c62828" strokeWidth="1.5"/>
    <text x="150" y="46" textAnchor="middle" fontSize="12" fill="#c62828" fontFamily="serif">❄</text>
    <line x1="174" y1="42" x2="258" y2="42" stroke="#c62828" strokeWidth="1.5"/>
    <text
      x="150" y="86"
      textAnchor="middle"
      fontFamily="'Fredoka','Trebuchet MS',sans-serif"
      fontWeight="600"
      fontSize="48"
      fill="#c62828"
    >
      Santa
    </text>
  </svg>
)

export default Logo
