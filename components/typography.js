export function TopHeader({ children }) {
  return <p className="top-header">
    {children}
    <style jsx>{`
    .top-header {
      font-family: 'Noto Serif', serif;
      color: #F8E71C;
      font-weight: 700;
      margin: 0;
      font-size: 37px;
      letter-spacing: -0.5px;
    }`}</style>
  </p>
}

export function Heading({ children, large, medium, small, color }) {
  return <p className="heading">
    {children}
    <style jsx>{`
    .heading {
      color: ${color || 'rgba(255,255,255,0.8)'};
      font-weight: 500;
      margin: 0;
      ${ large ? "font-size: 24px; margin: 20px 0;" : ""}
      ${ medium ? "font-size: 22px; margin: 7px 0;" : ""}
      ${ small ? "font-size: 18px; margin: 5px 0;" : ""}
    }`}</style>
  </p>
}

export function Text({ children, large, medium, small, xsmall, color }) {
  return <p className="text smthing">
    {children}
    <style jsx>{`
    .text {
      color: ${color || 'rgba(255,255,255,0.8)'};
      font-weight: 400;
      ${ large ? "font-size: 24px; margin: 10px 0; line-height: 37px;" : ""}
      ${ medium ? "font-size: 18px; margin: 7px 0; line-height: 27px;" : ""}
      ${ small ? "font-size: 16px; margin: 5px 0; line" : ""}
      ${ xsmall ? "font-size: 14px; margin: 2px 0;" : ""}
    }
    .smthing > a {
      text-decoration: underline;
    }`}</style>
  </p>
}
