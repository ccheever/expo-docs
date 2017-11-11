export const UL = ({ children }) => (
  <ul>
    {children}
    <style jsx>
      {`
      ul {
        padding: 0;
        margin-left: 15px;
      }
    `}
    </style>
  </ul>
)

export const OL = ({ children }) => (
  <ol>
    {children}
    <style jsx global>
      {`
      ol {
        padding-left: 0;
        margin-left: 15px;
      }
    `}
    </style>
  </ol>
)

export const LI = ({ children }) => (
  <li>
    {children}
    <style jsx>
      {`
      li {
        font-size: 1rem;
        line-height: 1.725rem;
        margin-bottom: 1.25rem;
      }
    `}
    </style>
  </li>
)
