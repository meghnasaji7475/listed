import { FunctionComponent, useCallback } from "react";

const SignIn: FunctionComponent = () => {
  const onRightSideClick = useCallback(() => {
    window.open("/dashboard");
  }, []);

  return (
    <div className="relative w-full h-[1024px] overflow-hidden text-left text-base text-black font-montserrat">
      <div
        className="absolute top-[0px] left-[588px] bg-background w-[852px] h-[1024px] cursor-pointer"
        
      />
      <div className="absolute top-[0px] left-[0px] bg-black w-[588px] h-[1024px]" />
      <b className="absolute top-[464px] left-[171px] text-[72px] text-white">
        Board.
      </b>
      <div className="absolute top-[409px] left-[832px] w-[385px] h-[356px] font-lato">
        <div className="absolute top-[0px] left-[0px] w-[385px] h-[317px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-white" />
        </div>
        <div className="absolute top-[59px] left-[30px] w-[325px] h-10">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-background" />
        </div>
        <div className="absolute h-[11.24%] w-[84.42%] top-[41.57%] right-[7.79%] bottom-[47.19%] left-[7.79%] rounded-3xs bg-field-color-darker" />
        <div className="absolute top-[44.38%] left-[11.69%]"><input type="text" /></div>
        <div className="absolute h-[5.34%] w-[0.26%] top-[44.52%] right-[68.7%] bottom-[50.14%] left-[31.04%] box-border border-r-[1px] border-solid border-icon" />
        <div className="absolute top-[247px] left-[30px] w-[325px] h-10 text-center text-white font-montserrat">
          <div className="absolute top-[0px] left-[0px] w-[325px] h-10">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-black" />
          </div>
          <b className="absolute top-[9px] left-[112.58px] inline-block w-[101.96px] h-[21.71px] cursor-pointer" onClick={onRightSideClick}>
            Sign In
          </b>
        </div>
        <div className="absolute top-[30px] left-[30px]">Email address</div>
        <div className="absolute top-[69px] left-[45px]"><input type="text" /> </div>
        <div className="absolute top-[119px] left-[30px]">Password</div>
        <div className="absolute top-[208px] left-[31px] text-link cursor-pointer">
          Forgot password?
        </div>
        <div className="absolute top-[337px] left-[62px] text-center text-secondary-text">
          <span>{`Don’t have an account? `}</span>
          <span className="text-link cursor-pointer">Register here</span>
        </div>
      </div>
      <div className="absolute top-[354px] left-[832px] w-[180px] h-[30px] text-center text-xs text-secondary-text">
        <div className="absolute top-[0px] left-[0px] w-[180px] h-[30px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-white" />
        </div>
        <div className="absolute top-[8px] left-[43px] cursor-pointer">
          Sign in with Google
        </div>
        <img
          className="absolute top-[8px] left-[19px] w-3.5 h-3.5 overflow-hidden"
          alt=""
          src="/googleicon-1.svg"
        />
      </div>
      <div className="absolute top-[354px] left-[1037px] w-[180px] h-[30px] text-center text-xs text-secondary-text">
        <div className="absolute top-[0px] left-[0px] w-[180px] h-[30px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-white" />
        </div>
        <div className="absolute top-[8px] left-[46px] cursor-pointer">Sign in with Apple</div>
        <img
          className="absolute top-[7px] left-[24px] w-[11.5px] h-3.5 overflow-hidden"
          alt=""
          src="/apple-1.svg"
        />
      </div>
      <b className="absolute top-[260px] left-[832px] text-17xl">Sign In</b>
      <div className="absolute top-[309px] left-[832px] font-lato">
        Sign in to your account
      </div>
    </div>
  );
};

export default SignIn;
