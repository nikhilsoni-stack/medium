import { Auth } from "../component/Auth";
import { Quate } from "../component/Quate";

export const Signup = () => {
  return (
    <div className="grid lg:grid-cols-2">
      <div>
        <Auth type={"signup"} />
      </div>
      <div className="hidden lg:block">
        <Quate />
      </div>
    </div>
  );
};
