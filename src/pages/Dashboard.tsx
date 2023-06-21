import { FunctionComponent } from "react";

const Dashboard: FunctionComponent = () => {
  return (
    <div className="relative bg-background w-full h-[1024px] overflow-hidden text-left text-sm text-black font-lato">
      <div className="absolute top-[40px] left-[40px] w-[280px] h-[944px] text-lg text-white font-montserrat">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[30px] bg-black" />
        <div className="absolute top-[87.92%] left-[17.86%] text-sm cursor-pointer">Help</div>
        <div className="absolute top-[91.84%] left-[17.86%] text-sm cursor-pointer">
          Contact Us
        </div>
        <div className="absolute top-[43.64%] left-[31.43%] cursor-pointer">Settings</div>
        <div className="absolute top-[37.08%] left-[31.43%] cursor-pointer">Users</div>
        <div className="absolute top-[30.51%] left-[31.43%] cursor-pointer">Schedules</div>
        <div className="absolute top-[23.94%] left-[31.43%] cursor-pointer">Transactions</div>
        <b className="absolute top-[17.37%] left-[31.43%] cursor-pointer">Dashboard</b>
        <img
          className="absolute h-[2.2%] w-[6.43%] top-[23.94%] right-[75.71%] bottom-[73.86%] left-[17.86%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/transaction-icon.svg"
        />
        <img
          className="absolute h-[2.07%] w-[6.96%] top-[30.64%] right-[75.45%] bottom-[67.29%] left-[17.59%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/schedule-icon.svg"
        />
        <img
          className="absolute h-[1.91%] w-[6.43%] top-[17.58%] right-[75.71%] bottom-[80.51%] left-[17.86%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/dashboard-icon.svg"
        />
        <img
          className="absolute h-[1.91%] w-[6.09%] top-[43.86%] right-[76.06%] bottom-[54.24%] left-[17.86%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/setting-icon.svg"
        />
        <img
          className="absolute h-[1.91%] w-[6.43%] top-[37.29%] right-[75.71%] bottom-[60.81%] left-[17.86%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/user-icon.svg"
        />
        <b className="absolute top-[6.36%] left-[17.86%] text-17xl">Board.</b>
      </div>
      <div className="absolute top-[129px] left-[637.89px] w-[221.05px] h-[120px]">
        <div className="absolute top-[0px] left-[0px] w-[221.05px] h-[120px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-oldlace" />
        </div>
        <div className="absolute top-[45px] left-[25.11px] inline-block w-[126px]">
          Total Transactions
        </div>
        <b className="absolute top-[67px] left-[25.11px] text-5xl inline-block font-open-sans w-[65.26px]">
          1,520
        </b>
      </div>
      <div className="absolute top-[129px] left-[380px] w-[221.05px] h-[120px]">
        <div className="absolute top-[0px] left-[0px] w-[221.05px] h-[120px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-honeydew" />
        </div>
        <div className="absolute top-[45px] left-[25px] inline-block w-[124px]">
          Total Revenues
        </div>
        <b className="absolute top-[67px] left-[25px] text-5xl inline-block font-open-sans w-[124px]">
          $2,129,430
        </b>
        <img
          className="absolute h-1/5 w-[11.94%] top-[16.67%] right-[11.6%] bottom-[63.33%] left-[76.45%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector.svg"
        />
      </div>
      <div className="absolute top-[129px] left-[895.79px] w-[221.05px] h-[120px]">
        <div className="absolute top-[0px] left-[0px] w-[221.05px] h-[120px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-mistyrose" />
        </div>
        <div className="absolute top-[45px] left-[25.21px] inline-block w-[81px]">
          Total Likes
        </div>
        <b className="absolute top-[67px] left-[25.58px] text-5xl inline-block font-open-sans w-[65.26px]">
          9,721
        </b>
        <img
          className="absolute h-1/5 w-[10.54%] top-[16.67%] right-[11.56%] bottom-[63.33%] left-[77.9%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector1.svg"
        />
      </div>
      <div className="absolute top-[129px] left-[1158.95px] w-[221.05px] h-[120px]">
        <div className="absolute top-[0px] left-[0px] w-[221.05px] h-[120px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-lavender" />
        </div>
        <img
          className="absolute h-1/5 w-[16.65%] top-[16.67%] right-[11.39%] bottom-[63.33%] left-[71.95%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector2.svg"
        />
        <div className="absolute top-[45px] left-[25.58px] inline-block w-[85.26px]">
          Total Users
        </div>
        <b className="absolute top-[67px] left-[25.58px] text-5xl inline-block font-open-sans w-[44.21px]">
          892
        </b>
      </div>
      <div className="absolute top-[289px] left-[380px] w-[1000px] h-[359px]">
        <div className="absolute top-[0px] left-[0px] w-[1000px] h-[359px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-white" />
        </div>
        <div className="absolute top-[49px] left-[808px] inline-block w-[42px]">
          Guest
        </div>
        <div className="absolute top-[49px] left-[906px] inline-block w-[34px]">
          User
        </div>
        <b className="absolute top-[30px] left-[40px] text-lg inline-block font-montserrat w-[93px]">
          Activities
        </b>
        <div className="absolute top-[57px] left-[40px] w-[124px] h-[17px] text-secondary-text font-montserrat">
          <div className="absolute top-[0px] left-[0px] inline-block w-[111px]">
            May - June 2021
          </div>
          <img
            className="absolute h-[29.41%] w-[6.45%] top-[47.06%] right-[0%] bottom-[23.53%] left-[93.55%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector3.svg"
          />
        </div>
        <div className="absolute top-[105px] left-[40px] w-[921px] h-[212px] text-secondary-text">
          <div className="absolute top-[0px] left-[0px] w-[921px] h-[17px]">
            <div className="absolute top-[0px] left-[0px] inline-block w-[25.34px]">
              500
            </div>
            <div className="absolute top-[9.5px] left-[39.5px] box-border w-[882px] h-px border-t-[1px] border-solid border-field-color-darker" />
          </div>
          <div className="absolute top-[78px] left-[0px] w-[921px] h-[17px]">
            <div className="absolute top-[0px] left-[0px] inline-block w-[25.34px]">
              300
            </div>
            <div className="absolute top-[9.5px] left-[39.5px] box-border w-[882px] h-px border-t-[1px] border-solid border-field-color-darker" />
          </div>
          <div className="absolute top-[39px] left-[0px] w-[921px] h-[17px]">
            <div className="absolute top-[0px] left-[0px] inline-block w-[25.34px]">
              400
            </div>
            <div className="absolute top-[9.5px] left-[39.5px] box-border w-[882px] h-px border-t-[1px] border-solid border-field-color-darker" />
          </div>
          <div className="absolute top-[117px] left-[0px] w-[921px] h-[17px]">
            <div className="absolute top-[0px] left-[0px] inline-block w-[25.34px]">
              200
            </div>
            <div className="absolute top-[9.5px] left-[39.5px] box-border w-[882px] h-px border-t-[1px] border-solid border-field-color-darker" />
          </div>
          <div className="absolute top-[156px] left-[0px] w-[921px] h-[17px]">
            <div className="absolute top-[0px] left-[0px] inline-block w-[25.34px]">
              100
            </div>
            <div className="absolute top-[9.5px] left-[39.5px] box-border w-[882px] h-px border-t-[1px] border-solid border-field-color-darker" />
          </div>
          <div className="absolute top-[195px] left-[17.23px] w-[903.77px] h-[17px]">
            <div className="absolute top-[0px] left-[0px] inline-block w-[9.12px]">
              0
            </div>
            <div className="absolute top-[9.5px] left-[22.27px] box-border w-[882px] h-px border-t-[1px] border-solid border-field-color-darker" />
          </div>
        </div>
        <div className="absolute top-[54px] left-[787.53px] rounded-[50%] bg-light-red w-2.5 h-2.5" />
        <div className="absolute top-[54px] left-[885px] rounded-[50%] bg-light-green w-2.5 h-2.5" />
      </div>
      <div className="absolute top-[688px] left-[380px] w-[480px] h-64 font-montserrat">
        <div className="absolute top-[0px] left-[0px] w-[480px] h-64">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-white" />
        </div>
        <div className="absolute top-[72px] left-[244px] w-[98px] h-9">
          <div className="absolute top-[3px] left-[0px] rounded-[50%] bg-darkseagreen w-[11px] h-[11px]" />
          <b className="absolute top-[0px] left-[21px]">Basic Tees</b>
          <div className="absolute top-[22px] left-[21px] text-xs font-lato text-secondary-text">
            55%
          </div>
        </div>
        <div className="absolute top-[31px] left-[327px] w-[97px] h-[15px] text-xs text-secondary-text">
          <div className="absolute top-[0px] left-[0px] inline-block w-[97px]">
            May - June 2021
          </div>
        </div>
        <img
          className="absolute h-[1.95%] w-[1.67%] top-[14.45%] right-[8.96%] bottom-[83.59%] left-[89.38%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector3.svg"
        />
        <div className="absolute top-[129px] left-[244px] w-[168px] h-9">
          <div className="absolute top-[3px] left-[0px] rounded-[50%] bg-khaki w-[11px] h-[11px]" />
          <b className="absolute top-[0px] left-[21px]">Custom Short Pants</b>
          <div className="absolute top-[22px] left-[21px] text-xs font-lato text-secondary-text">
            31%
          </div>
        </div>
        <div className="absolute top-[186px] left-[244px] w-32 h-9">
          <div className="absolute top-[3px] left-[0px] rounded-[50%] bg-lightcoral w-[11px] h-[11px]" />
          <b className="absolute top-[0px] left-[21px]">Super Hoodies</b>
          <div className="absolute top-[22px] left-[21px] text-xs font-lato text-secondary-text">
            14%
          </div>
        </div>
        <b className="absolute top-[30px] left-[40px] text-lg">Top products</b>
        <img
          className="absolute top-[82px] left-[60px] w-[134px] h-[134px]"
          alt=""
          src="/pie-chart.svg"
        />
      </div>
      <div className="absolute top-[688px] left-[900px] w-[480px] h-64 text-xs text-icon font-montserrat">
        <div className="absolute top-[0px] left-[0px] w-[480px] h-64">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-white" />
        </div>
        <b className="absolute top-[30px] left-[40px] text-lg text-black">
          Today’s schedule
        </b>
        <div className="absolute top-[77px] left-[40px] w-[251px] h-[66px] font-lato">
          <b className="absolute top-[3px] left-[15px] text-sm text-dimgray">
            Meeting with suppliers from Kuta Bali
          </b>
          <div className="absolute top-[25px] left-[15px]">14.00-15.00</div>
          <div className="absolute top-[44px] left-[15px]">{`at Sunset Road, Kuta, Bali `}</div>
          <div className="absolute top-[-2.5px] left-[-2.5px] box-border w-[5px] h-[71px] border-r-[5px] border-solid border-light-green" />
        </div>
        <div className="absolute top-[34px] left-[398px] text-secondary-text">
          See All
        </div>
        <img
          className="absolute h-[3.13%] w-[1.04%] top-[14.84%] right-[6.25%] bottom-[82.03%] left-[92.71%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector4.svg"
        />
        <div className="absolute top-[156px] left-[40px] w-[227px] h-[66px] font-lato">
          <b className="absolute top-[3px] left-[15px] text-sm text-dimgray">
            Check operation at Giga Factory 1
          </b>
          <div className="absolute top-[25px] left-[15px]">18.00-20.00</div>
          <div className="absolute top-[44px] left-[15px]">{`at Central Jakarta `}</div>
          <div className="absolute top-[-2.5px] left-[-2.5px] box-border w-[5px] h-[71px] border-r-[5px] border-solid border-cornflowerblue" />
        </div>
      </div>
      <div className="absolute top-[604px] left-[559px] w-[648px] h-[19px] text-secondary-text font-open-sans">
        <div className="absolute top-[0px] left-[0px] font-lato">Week 1</div>
        <div className="absolute top-[0px] left-[200px]">Week 2</div>
        <div className="absolute top-[0px] left-[400px]">Week 3</div>
        <div className="absolute top-[0px] left-[600px]">Week 4</div>
      </div>
      <img
        className="absolute top-[424px] left-[459px] w-[880.5px] h-[98px]"
        alt=""
        src="/line-chart-2.svg"
      />
      <img
        className="absolute top-[423.5px] left-[459px] w-[879.5px] h-[135px]"
        alt=""
        src="/line-chart-1.svg"
      />
      <img
        className="absolute h-[2.34%] w-[1.44%] top-[14.55%] right-[42.1%] bottom-[83.11%] left-[56.46%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/total-transactions-icon.svg"
      />
      <div className="absolute top-[60px] left-[380px] w-[1000px] h-[30px] text-5xl font-montserrat">
        <b className="absolute top-[0px] left-[0px]">Dashboard</b>
        <div className="absolute top-[0px] left-[713px] w-[180px] h-[30px] text-sm text-light-grey font-lato">
          <div className="absolute top-[0px] left-[0px] w-[180px] h-[30px]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-white" />
          </div>
          <div className="absolute top-[6px] left-[15px]"> <input type="text"/> </div>
          <img
            className="absolute top-[9px] left-[153px] w-[12.71px] h-3"
            alt=""
            src="/search-icon.svg"
          />
        </div>
        <img
          className="absolute top-[0px] left-[970px] w-[30px] h-[30px] object-cover"
          alt=""
          src="/mask-group@2x.png"
        />
        <img
          className="absolute h-[66.67%] w-[1.8%] top-[16.67%] right-[5.9%] bottom-[16.67%] left-[92.3%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector5.svg"
        />
      </div>
    </div>
  );
};

export default Dashboard;
