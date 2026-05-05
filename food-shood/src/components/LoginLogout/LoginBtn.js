import { useState } from "react";

const LOGIN = "Login";
const LOGOUT = "Logout";

function LoginButton() {
  const [btnState, setBtnState] = useState(LOGIN);
  return (
    <div>
      <button
        onClick={() => {
          if (btnState === LOGIN) {
            setBtnState(LOGOUT);
          } else {
            setBtnState(LOGIN);
          }
        }}
      >
        {btnState}
      </button>
    </div>
  );
}

export default LoginButton;
