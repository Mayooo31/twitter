// css and styles
import photo1 from "../assets/photo1.jpg";
import styles from "../styles";

const Navbar = () => {
  const theme: string = "rgb(255, 122, 0)";

  return (
    <div
      className={`sticky top-0 left-0 xs:left-[70px] w-full xs:w-[calc(100%-70px)] ss:w-full px-4 pt-3 bg-[#15202bed] pb-[1px] ${styles.borderBottom} max-w-[600px]`}
    >
      <div className="flex items-center pb-2">
        <h1 className="hidden xs:block text-xl font-bold">Hlavní stránka</h1>
        <div className="w-[calc(50%-14px)] xs:hidden">
          <img className="w-9 h-9 rounded-full" src={photo1} />
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 30"
          fill={theme}
          className="w-7 h-7 xs:hidden"
        >
          {" "}
          <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z" />
        </svg>
      </div>
      <div className="flex w-full">
        <a className="w-[50%] h-[53px]">
          <div className="relative h-full w-fit m-auto grid place-items-center">
            <span className="font-semibold">Pro vás</span>
            <span
              style={{ backgroundColor: theme }}
              className="absolute bottom-0 w-full h-1 rounded-full"
            ></span>
          </div>
        </a>
        <a className="w-[50%] h-[53px]">
          <div className="relative h-full w-fit m-auto grid place-items-center">
            <span className="font-semibold">Sledování</span>
            {/* <span
              style={{ backgroundColor: theme }}
              className="absolute bottom-0 w-full h-1 rounded-full"
            ></span> */}
          </div>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
