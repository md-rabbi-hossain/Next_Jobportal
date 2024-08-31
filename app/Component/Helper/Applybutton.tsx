import { authOptions } from "@/auth";
import { getSession } from "next-auth/react"; // Import for client-side session access
import React, { useEffect, useState } from "react";
import Button from "./Button";

const Applybutton = () => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    (async () => {
      const sessionData = await getSession(authOptions);
      setSession(sessionData);
    })();
  }, []);
  return (
    <div>
      {session ? (
        <Button text="Apply" url="/apply" />
      ) : (
        <Button text="Sign in to apply" />
      )}
    </div>
  );
};

export default Applybutton;
