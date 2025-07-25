import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/', { replace: true });
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <>
      <h1 className="text-2xl font-semibold pt-4">404 - Not found</h1>
      <img src="/images/404.webp" className="rounded-lg" />
    </>
  );
}
