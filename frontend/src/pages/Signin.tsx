import { Auth } from "../component/Auth";
import { Quate } from "../component/Quate";

export const Signin = () => {
  return (
    <div className="grid grid-cols-2">
      <div>
        <Auth type={"signin"} />
      </div>
      <div className="none lg:block">
        <Quate />
      </div>
    </div>
  );
};
