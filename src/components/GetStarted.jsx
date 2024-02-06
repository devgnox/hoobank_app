import { arrowUp } from "../assets";
import styles from "../style";

const GetStarted = () => (
  <div
    className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer hover:drop-shadow-[0_12px_41px_rgba(151,152,223,0.22)] transition ease-in-out`}
  >
    <div
      className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
    >
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
          <span className="text-gradient">Get</span>{" "}
        </p>
          <img
            src={arrowUp}
            className="w-[23px] h-[23px] object-contain"
            alt="arrow"
          />
      </div>
      <p className="font-poppins font-medium text-[18px] leading-[23px]">
        <span className="text-gradient">Started</span>{" "}
      </p>
    </div>
  </div>
);

export default GetStarted;
